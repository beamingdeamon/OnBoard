<template>
    <div class="tab-wrap">
        <div class="tab-navigate">
            <el-button
                class="w-full"
                color="#7734FC"
                style="color: #fff"
                :icon="CirclePlus"
                @click="addStructureModal = true"
                >Добавить департамент</el-button
            >
            <div v-for="(item, index) in structuresList" :key="item.id">
                <div
                    class="nodes mt-3.5"
                    :class="
                        currentStructure
                            ? currentStructure.id == item.id
                                ? 'active'
                                : ''
                            : index === 0
                            ? 'active'
                            : ''
                    "
                    @click="getStructureInfo(item.id)"
                >
                    {{ item.name }}
                    <div class="flex items-center mt-4">
                        <div @click="toggle(item.id)" class="mr-2.5">
                            <el-icon><ArrowDown /></el-icon>
                        </div>
                        <img src="/images/users.svg" alt="" />
                    </div>
                </div>
                <div v-if="item.toggle">
                    <div
                        class="nodes-children"
                        v-for="child in item.children"
                        :key="child.id"
                    >
                        <div class="nodes-wrap">
                            <div
                                class="nodes nodes-child"
                                :class="
                                    currentStructure
                                        ? currentStructure.id == child.id
                                            ? 'active'
                                            : ''
                                        : index === 0
                                        ? 'active'
                                        : ''
                                "
                                @click="getStructureInfo(child.id)"
                            >
                                {{ child.name }}
                                <img
                                    class="mt-2.5"
                                    src="/images/users.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="nodes-children">
                        <div class="nodes-wrap nodes-wrap__last">
                            <div
                                class="nodes nodes-child nodes-add"
                                @click="append(item)"
                            >
                                <el-icon color="#7734FC"><CirclePlus /></el-icon
                                >Добавить департамент
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    v-if="
                        currentStructure &&
                        item.id === currentStructure.id &&
                        !item.toggle
                    "
                >
                    <div class="nodes-children">
                        <div class="nodes-wrap nodes-wrap__last">
                            <div
                                class="nodes nodes-child nodes-add"
                                @click="append(item)"
                            >
                                <el-icon color="#7734FC"><CirclePlus /></el-icon
                                >Добавить департамент
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content">
            <div class="tab-header" v-if="currentStructure">
                <h3>
                    <span>
                        {{ currentStructure.name }}
                    </span>
                </h3>
                <button
                    v-if="edit"
                    @click.prevent="deleteStructure(currentStructure.id)"
                >
                    <unicon name="times-circle" fill="red" />
                </button>
                <el-dropdown trigger="click" v-else>
                    <unicon class="row-edit" name="ellipsis-h"></unicon>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="edit = true">
                                <div class="flex items-center rounded-b-[6px]">
                                    <unicon
                                        name="pen"
                                        class="mr-2"
                                        fill="#191B1D"
                                    ></unicon
                                    ><span>Редактировать</span>
                                </div>
                            </el-dropdown-item>
                            <el-dropdown-item
                                @click.prevent="
                                    deleteStructure(currentStructure.id)
                                "
                            >
                                <div class="flex items-center rounded-b-[6px]">
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
            <div class="tab-body" v-if="currentStructure">
                <el-form
                    v-if="edit"
                    ref="ruleFormRef2"
                    :model="currentStructure"
                    label-position="top"
                    size="large"
                    class="mb-10"
                >
                    <div class="flex gap-6">
                        <el-form-item
                            prop="name"
                            :rules="{
                                required: true,
                                message: 'Обязательное поле',
                                trigger: 'blur',
                            }"
                            label="Название"
                            class="w-[260px]"
                        >
                            <el-input
                                v-model="currentStructure.name"
                            ></el-input>
                        </el-form-item>
                    </div>

                    <el-button
                        type="primary"
                        color="#FF6854"
                        @click="updateStructure(ruleFormRef2)"
                        >Сохранить</el-button
                    >
                    <el-button
                        type="primary"
                        color="#F0F4F7"
                        style="color: #6d767e"
                        @click.prevent="cancelUpdate"
                        >Отменить</el-button
                    >
                </el-form>
                <structure-users
                    :title="`Сотрудники (${currentStructure.structure_users.length})`"
                    :allUsers="allUsers"
                    :structureUsers="currentStructure.structure_users"
                    :columns="columns"
                    :allUsersColumn="columns2"
                    currentTitle="asdas"
                    @getUsers="addUsers"
                    @deleteUser="deleteUser"
                />
            </div>
        </div>
    </div>
    <el-dialog
        v-model="addStructureModal"
        custom-class="text-left"
        width="max-content"
    >
        <template #title>
            <span class="el-dialog__title">Новое подразделение</span>
        </template>
        <el-form
            ref="ruleFormRef"
            :model="stages"
            label-position="top"
            size="large"
        >
            <div class="flex gap-6">
                <el-form-item
                    prop="name"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Название"
                    class="w-[260px]"
                >
                    <el-input v-model="stages.name"></el-input>
                </el-form-item>
            </div>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >Сохранить</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { CirclePlus, Search } from "@element-plus/icons-vue";
