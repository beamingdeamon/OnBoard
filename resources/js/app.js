require("./bootstrap");
import { createApp } from "vue";
import router from "./router";
import App from "./layouts/Landing.vue";
import "../css/index.css";
import store from "./store";
import Unicon from "vue-unicons";
import Toast from "vue-toastification";
import axios from "axios";
import ElementPlus from "element-plus";

import "element-plus/dist/index.css";
import "v-calendar/dist/style.css";
import "vue-universal-modal/dist/index.css";

import VueUniversalModal from "vue-universal-modal";
import "vue-good-table-next/dist/vue-good-table-next.css";
import VueGoodTablePlugin from "vue-good-table-next";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import "../../resources/css/index.scss";
import {
    uniUsersAlt,
    uniBuilding,
    uniUserSquare,
    uniChart,
    uniSetting,
    uniBrowser,
    uniHome,
    uniPen,
    uniTrashAlt,
    uniEllipsisH,
    uniBookAlt,
    uniArrowRight,
    uniPlusCircle,
    uniTimes,
    uniQuestionCircle,
    uniAngleLeftB,
    uniImagePlus,
    uniTimesCircle,
    uniUserPlus,
    uniCloudUpload,
    uniComment,
    uniWindow,
    uniCopy,
    uniInstagram,
    uniLinkedin,
    uniTelegram,
    uniWhatsapp,
    uniFacebook,
    uniVk,
    uniTwitter,
    uniFileBookmarkAlt,
    uniFileCheckAlt,
    uniHistory,
    uniFileSearchAlt,
    uniFilePlusAlt,
    uniEye,
    uniGameStructure,
} from "vue-unicons/dist/icons";
Unicon.add([
    uniUsersAlt,
    uniBuilding,
    uniUserSquare,
    uniChart,
    uniSetting,
    uniBrowser,
    uniHome,
    uniPen,
    uniTrashAlt,
    uniEllipsisH,
    uniBookAlt,
    uniArrowRight,
    uniPlusCircle,
    uniTimes,
    uniQuestionCircle,
    uniAngleLeftB,
    uniImagePlus,
    uniTimesCircle,
    uniUserPlus,
    uniCloudUpload,
    uniComment,
    uniWindow,
    uniCopy,
    uniInstagram,
    uniLinkedin,
    uniTelegram,
    uniWhatsapp,
    uniFacebook,
    uniVk,
    uniTwitter,
    uniFileBookmarkAlt,
    uniFileCheckAlt,
    uniFileSearchAlt,
    uniFilePlusAlt,
    uniHistory,
    uniEye,
    uniGameStructure,
]);
const options = {
    timeout: 3000,
};
// const token = localStorage.getItem("access_token");
// if (token) {
//     axios.defaults.headers.common["Authorization"] = "Bearer " + token;
// }
/ * Запрос на перехват * /;
axios.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("token") != null) {
            config.headers["token"] = localStorage.getItem("token");
        }

        return config;
    },
    (err) => Promise.reject(err)
);

createApp(App)
    .use(router)
    .use(Unicon, {
        fill: "#6D767E",
        height: 20,
        width: 20,
    })
    .use(VueUniversalModal, {
        teleportTarget: "#modals",
    })
    .use(store)
    .use(Toast, options)
    .use(ElementPlus)
    .use(VueGoodTablePlugin)
    .mount("#app");
