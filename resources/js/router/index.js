import { createRouter, createWebHistory } from "vue-router";

//hrd
const Test = () => import("../pages/Test");
const Company = () => import("../pages/Company");
const Main = () => import("../pages/Main");
const Landing = () => import("../layouts/Landing");
const Layout = () => import("../layouts/MainLayout");
const CompanyEdit = () => import("../pages/company/CompanyEdit");
const Employees = () => import("../pages/company/Employees");
const Stages = () => import("../pages/hrd/settings/Stages");
const CompanyStructure = () => import("../pages/hrd/settings/Structure");

//admin
const Admin = () => import("../pages/admin/Admin");
const AdminUsers = () => import("../pages/admin/Users");
const Orders = () => import("../pages/admin/Orders");
const Manual = () => import("../pages/admin/Manual");

//manager
const ManagerMain = () => import("../pages/manager/MainPage");
const ManagerEdit = () => import("../pages/manager/ProfileEdit");
const ManagerEmployees = () => import("../pages/manager/ManagerEmployees");
const ManageApplications = () => import("../pages/manager/Applications");
const ManageApplication = () => import("../pages/manager/Application");
const ManagerPositions = () => import("../pages/manager/Positions");
//store
import store from "../store";

//middleware
import guest from "./middleware/guest";
import auth from "./middleware/auth";
import isAdmin from "./middleware/isAdmin";
import isManager from "./middleware/isManager";
import isHrd from "./middleware/isHrd";
import middlewarePipeline from "./middlewarePipeline";
import CompanyPage from  "../pages/CompanyPage.vue"

