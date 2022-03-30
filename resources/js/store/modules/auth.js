const state = {
    authenticated: false,
    role: "",
    mainRoute: "",
    user: {},
};
const getters = {
    authenticated: (state) => state.authenticated,
    user: (state) => {
        return state.user;
    },
    role: (state) => state.role,
};
const mutations = {
    SET_AUTHENTICATED(state, value) {
        state.authenticated = value;
    },
    SET_USER(state, value) {
        state.user = value;
    },
    SET_ROLE(state, value) {
        state.role = value;
    },
    SET_ROUTE(state, route) {
        state.mainRoute = route;
    },
};
const actions = {
    login({ commit }, data) {
        commit("SET_USER", data);
        commit("SET_AUTHENTICATED", true);
        commit("SET_ROLE", data.roles[0].title);
        switch (data.roles[0].title) {
            case "Admin":
                commit("SET_ROUTE", "admin/users");
                break;
            case "HRD":
                commit("SET_ROUTE", "company");
                break;
            case "Manager":
                commit("SET_ROUTE", "manager");
                break;
            default:
                commit("SET_ROUTE", "main");
                break;
        }
    },
    logout({ commit }) {
        commit("SET_USER", {});
        commit("SET_AUTHENTICATED", false);
        commit("SET_ROLE", "");
        commit("SET_ROUTE", "");
        localStorage.removeItem("token");
    },
};
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
