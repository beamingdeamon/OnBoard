<template>
    <div class="px-5 pt-4">
        <div class="flex">
            <router-link
                :to="{ name: 'm/applications' }"
                class="rounded-full w-8 h-8 flex items-center justify-center place-content-center bg-gray-300 p-2"
            >
                <unicon name="angle-left-b" />
            </router-link>
            <div class="pl-3.5">
                <div class="flex items-center mb-3">
                    <h3 class="font-bold text-2xl mr-3.5">Старший аналитик</h3>
                    <span
                        class="py-0.5 px-2 rounded bg-purple-secondary/20 text-xs"
                        >Аналитика</span
                    >
                </div>
                <p>Полная занятость</p>
            </div>
        </div>
    </div>
    <el-tabs v-model="activeName" class="demo-tabs px-5 pt-5">
        <el-tab-pane lazy label="О вакансии" name="about">
            <about-vacancy />
        </el-tab-pane>
        <el-tab-pane lazy label="Кандидаты" name="candidates">
            <application-users />
        </el-tab-pane>
        <el-tab-pane disabled lazy label="Настройки" name="settings"
            >Настройки</el-tab-pane
        >
    </el-tabs>
</template>

<script setup>
import { ref } from "vue";
import ApplicationUsers from "../../components/manager/ApplicationUsers.vue";
import AboutVacancy from "../../components/manager/AboutVacancy.vue";
const activeName = ref("about");
</script>

<style></style>
