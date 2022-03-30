// initial state
const state = {
    all: [],
};

// getters
const getters = {};

// actions
const actions = {
    async getAllOrders({ commit }) {
        const res = await axios.get("/api/v1/admin/companies");
        commit("setOrders", res.data.data);
    },
};

// mutations
const mutations = {
    setOrders(state, data) {
        state.all = data;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
