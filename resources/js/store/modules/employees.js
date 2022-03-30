// initial state
const state = {
    all: [],
};

// getters
const getters = {};

// actions
const actions = {
    async getAllEmployees({ commit }) {
        const res = await axios.get("/api/v1/hrd/users").then((res) => {
            commit("setEmployees", res.data);
        });
    },
};

// mutations
const mutations = {
    setEmployees(state, employees) {
        state.all = employees;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
