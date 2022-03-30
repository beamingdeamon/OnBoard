<template>
    <div class="main-wrap">
        <Aside-menu />
        <main>
            <Header />
            <div class="content">
                <router-view></router-view>
            </div>
            <!-- <div class="content">
                <slot />
            </div> -->
        </main>
    </div>
</template>

<script>
import AsideMenu from "../layouts/AsideMenu.vue";
import Header from "../layouts/Header.vue";

export default {
    components: { AsideMenu, Header },
    name: "MainLayout",
    setup() {},
};
</script>

<style lang="scss">
.main-wrap {
    display: flex;
}
main {
    width: 100%;
}
</style>
