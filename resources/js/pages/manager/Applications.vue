<template>
    <div class="page-content">
        <!-- <input type="text" v-model="searchTerm" /> -->
        <div class="flex gap-2.5 mb-5">
            <el-input
                v-model="searchTerm"
                class="!w-[260px]"
                placeholder="Поиск по таблице"
            >
                <template #prefix>
                    <el-icon class="el-input__icon"><search /></el-icon>
                </template>
            </el-input>
            <el-button
                type="primary"
                color="#FF6854"
                style="color: white"
                :icon="CirclePlus"
                @click="centerDialogVisible = true"
                >Создать заявку</el-button
            >
        </div>

        <vue-good-table
            :columns="columns"
            :rows="data"
            :line-numbers="true"
            :search-options="{
                enabled: true,
                externalQuery: searchTerm,
            }"
            :pagination-options="{
                enabled: true,
                mode: 'pages',
                rowsPerPageLabel: 'Записей на странице',
                perPageDropdown: [20, 40, 50],
                nextLabel: '',
                prevLabel: '',
                pageLabel: '',
                ofLabel: 'из',
            }"
            styleClass="vgt-table bordered lll"
        >
            <template v-slot:emptystate>Пусто</template>
            <template v-slot:table-row="props">
                <div v-if="props.column.field == 'fullname'">
                    <div
                        @click="centerDialogVisible2 = true"
                        class="cursor-pointer hover:text-purple-secondary"
                    >
                        {{ props.row.name }}
                    </div>
                </div>
                <div v-if="props.column.field == 'create'">
                    {{ moment(props.row.created_at).locale("ru").format("ll") }}
                </div>
                <div v-if="props.column.field == 'update'">
                    {{ moment(props.row.updated_at).locale("ru").format("ll") }}
                </div>
                <div v-if="props.column.field == 'reply'">
                    {{ props.row.replies.length }}
                </div>
                <div v-if="props.column.field == 'status'">
                    {{ props.row.vacancy_status.name }}
                </div>
                <div v-if="props.column.field == 'edit'" class="edit-buttons">
                    <el-dropdown trigger="click">
                        <unicon class="row-edit" name="ellipsis-h"></unicon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>
                                    <router-link
                                        :to="{
                                            name: 'm/application',
                                            params: { id: props.row.id },
                                        }"
                                        class="flex items-center rounded-b-[6px]"
                                    >
                                        <unicon
                                            name="window"
                                            class="mr-2"
                                            fill="#191B1D"
                                        ></unicon
                                        ><span>Подробнее</span>
                                    </router-link>
                                </el-dropdown-item>
                                <el-dropdown-item
                                    @click="centerDialogVisible = true"
                                >
                                    <div
                                        class="flex items-center rounded-b-[6px]"
                                    >
                                        <unicon
                                            name="pen"
                                            class="mr-2"
                                            fill="#191B1D"
                                        ></unicon
                                        ><span>Редактировать</span>
                                    </div>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <div
                                        class="flex items-center rounded-b-[6px]"
                                    >
                                        <unicon
                                            name="copy"
                                            class="mr-2"
                                            fill="#191B1D"
                                        ></unicon
                                        ><span>Дублировать</span>
                                    </div>
                                </el-dropdown-item>
                                <el-dropdown-item>
                                    <div
                                        class="flex items-center rounded-b-[6px]"
                                    >
                                        <unicon
                                            name="trash-alt"
                                            class="mr-2"
                                            fill=" #FF2727"
                                        ></unicon
                                        ><span>Удалить</span>
                                    </div></el-dropdown-item
                                >
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
                <div v-else>
                    {{ props.formattedRow[props.column.field] }}
                </div>
            </template>
        </vue-good-table>
    </div>

    <el-drawer
        v-model="centerDialogVisible"
        v-if="centerDialogVisible"
        size="50%"
    >
        <template #title>
            <div class="flex gap-1 items-center text-main-black">
                <unicon name="file-plus-alt" fill="#FF6854" />
                <span> Новая заявка</span>
            </div>
        </template>
        <div>
            <application-form
                @updateAppliction="updateAppliction"
            ></application-form>
        </div>
    </el-drawer>
    <el-drawer
        v-model="centerDialogVisible2"
        v-if="centerDialogVisible2"
        size="50%"
    >
        <template #title>
            <div class="flex gap-1 items-center text-main-black">
                <unicon name="file-search-alt" fill="#FF6854" />
                <span> Вакансия</span>
            </div>
        </template>
        <div>
            <vacancy-info />
        </div>
    </el-drawer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import ApplicationForm from "../../components/manager/ApplicationForm.vue";
import VacancyInfo from "../../components/manager/VacancyInfo.vue";
import { useStore } from "vuex";
import moment from "moment";
import "moment/locale/ru";

import {
    Search,
    Edit,
    Message,
    ArrowDown,
    CirclePlus,
} from "@element-plus/icons-vue";
const store = useStore();
const searchTerm = ref("");
const centerDialogVisible = ref(false);
const centerDialogVisible2 = ref(false);
const updateAppliction = () => {
    getApplications();
    centerDialogVisible.value = false;
};
const columns = ref([
    {
        label: "Название",
        field: "fullname",
    },
    {
        label: "Ответственный рекрутер",
        field: "user",
    },
    {
        label: "Дата создание",
        field: "create",
    },
    {
        label: "Дата изменение",
        field: "update",
    },
    {
        label: "Отлики",
        field: "reply",
    },
    {
        label: "Статус",
        field: "status",
    },
    {
        label: "Действие",
        field: "edit",
        width: "150px",
    },
]);

const data = ref([]);

const getApplications = async () => {
    await axios.get("/api/v1/manager/vacancies").then((res) => {
        data.value = res.data;
    });
};
onMounted(getApplications);
// const data = computed(() => store.state.employees.all);
// onMounted(store.dispatch("employees/getAllEmployees"));
</script>

<style lang="scss"></style>
