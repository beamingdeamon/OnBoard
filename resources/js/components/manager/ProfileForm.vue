<template>
    <el-form
        ref="ruleFormRef"
        :model="profile"
        :rules="rules"
        label-position="top"
        size="large"
    >
        <div class="flex gap-6 my-6">
            <el-form-item
                label="Фамилия"
                prop="user.surname"
                class="w-[260px]"
                :rules="{
                    required: true,
                    message: 'Обязательное поле',
                    trigger: 'blur',
                }"
            >
                <el-input v-model="profile.user.surname"></el-input>
            </el-form-item>
            <el-form-item
                label="Имя"
                prop="user.name"
                class="w-[260px]"
                :rules="{
                    required: true,
                    message: 'Обязательное поле',
                    trigger: 'blur',
                }"
            >
                <el-input v-model="profile.user.name"></el-input>
            </el-form-item>
            <el-form-item
                label="Отчество"
                prop="user.middlename"
                class="w-[260px]"
            >
                <el-input v-model="profile.user.middlename"></el-input>
            </el-form-item>
        </div>
        <div class="flex gap-6">
            <el-form-item label="E-mail" class="w-[260px]">
                <el-input disabled v-model="profile.user.email"></el-input>
            </el-form-item>
            <el-form-item
                label="Номер телефона"
                prop="user.phone"
                class="w-[260px]"
                :rules="{
                    required: true,
                    message: 'Обязательное поле',
                    trigger: 'blur',
                }"
            >
                <el-input
                    v-model="profile.user.phone"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                ></el-input>
            </el-form-item>
        </div>
        <div class="py-5 px-6 delete-account mb-10 mt-20 max-w-max">
            <p class="font-bold text-sm text-black">Удалить аккаунт</p>
            <p class="text-13 pt-4 pb-2">
                При этом все ваши персональные данные будут удалены без
                возможности восстановления.
            </p>
            <el-button type="text" style="color: #7734fc"
                >Удалить мой аккаунт</el-button
            >
        </div>
        <el-button
            color="#FF6854"
            style="color: white"
            @click="submitForm(ruleFormRef)"
            >Сохранить</el-button
        >
        <el-button color="#F0F4F7" style="color: #6d767e">Отменить</el-button>
    </el-form>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
import router from "../../router";
const toast = useToast();
const email = ref("asd");
const store = useStore();
const rules = ref({});
const profile = computed(() => store.state.manager.profile);
onMounted(store.dispatch("manager/getProfile"));
const ruleFormRef = ref();
const form = ref({
    name: "",
    surname: "",
    middlename: "",
    phone: "",
});

const submitForm = async (formEl) => {
    console.log("sss");
    console.log(profile.value);
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .post("/api/v1/manager/profile_update", profile.value.user)
                    .then((res) => {
                        store.dispatch("manager/updateProfile", res.data);
                        toast.success("Сохранено");
                        router.push({ name: "manager" });
                    });
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error(error.request);
                } else {
                    toast.error(error.message);
                }
            }
        } else {
            console.log("error submit!", fields);
        }
    });
};
</script>
<style lang="scss" scoped>
.delete-account {
    border: 1px solid #dbe4eb;
    border-radius: 10px;
}
</style>
