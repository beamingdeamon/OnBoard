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
            <add-employee />
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
                    <p
                        @click="userInfo = true"
                        class="cursor-pointer hover:text-purple-secondary"
                    >
                        {{ props.row.surname }} {{ props.row.name }}
                    </p>
                </div>
                <div v-if="props.column.field == 'department'">
                    {{
                        props.row.detail ? props.row.detail.structure.name : ""
                    }}
                </div>
                <div v-if="props.column.field == 'position'">
                    {{ props.row.detail ? props.row.detail.position : "" }}
                </div>
                <div v-if="props.column.field == 'edit'" class="edit-buttons">
                    <el-dropdown trigger="click">
                        <unicon class="row-edit" name="ellipsis-h"></unicon>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item
                                    @click="editEmployee(props.row)"
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
    <el-dialog
        v-model="editEmployeeModal"
        custom-class="dialog-left"
        width="max-content"
    >
        <template #title>
            <span class="el-dialog__title">Редактировать сотрудника</span>
        </template>
        <el-form
            ref="ruleFormRef"
            :model="form"
            label-position="top"
            size="large"
        >
            <div class="flex items-end gap-6">
                <el-form-item
                    prop="name"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Имя"
                    class="w-[260px]"
                >
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item
                    prop="surname"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Фамилия"
                    class="w-[260px]"
                >
                    <el-input v-model="form.surname"></el-input>
                </el-form-item>
            </div>
            <div class="flex items-end gap-6">
                <el-form-item
                    prop="email"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Email"
                    class="w-[260px]"
                >
                    <el-input v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item
                    prop="phone"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Телефон"
                    class="w-[260px]"
                >
                    <el-input v-model="form.phone"></el-input>
                </el-form-item>
            </div>
            <div class="flex items-end gap-6">
                <el-form-item
                    label="Структура"
                    class="w-[260px]"
                    prop="structure_id"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'change',
                    }"
                >
                    <el-select
                        v-model="form.structure_id"
                        placeholder="Структура"
                        class="w-[260px]"
                    >
                        <el-option label="ыффыв" value="1"></el-option>
                        <el-option label="фывфыв" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item
                    prop="position"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Должность"
                    class="w-[260px]"
                >
                    <el-input v-model="form.position"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="saveEdit(form.id)"
                    >Сохранить</el-button
                >
            </span>
        </template>
    </el-dialog>
    <el-drawer
        v-model="userInfo"
        :withHeader="false"
        custom-class="user-info relative"
        size="50%"
    >
        <div class="user-info__header">
            <el-tabs v-model="activeName" class="user-tabs">
                <el-tab-pane lazy label="Резюме" name="user">
                    <template #label>
                        <span class="custom-tabs-label flex items-center">
                            <unicon name="file-bookmark-alt" />Резюме
                        </span>
                    </template>
                    <user-info />
                </el-tab-pane>
                <el-tab-pane lazy name="responses">
                    <template #label>
                        <span class="custom-tabs-label flex items-center">
                            <unicon name="file-check-alt" />Отклик
                        </span>
                    </template>
                </el-tab-pane>
                <el-tab-pane disabled lazy name="history">
                    <template #label>
                        <span class="custom-tabs-label flex items-center">
                            <unicon name="history" />История откликов
                        </span>
                    </template>
                </el-tab-pane>
                <el-tab-pane disabled lazy label="Комментарии" name="comments">
                    <template #label>
                        <span class="custom-tabs-label flex items-center">
                            <unicon name="comment" />Комментарии
                        </span>
                    </template>
                </el-tab-pane>
            </el-tabs>
            <div class="absolute top-2.5 right-2.5 cursor-pointer">
                <unicon
                    name="times"
                    hover-fill="#191B1D"
                    @click="userInfo = false"
                />
            </div>
        </div>
    </el-drawer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import {
    Search,
    Edit,
    Message,
    ArrowDown,
    CirclePlus,
} from "@element-plus/icons-vue";
import AddEmployee from "../../components/company/AddEmployee.vue";
import UserInfo from "../../components/manager/UserInfo.vue";

const store = useStore();
const searchTerm = ref("");
const selected = ref("");
const userInfo = ref(false);
const activeName = ref("user");
const options = ref([
    { name: "All", value: "" },
    { name: "Yernar", value: "asd@asd.asd" },
]);
const columns = ref([
    {
        label: "ФИО",
        field: "fullname",
    },
    {
        label: "Email",
        field: "email",
        filterOptions: {
            styleClass: "class1", // class to be added to the parent th element
            enabled: true, // enable filter for this column
            placeholder: "All",
            filterValue: "", // placeholder for filter input
            // initial populated value for this filter
            filterDropdownItems: [], // dropdown (with selected values) instead of text input
            // filterFn: columnFilterFn, //custom filter function that
            trigger: "enter", //only trigger on enter not on keyup
        },
    },
    {
        label: "Телефон",
        field: "phone",
    },
    {
        label: "Структура",
        field: "department",
    },
    {
        label: "Должность",
        field: "position",
    },
    {
        label: "Действие",
        field: "edit",
        width: "150px",
    },
]);

const changeFilter = (newFilter, field) => {
    let found = columns.value.find((c) => {
        return c.field == field;
    });

    if (found) {
        console.log(found);
        if (found.hasOwnProperty("filterOptions")) {
            if (found.filterOptions.hasOwnProperty("filterValue")) {
                console.log("1", found.filterOptions.filterValue);
                console.log("2", newFilter);
                found.filterOptions.filterValue = newFilter;
            } else {
                alert(`Column '${field}' does not have filterValue property!`);
            }
        } else {
            alert(`Column '${field}' does not have filtering configured!`);
        }
    } else {
        alert(`Field '${field}' does not exist!`);
    }
};

const data = computed(() => store.state.employees.all);
onMounted(store.dispatch("employees/getAllEmployees"));

//Edit
const editEmployee = (user) => {
    console.log(user);
    form.value.id = user.id;
    form.value.name = user.name;
    form.value.surname = user.surname;
    form.value.email = user.email;
    form.value.phone = user.phone;
    if (user.detail !== null) {
        form.value.structure_id = user.detail.structure_id;
        form.value.position = user.detail.position;
    } else {
        form.value.structure_id = "";
        form.value.position = "";
    }
    editEmployeeModal.value = true;
};
const editEmployeeModal = ref(false);
const ruleFormRef = ref();
const form = ref({
    id: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    structure_id: "",
    position: "",
});
const saveEdit = async () => {
    await axios
        .put(`/api/v1/hrd/users/${form.value.id}`, form.value)
        .then(async (res) => {
            editEmployeeModal.value = false;
            store.dispatch("employees/getAllEmployees");
        });
};
</script>

<style lang="scss">
.el-tabs__header {
    margin: 0 !important;
}

.custom-tabs-label {
    display: flex;
    .unicon {
        margin-right: 5px;
        svg {
            height: 15px;
        }
    }
}
.el-tabs__item.is-active,
.el-tabs__item:hover {
    .unicon {
        svg {
            path {
                fill: #191b1d;
            }
        }
    }
}
</style>
