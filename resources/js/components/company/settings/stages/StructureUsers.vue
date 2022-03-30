<template>
    <p class="title" :class="style">{{ props.title }}</p>
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
            color="#DBE4EB"
            style="color: #191b1d"
            :icon="CirclePlus"
            @click="addUserToStageModal = true"
            >Добавить сотрудника</el-button
        >
    </div>
    <vue-good-table
        :columns="columns"
        :rows="structureUsers"
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
            <div v-if="props.column.field == 'surname'">
                {{ props.row.user.surname }}
                {{ props.row.user.name }}
            </div>
            <div v-if="props.column.field == 'edit'" class="edit-buttons">
                <button @click.prevent="deleteUser(props.row.id)">
                    <unicon name="times-circle" fill="red" />
                </button>
            </div>
            <div v-else>
                {{ props.formattedRow[props.column.field] }}
            </div>
        </template>
    </vue-good-table>
    <el-dialog
        v-model="addUserToStageModal"
        custom-class="text-left addUser"
        width="30%"
    >
        <template #title>
            <span class="el-dialog__title">Добавить доступ</span><br />
            <p class="text-sm font-normal mt-3">Этап - {{ currentTitle }}</p>
        </template>
        <el-form
            ref="ruleFormRef3"
            :model="stages"
            label-position="top"
            size="large"
        >
            <el-form-item>
                <vue-good-table
                    :columns="allUsersColumn"
                    :rows="allUsers"
                    :line-numbers="false"
                    :select-options="{ enabled: true }"
                    :search-options="{
                        enabled: true,
                        externalQuery: searchTerm,
                    }"
                    :pagination-options="{
                        enabled: false,
                    }"
                    styleClass="vgt-table bordered lll"
                    ref="myTable"
                >
                    <template v-slot:emptystate>Пусто</template>
                    <template v-slot:table-row="props">
                        <div v-if="props.column.field == 'surname'">
                            <div class="user-card flex items-center">
                                <el-avatar> </el-avatar>
                                <div>
                                    <h4>
                                        {{ props.row.surname }}
                                        {{ props.row.name }}
                                    </h4>

                                    <p>
                                        {{
                                            props.row.detail !== null
                                                ? props.row.detail.structure
                                                      .name
                                                : ""
                                        }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </vue-good-table>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="addUserToStage"
                    >Сохранить</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { computed, onMounted, ref, defineProps } from "vue";
import { CirclePlus, Search } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const emit = defineEmits(["getUsers", "deleteUser"]);
const props = defineProps({
    title: String,
    allUsers: Array,
    structureUsers: Array,
    columns: Array,
    allUsersColumn: Array,
    currentTitle: String,
    style: String,
});
console.log("props", props.structureUsers);
const searchTerm = ref("");
const myTable = ref();
const store = useStore();
const users = ref([]);
const addUserToStageModal = ref(false);
const addUserToStage = async () => {
    myTable.value.selectedRows.map((item) => {
        users.value.push(item.id);
    });
    console.log(users.value);
    emit("getUsers", users.value);
    addUserToStageModal.value = false;
};
const deleteUser = async (id) => {
    emit("deleteUser", id);
};
</script>

<style></style>
