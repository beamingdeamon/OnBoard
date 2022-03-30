<template>
    <div class="page-content">
        <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane label="User" name="setting/stages"
                >Этапы отбора</el-tab-pane
            >
            <el-tab-pane label="Config" name="company">Config</el-tab-pane>
            <el-tab-pane label="Role" name="setting/structure"
                >Role</el-tab-pane
            >
        </el-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const activeName = ref("setting/structure");
const router = useRouter();
const handleClick = (tab, event) => {
    console.log(tab.props.name);
    router.push({ name: tab.props.name });
};
</script>

<style></style>
