// initial state
const state = {
    profile: [],
    all: [],
    id: null,
};

// getters
const getters = {};

// actions
const actions = {
    async getProfile({ commit }) {
        const res = await axios.get("/api/v1/manager");
        commit("setProfile", res.data);
    },
    async updateProfile({ commit }, data) {
        commit("updateProfile", data);
    },
    async getAllEmployees({ commit }) {
        console.log("start");
        const res = await axios.get("/api/v1/manager/users").then((res) => {
            commit("setEmployees", res.data);
        });
    },
};

// mutations
const mutations = {
    setProfile(state, data) {
        state.profile = data;
    },
    updateProfile(state, data) {
        state.profile.user = data;
    },
    setEmployees(state, employees) {
        state.all = employees;
    },
    setId(state, id) {
        state.id = id;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
