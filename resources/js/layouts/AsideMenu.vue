<template>
    <aside :class="isCollapsed ? 'collapsed' : ''">
        <router-link :to="{ name: $store.state.auth.mainRoute }" class="logo">
            <div class="flex items-baseline">
                <img src="/images/Logo.svg" alt="" class="logo-img" />
                <img
                    src="/images/LogoType.svg"
                    alt=""
                    class="logo-type"
                    v-if="!isCollapsed"
                />
            </div>
            <img
                src="/images/icons/menu-burger.svg"
                alt=""
                @click="$store.commit('menu/toggleCollapsed')"
            />
        </router-link>
        <admin-menu v-if="$store.state.auth.role === 'Admin'" />
        <hrd-menu v-if="$store.state.auth.role === 'HRD'" />
        <manager-menu v-if="$store.state.auth.role === 'Manager'" />
    </aside>
</template>

<script>
import AdminMenu from "../components/AdminMenu.vue";
import HrdMenu from "../components/HrdMenu.vue";
import ManagerMenu from "../components/ManagerMenu.vue";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
    components: { AdminMenu, HrdMenu, ManagerMenu },
    name: "AsideMenu",
    setup() {
        const store = useStore();

        const isCollapsed = computed(() => store.state.menu.isCollapsed);

        return { isCollapsed };
    },
};
</script>

<style scoped lang="scss">
aside {
    width: 260px;
    min-width: 260px;
    padding: 14px 20px;
    background: #fafafa;
    min-height: 100vh;
    border-right: 1px solid #c4d1d9;
    overflow: hidden;
    transition: 0.3s ease;
    &.collapsed {
        width: 70px;
        min-width: 70px;
        transition: 0.3s ease;
        padding: 14px 10px;
    }
}
.logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-img {
        width: 21px;
        min-width: 21px;
    }
    &-type {
        padding-bottom: 2px;
        margin-left: 5px;
        width: 83px;
        min-width: 83px;
    }
}
.menu {
    margin-top: 35px;
}
</style>
