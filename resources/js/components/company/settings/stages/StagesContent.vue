<template>
    <div class="tab-wrap">
        <div class="tab-navigate">
            <el-button
                class="w-full"
                color="#7734FC"
                style="color: #fff"
                :icon="CirclePlus"
                @click="addStageModal = true"
                >Добавить этап</el-button
            >
            <div class="stages">
                <div
                    class="stage"
                    v-for="(item, index) in stagesList"
                    :key="item.id"
                    @click="getStageInfo(item.id)"
                >
                    <div class="stage-num">{{ index }}</div>
                    <div
                        class="stage-name"
                        :class="
                            currentStage
                                ? currentStage.id == item.id
                                    ? 'active'
                                    : ''
                                : index === 0
                                ? 'active'
                                : ''
                        "
                    >
                        <div
                            class="color"
                            :style="`background-color: ${item.color}`"
                        ></div>
                        <div>
                            <p class="title">{{ item.title }}</p>
                            <p class="subtitle">
                                {{ item.subtitle }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tab-content">
            <div class="tab-header" v-if="currentStage">
                <h3>
                    <span v-if="edit"> Настройка этапа -</span>
                    <span v-else></span>
                    {{
                        stagesList.find((item) => item.id === currentStage.id)
                            .title
                    }}
                </h3>
                <button
                    v-if="edit"
                    @click.prevent="deleteStage(currentStage.id)"
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
                                @click.prevent="deleteStage(currentStage.id)"
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
            <div class="tab-body" v-if="currentStage">
                <p class="title">Отображение</p>
                <div
                    v-if="!edit"
                    class="stage-card"
                    :style="`background-color: ${currentStage.color}`"
                >
                    <p class="titles">{{ currentStage.title }}</p>
                    <p class="subtitle">
                        {{ currentStage.subtitle }}
                    </p>
                </div>
                <el-form
                    v-else
                    ref="ruleFormRef2"
                    :model="currentStage"
                    label-position="top"
                    size="large"
                >
                    <div class="flex gap-6">
                        <el-form-item
                            prop="title"
                            :rules="{
                                required: true,
                                message: 'Обязательное поле',
                                trigger: 'blur',
                            }"
                            label="Заголовок этапа"
                            class="w-[260px]"
                        >
                            <el-input v-model="currentStage.title"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="Подзаголовок этапа"
                            class="w-[260px]"
                        >
                            <el-input
                                v-model="currentStage.subtitle"
                            ></el-input>
                        </el-form-item>
                    </div>
                    <el-form-item
                        prop="color"
                        :rules="{
                            required: true,
                            message: 'Обязательное поле',
                            trigger: 'blur',
                        }"
                        label="Цвет"
                        class="w-[150px]"
                    >
                        <el-input
                            v-model="currentStage.color"
                            type="color"
                        ></el-input>
                    </el-form-item>
                    <el-button
                        type="primary"
                        color="#FF6854"
                        @click="updateStage(ruleFormRef2)"
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
                    :style="'mt-10'"
                    title="Доступы"
                    :allUsers="allUsers"
                    :structureUsers="currentStage.stage_users"
                    :columns="columns"
                    :allUsersColumn="columns2"
                    :currentTitle="currentStage.title"
                    @getUsers="addUsers"
                    @deleteUser="deleteUser"
                />
            </div>
        </div>
    </div>
    <el-dialog
        v-model="addStageModal"
        custom-class="text-left"
        width="max-content"
    >
        <template #title>
            <span class="el-dialog__title">Новый этап отбора</span>
        </template>
        <el-form
            ref="ruleFormRef"
            :model="stages"
            label-position="top"
            size="large"
        >
            <div class="flex gap-6">
                <el-form-item
                    prop="title"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                    label="Заголовок этапа"
                    class="w-[260px]"
                >
                    <el-input v-model="stages.title"></el-input>
                </el-form-item>
                <el-form-item label="Подзаголовок этапа" class="w-[260px]">
                    <el-input v-model="stages.subtitle"></el-input>
                </el-form-item>
            </div>
            <el-form-item
                prop="color"
                :rules="{
                    required: true,
                    message: 'Обязательное поле',
                    trigger: 'blur',
                }"
                label="Цвет"
                class="w-[150px]"
            >
                <el-input v-model="stages.color" type="color"></el-input>
            </el-form-item>
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
import { computed, onMounted, ref } from "vue";
import StructureUsers from "../../../../components/company/settings/stages/StructureUsers.vue";
import { CirclePlus, Search } from "@element-plus/icons-vue";
import { useToast } from "vue-toastification";
import { useStore } from "vuex";
const toast = useToast();
const store = useStore();
const ruleFormRef = ref();
const ruleFormRef2 = ref();

const edit = ref(false);

const addStageModal = ref(false);
const currentStage = ref(null);
const myTable = ref(null);
//stages
const stages = ref({
    title: "",
    subtitle: "",
    color: "#DBE4EB",
});
const stagesList = ref([]);
const stagess = async () => {
    await axios.get("/api/v1/hrd/stages").then((res) => {
        stagesList.value = res.data;
        if (stagesList.value.length && !currentStage.value) {
            const id = [...res.data][0].id;
            getStageInfo(id);
        }
    });
};
const getStageInfo = async (id) => {
    await axios.get("/api/v1/hrd/stages/" + id).then((res) => {
        currentStage.value = res.data;
        edit.value = false;
    });
};
onMounted(() => stagess());

const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .post("/api/v1/hrd/stages", stages.value)
                    .then(() => {
                        console.log("success");
                        stagess();
                        addStageModal.value = false;
                        toast.success("Успешно создано!");
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

const updateStage = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .put(
                        `/api/v1/hrd/stages/${currentStage.value.id}`,
                        currentStage.value
                    )
                    .then(() => {
                        stagess();
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
    getStageInfo(currentStage.value.id);
    console.log(currentStage.value);
    edit.value = false;
};
const deleteStage = async (id) => {
    await axios.delete("/api/v1/hrd/stages/" + id).then(() => {
        currentStage.value = null;
        stagess();
        edit.value = false;
    });
};
//users
const searchTerm = ref("");
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
const users = ref([]);
const addUserToStageModal = ref(false);

const addUsers = async (selectedUsers) => {
    const data = { stage_id: currentStage.value.id, ids: selectedUsers };
    await axios.post("/api/v1/hrd/stages/setUsers", data).then(() => {
        getStageInfo(currentStage.value.id);
        addUserToStageModal.value = false;
    });
};
const deleteUser = async (id) => {
    await axios.post("/api/v1/hrd/stages/deleteUser/" + id).then(() => {
        console.log("success");
        getStageInfo(currentStage.value.id);
    });
};
const allUsers = computed(() => store.state.employees.all);

onMounted(store.dispatch("employees/getAllEmployees"));

const rows = ref([]);
</script>

<style></style>
