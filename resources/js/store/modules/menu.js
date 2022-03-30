// initial state
const state = {
    isCollapsed: false,
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
    toggleCollapsed(state) {
        state.isCollapsed = !state.isCollapsed;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
