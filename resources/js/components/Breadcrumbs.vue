<template>
    <div class="pl-2">
        <el-breadcrumb :separator-icon="ArrowRight">
            <el-breadcrumb-item
                v-for="item in $route.meta.breadCrumbps"
                :key="item.name"
                ><router-link v-if="item.link" :to="{ name: item.link }">
                    <unicon :name="item.icon" fill="#FF6854"></unicon>
                    {{ item.name }}
                </router-link>
                <div v-else>
                    {{ item.name }}
                </div></el-breadcrumb-item
            >
        </el-breadcrumb>
    </div>
</template>

<script>
import { ArrowRight } from "@element-plus/icons-vue";
export default {
    name: "breadcrumbs",
    components: {
        ArrowRight,
    },
    setup() {
        return { ArrowRight };
    },
};
</script>

<style scoped lang="scss">
a {
    display: flex;
    align-items: center;
}
.unicon {
    margin-right: 10px;
}
.el-breadcrumb {
    display: flex;
}
.el-breadcrumb__inner a,
.el-breadcrumb__inner.is-link {
    color: #191b1d;
    font-weight: 500;
}
</style>