const routes = [
    {
        path: "/",
        name: "landing",
        component: Landing,

        children: [
            {
                path: "",
                name: "main",
                component: Main,
            },
        ],
    },{
        path: "/company/:id",
        name: "company",
        component: CompanyPage,

    },

    {
        path: "/hrd",
        name: "hrd",
        component: Layout,
        meta: {
            title: "Главная",
            icon: "home",
            name: "Главная",
            middleware: [auth, isHrd],
        },
        children: [
            {
                path: "company",
                name: "company",
                component: Company,
                meta: {
                    title: "Компания",
                    icon: "building",
                    name: "Компания",
                    breadCrumbps: [
                        {
                            name: "Компания",
                            link: "company",
                            icon: "building",
                        },
                    ],
                },
            },
            {
                path: "company/edit",
                name: "company/edit",
                component: CompanyEdit,
                meta: {
                    title: "Компания",
                    icon: "building",
                    name: "Компания",
                    breadCrumbps: [
                        {
                            name: "Компания",
                            link: "company",
                            icon: "building",
                        },
                        {
                            name: "Редактирование",
                        },
                    ],
                },
            },
            {
                path: "employees",
                name: "employees",
                component: Employees,
                meta: {
                    title: "Сотрудники",
                    icon: "users-alt",
                    name: "Сотрудники",
                    breadCrumbps: [
                        {
                            name: "Сотрудники",
                            link: "employees",
                            icon: "users-alt",
                        },
                    ],
                },
            },
            {
                path: "setting/stages",
                name: "setting/stages",
                component: Stages,
                meta: {
                    title: "Этапы отбора",
                    icon: "setting",
                    name: "Этапы отбора",
                    breadCrumbps: [
                        {
                            name: "Этапы отбора",
                            link: "setting/stages",
                            icon: "setting",
                        },
                    ],
                },
            },
            {
                path: "setting/structure",
                name: "setting/structure",
                component: CompanyStructure,
                meta: {
                    title: "Структура компании",
                    icon: "setting",
                    name: "Структура компании",
                    breadCrumbps: [
                        {
                            name: "Структура компании",
                            link: "setting/structure",
                            icon: "setting",
                        },
                    ],
                },
            },
        ],
    },

    {
        path: "/admin",
        name: "admin",
        component: Layout,
        meta: {
            title: "Admin",
            icon: "users-alt",
            name: "Пользователи",
            middleware: [auth, isAdmin],
        },
        children: [
            {
                path: "users",
                name: "admin/users",
                component: AdminUsers,
                meta: {
                    title: "Пользователи",
                    icon: "users-alt",
                    name: "Пользователи",
                    breadCrumbps: [
                        {
                            name: "Пользователи",
                            link: "admin/users",
                            icon: "users-alt",
                        },
                    ],
                },
            },
            {
                path: "orders",
                name: "admin/orders",
                component: Orders,
                meta: {
                    title: "Заявки",
                    icon: "building",
                    name: "Заявки",
                    breadCrumbps: [
                        {
                            name: "Заявки",
                            link: "admin/orders",
                            icon: "building",
                        },
                    ],
                },
            },
            {
                path: "manual",
                name: "admin/manual",
                component: Manual,
                meta: {
                    title: "Справочник",
                    icon: "book-alt",
                    name: "Справочник",
                    breadCrumbps: [
                        {
                            name: "Справочник",
                            link: "admin/manual",
                            icon: "book-alt",
                        },
                    ],
                },
            },
        ],
    },
    {
        path: "/manager",
        name: "manager/main",
        component: Layout,
        meta: {
            middleware: [auth, isManager],
        },
        children: [
            {
                path: "",
                name: "manager",
                component: ManagerMain,
                meta: {
                    title: "Главная",
                    icon: "home",
                    name: "Главная",
                    breadCrumbps: [
                        {
                            name: "Главная",
                            link: "manager",
                            icon: "home",
                        },
                    ],
                },
            },
            {
                path: "edit",
                name: "manager/edit",
                component: ManagerEdit,
                meta: {
                    title: "Главная",
                    icon: "home",
                    name: "Главная",
                    breadCrumbps: [
                        {
                            name: "Главная",
                            link: "manager",
                            icon: "home",
                        },
                    ],
                },
            },
            {
                path: "employees",
                name: "m/employees",
                component: ManagerEmployees,
                meta: {
                    title: "Сотрудники",
                    icon: "users-alt",
                    name: "Сотрудники",
                    breadCrumbps: [
                        {
                            name: "Сотрудники",
                            link: "m/employees",
                            icon: "users-alt",
                        },
                    ],
                },
            },
            {
                path: "applications",
                name: "m/applications",
                component: ManageApplications,
                meta: {
                    title: "Заявки",
                    icon: "users-alt",
                    name: "Заявки",
                    breadCrumbps: [
                        {
                            name: "Заявки",
                            link: "m/employees",
                            icon: "users-alt",
                        },
                    ],
                },
            },
            {
                path: "applications/:id",
                name: "m/application",
                component: ManageApplication,
                meta: {
                    title: "Заявки",
                    icon: "users-alt",
                    name: "Заявки",
                    breadCrumbps: [
                        {
                            name: "Заявки",
                            link: "m/employees",
                            icon: "users-alt",
                        },
                    ],
                },
            },
            {
                path: "positions",
                name: "m/positions",
                component: ManagerPositions,
                meta: {
                    title: "Заявки",
                    icon: "users-alt",
                    name: "Заявки",
                    breadCrumbps: [
                        {
                            name: "Заявки",
                            link: "m/positions",
                            icon: "users-alt",
                        },
                    ],
                },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    if (!to.meta.middleware) {
        return next();
    }
    const middleware = to.meta.middleware;
    const context = {
        to,
        from,
        next,
        store,
    };
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1),
    });
});
// router.beforeEach((to, from, next) => {
//     document.title = `${to.meta.title} - ${process.env.APP_NAME}`;
//     // if (to.meta.role === "Admin" && store.state.auth.role === "Admin") {
//     //     next();
//     // } else {
//     //     next({ name: "main" });
//     // }
//     // if (to.meta.middleware == "guest") {
//     //     if (store.state.auth.authenticated) {
//     //         next({ name: "hrd" });
//     //     }
//     //     next();
//     // } else {
//     //     if (store.state.auth.authenticated) {
//     //         next();
//     //     } else {
//     //         next({ name: "main" });
//     //     }
//     // }
// });

export default router;
