<template>
    <div class="manager">
        <div class="manager-main">
            <div class="h-[50px] bg-gray-200"></div>
            <div class="px-5 flex justify-between items-center -mt-5">
                <div class="flex items-center">
                    <el-avatar
                        :size="100"
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
                <router-link :to="{ name: 'manager/edit' }">
                    <el-button :icon="Edit" color="#7734FC" style="color: #fff"
                        >Редактировать профиль</el-button
                    ></router-link
                >
            </div>
            <el-divider />
            <div class="px-5 flex flex-wrap gap-5">
                <statistic-card
                    title="Актуальные заявки"
                    icon="home"
                    :number="profile.accepted_employers"
                />
                <statistic-card
                    title="Количество откликов"
                    icon="users-alt"
                    :number="profile.vacancies"
                />
                <statistic-card
                    title="Принято сотрудников"
                    icon="users-alt"
                    :number="profile.employers"
                />
            </div>
            <div></div>
        </div>
        <div class="manager-calendar">
            <DatePicker
                :theme="themeStyles"
                v-model="date"
                color="purple"
                @dayclick="asd"
                @update:to-page="asd"
                is-expanded
                :attributes="attributes"
            />
            <el-divider class="px-5" />
            <div class="px-5">
                <p class="font-bold">
                    {{ moment(date).locale("ru").format("ll") }}
                </p>

                <div class="flex flex-col gap-3 pt-3">
                    <calendar-events />
                    <calendar-events />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import moment from "moment";
import "moment/locale/ru";

import { Calendar, DatePicker } from "v-calendar";
import { Edit } from "@element-plus/icons-vue";
import StatisticCard from "../../components/manager/StatisticCard.vue";
import CalendarEvents from "../../components/manager/CalendarEvents.vue";
const attributes = ref([
    {
        dot: "red",
        dates: ["2022-03-19T01:42:21.586Z"],
    },
]);
const themeStyles = {
    wrapper: {
        backgroundColor: "#fafafa",
        border: "1px solid red",
    },
};
const date = ref(new Date());
const asd = (val) => {
    console.log(val);
};

const store = useStore();
const profile = computed(() => store.state.manager.profile);
onMounted(store.dispatch("manager/getProfile"));
</script>

<style lang="scss">
.vc-container.vc-is-expanded {
    border: none;
}
.manager {
    display: flex;
    min-height: calc(100vh - 50px);
    &-main {
        width: 80%;
        border-right: 1px solid #dbe4eb;
    }
    &-calendar {
        width: 20%;
        min-width: 360px;
        padding: 15px 0;
    }
}
.el-avatar {
    background: #ff6854;
}
</style>
