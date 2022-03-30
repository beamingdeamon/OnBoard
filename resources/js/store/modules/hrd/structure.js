// initial state
const state = {
    dataSource: [
        {
            id: 1,
            label: "Level one 1",
            root: true,
            children: [
                {
                    id: 4,
                    label: "Level two 1-1",
                },
                {
                    id: 9,
                    label: "Level three 1-1-1",
                },
                {
                    id: 10,
                    label: "Level three 1-1-2",
                },
            ],
        },
        {
            id: 2,
            label: "Level one 2",
            root: false,
            children: [],
        },
        {
            id: 3,
            label: "Level one 3",
            root: true,
            children: [
                {
                    id: 7,
                    label: "Level two 3-1",
                },
                {
                    id: 8,
                    label: "Level two 3-2",
                },
            ],
        },
    ],
};

// getters
const getters = {};

// actions
const actions = {};

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
