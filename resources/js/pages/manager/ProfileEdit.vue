<template>
    <div>
        <div class="page-header bg-gray-200 py-3.5 px-5">
            <div class="flex items-center gap-3">
                <router-link :to="{ name: 'manager' }" class="flex items-center"
                    ><unicon name="angle-left-b"
                /></router-link>
                <p class="font-bold text-small px-6">Редактировать профиль</p>
            </div>
        </div>

        <div class="px-5 flex justify-between items-center pt-3.5">
            <div class="flex items-center">
                <el-avatar
                    :size="69"
                    color="red"
                    style="font-size: 24px; font-weight: bold"
                    >{{ profile.user.surname.charAt(0) }}</el-avatar
                >
                <div class="ml-3.5">
                    <h2 class="font-bold text-lg">
                        {{ profile.user.surname }} {{ profile.user.name }}
                        {{ profile.user.middlename }}
                    </h2>
                    <p class="text-sm text-gray-500">
                        Руководитель в
                        {{ profile.company.company_name }}
                    </p>
                </div>
            </div>
        </div>
        <el-tabs v-model="activeName" class="demo-tabs p-5">
            <el-tab-pane lazy label="Личные данные" name="about">
                <profile-form></profile-form>
            </el-tab-pane>
            <el-tab-pane lazy label="Уведомления" name="notifications">
            </el-tab-pane>
            <el-tab-pane lazy label="Изменить пароль" name="password"
                >Настройки</el-tab-pane
            >
        </el-tabs>
    </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProfileForm from "../../components/manager/ProfileForm.vue";
const activeName = ref("about");
const store = useStore();
const profile = computed(() => store.state.manager.profile);
onMounted(store.dispatch("manager/getProfile"));
</script>
<style></style>
