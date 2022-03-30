<template>
    <div class="wrap">
        <form @submit.prevent="submit">
            <main-input
                id="surname"
                name="surname"
                type="text"
                labelText="Фамилия"
                placeholder="Фамилия"
                v-model="surname"
            />
            <main-input
                id="name"
                name="name"
                type="text"
                labelText="Имя"
                placeholder="Имя"
                v-model="name"
            />
            <main-input
                id="phone"
                name="phone"
                type="number"
                labelText="Телефон"
                placeholder="Телефон"
                v-model="phone"
            />

            <main-input
                id="company"
                name="company"
                type="text"
                labelText="Название компании"
                placeholder="Название компании"
                v-model="company"
            />
            <main-input
                id="company_num"
                name="company_num"
                type="number"
                labelText="Числинность сотрудников"
                placeholder="Числинность сотрудников"
                v-model="company_num"
            />
            <main-input
                id="email"
                type="email"
                name="email"
                labelText="Email"
                placeholder="Email"
                v-model="email"
            />
            <main-input
                id="password"
                type="password"
                name="password"
                labelText="Пароль"
                placeholder="Пароль"
                v-model="password"
            />
            <button>Register</button>
        </form>
        <form @submit.prevent="login">
            <main-input
                id="loginEmail"
                type="email"
                name="loginEmail"
                labelText="Email"
                placeholder="Email"
                v-model="loginEmail"
            />
            <main-input
                id="loginPassword"
                type="password"
                name="loginPassword"
                labelText="Пароль"
                placeholder="Пароль"
                v-model="loginPassword"
            />
            <button>Login</button>
        </form>
    </div>
</template>

<script>
import { ref } from "vue";

import { useToast } from "vue-toastification";
const toast = useToast();
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MainInput from "../components/utils/MainInput.vue";
// import { useUserStore } from "../stores/index";
export default {
    components: { MainInput },
    setup() {
        const store = useStore();
        const router = useRouter();

        const email = ref("");
        const password = ref("");
        const name = ref("");
        const surname = ref("");
        const phone = ref("");
        const company = ref("");
        const company_num = ref(null);

        const loginEmail = ref("");
        const loginPassword = ref("");

        const submit = async () => {
            const data = {
                name: name.value,
                surname: surname.value,
                company_name: company.value,
                employee_num: company_num.value,
                email: email.value,
                password: password.value,
                password_confirmation: password.value,
                phone: phone.value,
            };
            try {
                const res = await axios.post("/api/register", data);
                toast.success("Успешно зарегистрировались!");
            } catch (error) {
                if (error.response) {
                    if (error.response.data.errors) {
                        const errors = error.response.data.errors;
                        Object.entries(errors).map((obj) => {
                            const key = obj[0];
                            const value = obj[1];
                            value.map((error) => {
                                toast.error(error);
                            });
                        });
                    } else if (error.response.data.message) {
                        toast.error(error.response.data.message);
                    } else {
                        toast.error("Error!", error.message);
                    }
                } else if (error.request) {
                    toast.error("Error!", error.request);
                } else {
                    toast.error("Error!", error.message);
                }
            }
        };

        const login = async () => {
            const datas = {
                email: loginEmail.value,
                password: loginPassword.value,
            };
            await axios.get("/sanctum/csrf-cookie").then(async (response) => {
                try {
                    const res = await axios
                        .post("/api/login", datas)

                        .then(async (res) => {
                            localStorage.setItem(
                                "token",
                                res.data.access_token
                            );
                            axios.defaults.headers.common["Authorization"] =
                                "Bearer " + res.data.access_token;
                            await axios
                                .get("/api/me", {
                                    headers: {
                                        Authorization:
                                            "Bearer " + res.data.access_token,
                                    },
                                })
                                .then((res) => {
                                    store.dispatch("auth/login", res.data.data);
                                    router.push({
                                        name: store.state.auth.mainRoute,
                                    });
                                });
                        });
                } catch (error) {
                    if (error.response) {
                        if (error.response.data.errors) {
                            const errors = error.response.data.errors;
                            Object.entries(errors).map((obj) => {
                                const key = obj[0];
                                const value = obj[1];
                                value.map((error) => {
                                    toast.error(error);
                                });
                            });
                        } else if (error.response.data.message) {
                            toast.error(error.response.data.message);
                        } else {
                            toast.error("Error!", error.message);
                        }
                    } else if (error.request) {
                        toast.error("Error!", error.request);
                    } else {
                        toast.error("Error!", error.message);
                    }
                }
            });
        };
        return {
            email,
            password,
            submit,
            login,
            name,
            surname,
            phone,
            company,
            company_num,
            loginEmail,
            loginPassword,
        };
    },
};
</script>

<style scoped lang="scss">
form {
    display: flex;
    flex-direction: column;
    width: 100%;
    label {
        margin-bottom: 10px;
    }
}
.wrap {
    display: flex;
    width: 100%;
    gap: 50px;
}
</style>