import { ArrowDown, ArrowUp } from "@element-plus/icons-vue";
import StructureUsers from "./StructureUsers.vue";
import { useToast } from "vue-toastification";
const toast = useToast();
const store = useStore();
const edit = ref(false);
let id = 1000;
const append = (data) => {
    stages.value.parent_id = data.id;
    addStructureModal.value = true;
};

const toggle = (id) => {
    const item = structuresList.value.find((data) => data.id === id);
    item.toggle = !item.toggle;
    console.log(item.toggle);
};

const currentStructure = ref(null);
const structuresList = ref(null);
const getStructuresList = async () => {
    await axios.get("/api/v1/hrd/structures").then(async (res) => {
        structuresList.value = res.data;
        console.log(structuresList.value);
        if (structuresList.value.length && !currentStructure.value) {
            const id = [...res.data][0].id;
            getStructureInfo(id);
        }
    });
};
const getStructureInfo = async (id) => {
    await axios.get("/api/v1/hrd/structures/" + id).then((res) => {
        currentStructure.value = res.data;
        edit.value = false;
    });
};

onMounted(() => getStructuresList());
const columns = ref([
    {
        label: "ФИО",
        field: "surname",
    },
    {
        label: "Email",
        field: "user.email",
    },

    {
        label: "Структура",
        field: "user.phone",
    },

    {
        label: "Действие",
        field: "edit",
        width: "150px",
    },
]);
const columns2 = ref([
    {
        label: "ФИО",
        field: "surname",
    },
]);
const ruleFormRef = ref();
const stages = ref({
    name: "",
    parent_id: "",
});
const addStructureModal = ref(false);
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .post("/api/v1/hrd/structures", stages.value)
                    .then(() => {
                        console.log("success");
                        getStructuresList();
                        addStructureModal.value = false;
                        toast.success("Успешно создано!");
                        edit.value = false;
                        stages.value = {
                            name: "",
                            parent_id: "",
                        };
                    });
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error(error.request);
                } else {
                    toast.error(error.message);
                }
            }
        } else {
            console.log("error submit!", fields);
        }
    });
};

const addUsers = async (selectedUsers) => {
    const data = {
        structure_id: currentStructure.value.id,
        ids: selectedUsers,
    };
    await axios.post("/api/v1/hrd/structures/setUsers", data).then(() => {
        getStructureInfo(currentStructure.value.id);
        // addUserToStageModal.value = false;
    });
};
const deleteUser = async (id) => {
    await axios.post("/api/v1/hrd/structures/deleteUser/" + id).then(() => {
        console.log("success");
        getStructureInfo(currentStructure.value.id);
    });
};
const allUsers = computed(() => store.state.employees.all);
const structureUsers = ref([]);

onMounted(store.dispatch("employees/getAllEmployees"));
const ruleFormRef2 = ref();

const updateStructure = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .put(
                        `/api/v1/hrd/structures/${currentStructure.value.id}`,
                        currentStructure.value
                    )
                    .then(() => {
                        getStructuresList();
                        edit.value = false;
                    });
            } catch (error) {
                if (error.response.data.errors) {
                    const errors = error.response.data.errors;
                    Object.entries(errors).map((obj) => {
                        const key = obj[0];
                        const value = obj[1];
                        value.map((error) => {
                            toast.error(error);
                        });
                    });
                } else if (error.response) {
                    toast.error(error.response.data.message);
                } else if (error.request) {
                    toast.error(error.request);
                } else {
                    toast.error(error.message);
                }
            }
        } else {
            console.log("error submit!", fields);
        }
    });
};
const cancelUpdate = async () => {
    getStructureInfo(currentStructure.value.id);
    console.log(currentStructure.value);
    edit.value = false;
};
const deleteStructure = async (id) => {
    await axios.delete("/api/v1/hrd/structures/" + id).then(() => {
        currentStructure.value = null;
        getStructuresList();
        edit.value = false;
    });
};
</script>

<style lang="scss">
.nodes {
    background: #ffffff;
    border: 1px solid #c4d1d9;
    border-radius: 10px;
    padding: 20px 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    cursor: pointer;
    color: #191b1d;

    &.active {
        background: rgba(119, 52, 252, 0.1);
        border: 1px solid #7734fc;
    }
    &-child {
        margin-left: 30px;

        position: relative;
    }
    &-wrap {
        position: relative;
        padding-top: 15px;
        &::before {
            content: "";
            position: absolute;
            left: 13px;
            top: calc(60%);
            width: 17px;
            height: 0;
            border-top: 1px solid #c4d1d9;
        }
        &::after {
            content: "";
            position: absolute;
            left: 13px;
            top: 0;
            width: 1px;
            height: 100%;
            border-right: 1px solid #c4d1d9;
        }
        &__last {
            &::after {
                content: "";
                position: absolute;
                left: 13px;
                top: 0;
                width: 1px;
                height: 60%;
                border-right: 1px solid #c4d1d9;
            }
        }
    }
    &-add {
        padding: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #7734fc;
        font-weight: 400;
        font-size: 12.5px;
        line-height: 15px;
        cursor: pointer;
        .el-icon {
            margin-right: 5px;
        }
        &:hover {
            background: rgba(119, 52, 252, 0.1);
        }
    }
}
</style>
