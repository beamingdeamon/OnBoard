// initial state
import { useToast } from "vue-toastification";
const toast = useToast();
import router from "../../router";
const state = {
    company: [],
    rules: {
        company_name: [
            {
                required: true,
                message: "Обязательное поле",
                trigger: "blur",
            },
        ],
        sphere: [
            {
                required: true,
                message: "Обязательное поле",
                trigger: "blur",
            },
        ],
        description: [
            {
                required: true,
                message: "Обязательное поле",
                trigger: "blur",
            },
        ],
    },
};

// getters
const getters = {};

// actions
const actions = {
    async getCompanyInfo({ commit }) {
        const res = await axios.get("/api/v1/hrd");
        const data = await res.data;
        commit("GET_COMPANY_INFO", data);
    },

    addContact({ commit }) {
        commit("ADD_CONTACT", { contact: "", contact_type_id: "" });
    },
    addAddress({ commit }) {
        commit("ADD_ADDRESS", {
            id: Date.now(),
            city_id: "",
            address: "",
            map: "",
        });
    },
    removeContact({ state, commit }, id) {
        const index = state.company.contacts.indexOf(id);
        if (index !== 0) {
            commit("REMOVE_CONTACT", index);
        }
    },
    removeAddress({ state, commit }, id) {
        const index = state.company.addresses.indexOf(id);
        if (index !== 0) {
            commit("REMOVE_ADDRESS", index);
        }
    },

    async submitForm({ state }, formEl) {
        if (!formEl) return;

        await formEl.validate(async (valid, fields, callback) => {
            console.log(fields);
            console.log(callback);
            if (valid) {
                try {
                    const res = await axios.post(
                        "/api/v1/hrd/set-detail",
                        state.company
                    );
                    toast.success("Сохранено!");
                    router.push({ name: "company" });
                } catch (error) {
                    if (error.response.data.errors) {
                        const errors = error.response.data.errors;
                        Object.entries(errors).map((obj) => {
                            const key = obj[0];
                            const value = obj[1];
                            value.map((error) => {
                                toast.error(error);
                            });
                        });
                    } else if (error.response) {
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
    },
    previewFiles({ commit }, event) {
        function getBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        }

        const file = event.target.files[0];
        getBase64(file).then((data) => commit("UPLOAD_LOGO", data));
    },
};

// mutations
const mutations = {
    GET_COMPANY_INFO(state, data) {
        state.company = data;
    },
    ADD_ADDRESS(state, item) {
        state.company.addresses.push(item);
    },
    ADD_CONTACT(state, item) {
        state.company.contacts.push(item);
    },
    REMOVE_CONTACT(state, contact_id) {
        state.company.contacts.splice(contact_id, 1);
    },
    REMOVE_ADDRESS(state, address_id) {
        state.company.addresses.splice(address_id, 1);
        console.log(state.company);
    },
    UPLOAD_LOGO(state, data) {
        state.detail.logo = data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
