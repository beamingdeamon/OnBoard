// initial state
const state = {
    all: [],
    list: [],
};

// getters
const getters = {};

// actions
const actions = {
    async getAllManuals({ commit }) {
        const res = await axios.get("/api/v1/admin/directories/list");
        commit("setManuals", res.data);
    },
    async getList({ commit }, link) {
        commit("clear");
        await axios.get(`/api/v1/admin/directories/${link}`).then((res) => {
            commit("setList", res);
        });
    },
    async addNewItem({ dispatch }, { link, name }) {
        await axios
            .post(`/api/v1/admin/directories/${link}`, { name })
            .then(async () => {
                await dispatch("getList", link);
            });
    },
    async deleteItem({ dispatch }, { link, id }) {
        await axios
            .delete(`/api/v1/admin/directories/${link}/${id}`)
            .then(async () => {
                await dispatch("getList", link);
            });
    },
    async renameItem({ dispatch }, { link, id, name }) {
        await axios
            .put(`/api/v1/admin/directories/${link}/${id}`, { name })
            .then(async () => {
                await dispatch("getList", link);
            });
    },
};

// mutations
const mutations = {
    setManuals(state, data) {
        state.all = data;
    },
    setList(state, list) {
        state.list = list.data;
    },
    clear(state) {
        state.list = [];
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
