import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";

import users from "./modules/users";
import orders from "./modules/orders";
import manuals from "./modules/manuals";
import menu from "./modules/menu";
import company from "./modules/company";
import employees from "./modules/employees";
import stages from "./modules/hrd/stages";
import manager from "./modules/manager/index";

export default createStore({
    modules: {
        auth,
        users,
        orders,
        manuals,
        menu,
        company,
        employees,
        stages,
        manager,
    },
    plugins: [createPersistedState()],
});
// export default new Vuex.Store({
//     plugins: [createPersistedState()],
//     modules: {
//         auth,
//     },
// });
