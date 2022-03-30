// initial state
const state = {
    all: [],
};

// getters
const getters = {};

// actions
const actions = {
    async getAllUsers({ commit }) {
        const res = await axios.get("/api/v1/admin/users");
        commit("setUsers", res.data.data);
    },
};

// mutations
const mutations = {
    setUsers(state, users) {
        state.all = users;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
