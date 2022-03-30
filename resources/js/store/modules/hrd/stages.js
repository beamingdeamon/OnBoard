// initial state
import { computed, onMounted, ref, defineProps } from "vue";
import { useToast } from "vue-toastification";
const toast = useToast();
const state = {
    ruleFormRef: null,
    ruleFormRef2: null,
    myTable: null,
    edit: false,
    addStageModal: false,
    currentStage: null,
    stages: {
        title: "",
        subtitle: "",
        color: "#DBE4EB",
    },
    stagesList: [],
    activeName: "setting/stages",
    columns2: [
        {
            label: "ФИО",
            field: "surname",
        },
    ],
    users: [],
    addUserToStageModal: false,
    searchTerm: ref(""),
    columns: [
        {
            label: "ФИО",
            field: "surname",
        },
        {
            label: "Email",
            field: "user.email",
        },

        {
            label: "Структура",
            field: "user.phone",
        },

        {
            label: "Действие",
            field: "edit",
            width: "150px",
        },
    ],

    rows: [],
};

// getters
const getters = {};

// actions
const actions = {
    async getStagesList({ dispatch, commit, state }) {
        await axios.get("/api/v1/hrd/stages").then(async (res) => {
            // stagesList.value = res.data;
            commit("SET_STAGES_LIST", res.data);

            if (state.stagesList !== null && !state.currentStage) {
                const id = [...res.data][0].id;
                console.log(id);
                await dispatch("getStageInfo", id);
                // commit("SET_CURRENT_STAGE", id);
            }
        });
    },
    async getStageInfo({ commit }, id) {
        await axios.get("/api/v1/hrd/stages/" + id).then((res) => {
            commit("SET_CURRENT_STAGE", res.data);
            commit("SET_EDIT", false);
        });
    },
    async addStage({ dispatch, commit, state }, formEl) {
        if (!formEl) return;
        await formEl.validate(async (valid, fields) => {
            if (valid) {
                try {
                    await axios
                        .post("/api/v1/hrd/stages", state.stages)
                        .then(async () => {
                            await dispatch("getStagesList");
                            // addStageModal.value = false;
                            commit("SET_ADD_STAGE_MODAL", false);
                            toast.success("Успешно создано!");
                            // edit.value = false;
                            commit("SET_EDIT", false);
                        });
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
    async updateStage({ commit, state }, formEl) {
        if (!formEl) return;
        await formEl.validate(async (valid, fields) => {
            if (valid) {
                try {
                    await axios
                        .put(
                            `/api/v1/hrd/stages/${state.currentStage.id}`,
                            state.currentStage
                        )
                        .then(async () => {
                            await dispatch("getStagesList");
                            // edit.value = false;
                            commit("SET_EDIT", false);
                        });
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
    async cancelUpdate({ dispatch, commit, state }) {
        // commit("SET_STAGE_INFO", state.currentStage.id);
        await dispatch("getStageInfo", state.currentStage.id);
        commit("SET_EDIT", false);
    },
    async deleteStage({ dispatch, commit }, id) {
        await axios.delete("/api/v1/hrd/stages/" + id).then(async () => {
            // currentStage.value = null;
            commit("SET_CURRENT_STAGE", null);
            await dispatch("getStagesList");

            commit("SET_EDIT", false);
        });
    },
    async addUserToStage({ commit, state }) {
        state.myTable.selectedRows.map((item) => {
            // users.value.push(item.id);
            commit("SET_SELECTED_USERS", item.id);
        });
        const data = { stage_id: state.currentStage.id, ids: state.users };
        await axios.post("/api/v1/hrd/stages/setUsers", data).then(async () => {
            // getStageInfo(currentStage.value.id);

            await dispatch("getStageInfo", state.currentStage.id);
            // addUserToStageModal.value = false;
            commit("SET_ADD_USER_TO_STAGE_MODAL", false);
        });
    },
    async deleteUserFromStage({ commit }, id) {
        await axios.post("/api/v1/hrd/stages/deleteUser/" + id).then(() => {
            console.log("success");
        });
    },
};

// mutations
const mutations = {
    SET_CURRENT_STAGE(state, payload) {
        state.currentStage = payload;
    },
    SET_STAGES_LIST(state, payload) {
        state.stagesList = payload;
    },
    SET_STAGE_INFO(state, payload) {},
    SET_EDIT(state, payload) {
        state.edit = payload;
    },
    SET_ADD_STAGE_MODAL(state, payload) {
        state.addStageModal = payload;
    },
    SET_SELECTED_USERS(state, payload) {
        state.users.push(payload);
    },
    SET_ADD_USER_TO_STAGE_MODAL(state, payload) {
        state.addUserToStageModal = payload;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
