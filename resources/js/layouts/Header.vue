<template>
    <header class="header">
        <Breadcrumbs />
        <div>
            <el-dropdown>
                <el-avatar> user </el-avatar>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="logOut"
                            >Logout</el-dropdown-item
                        >
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

            <!-- <div @click="logOut" v-if="$store.state.auth.authenticated">
                Logout
            </div> -->
        </div>
    </header>
</template>

<script>
import { UserFilled } from "@element-plus/icons-vue";
import Breadcrumbs from "../components/Breadcrumbs";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
    name: "Header",
    components: {
        Breadcrumbs,
        UserFilled,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const logOut = () => {
            store.dispatch("auth/logout");
            router.push("/");
        };
        return {
            logOut,
        };
    },
};
</script>

<style lang="scss" scoped>
.header {
    height: 50px;
    border-bottom: 1px solid #dbe4eb;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 10px;
}
</style>
