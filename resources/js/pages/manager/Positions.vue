<template>
    <div class="page-content pt-4">
        <h4 class="font-bold pb-5">Должности</h4>

        <div class="flex gap-2.5 mb-5">
            <el-input
                v-model="searchTerm"
                class="!w-[260px]"
                placeholder="Поиск по названию"
            >
                <template #prefix>
                    <el-icon class="el-input__icon"><search /></el-icon>
                </template>
            </el-input>
        </div>

        <div class="grid grid-cols-4 gap-5">
            <div
                class="add-item flex items-center justify-center h-[100px] border-dashed border border-gray-placeholder rounded-lg cursor-pointer hover:border-red-primary"
                @click="createPosition = true"
            >
                <unicon name="plus-circle" fill="#FF6854" /><span
                    class="text-red-primary pl-2"
                    >Создать новую должность</span
                >
            </div>

            <div
                class="h-[100px] flex flex-col justify-between rounded-lg py-3.5 px-5 border-solid border border-gray-placeholder"
                v-for="item in positions"
                :key="item.id"
            >
                <div class="flex justify-between items-center">
                    <p class="font-bold text-15">{{ item.title }}</p>

                    <el-dropdown trigger="click">
                        <span class="cursor-pointer flex items-center">
                            <unicon name="ellipsis-h" hover-fill="#FF6854" />
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>
                                    <div
                                        class="flex items-center rounded-b-[6px]"
                                    >
                                        <unicon
                                            name="eye"
                                            class="mr-2"
                                            fill="#191B1D"
                                        ></unicon
                                        ><span>Посмотреть</span>
                                    </div>
                                </el-dropdown-item>
                                <el-dropdown-item
                                    @click="editPosition(item.id)"
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
                                <el-dropdown-item
                                    @click="deletePosition(item.id)"
                                >
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
                <p class="text-gray-label text-13">
                    Обновлено:
                    {{ moment(item.updated_at).locale("ru").format("ll") }}
                </p>
            </div>
        </div>
    </div>
    <el-drawer v-model="drawer" size="50%">
        <template #title>
            <div class="flex gap-1 items-center text-main-black">
                <unicon name="file-plus-alt" fill="#FF6854" />
                <span> Новая заявка</span>
            </div>
        </template>
        <div>
            <el-form
                ref="ruleFormRef"
                :model="form"
                :rules="rules"
                label-position="top"
                size="large"
            >
                <el-form-item
                    label="Название должности"
                    prop="title"
                    class="w-full"
                    :rules="{
                        required: true,
                        message: 'Обязательное поле',
                        trigger: 'blur',
                    }"
                >
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <div class="flex gap-6">
                    <el-form-item
                        label="Грейд"
                        prop="title"
                        class="w-1/2"
                        :rules="{
                            required: true,
                            message: 'Обязательное поле',
                            trigger: 'blur',
                        }"
                    >
                        <el-input v-model="form.grade"></el-input>
                    </el-form-item>
                    <div class="flex items-center w-1/2">
                        <el-form-item label="Уровень зарплаты" class="w-full">
                            <el-input
                                v-model="form.price_from"
                                placeholder="от"
                                type="number"
                            ></el-input>
                        </el-form-item>
                        -
                        <el-form-item prop="title" class="w-full">
                            <template #label>
                                <div style="visibility: hidden">
                                    до
                                </div></template
                            >
                            <el-input
                                v-model="form.price_to"
                                placeholder="до"
                                type="number"
                            ></el-input>
                        </el-form-item>
                    </div>
                </div>

                <el-form-item
                    prop="description"
                    label="Краткое описание должности"
                >
                    <editor
                        api-key="smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw"
                        v-model="form.description"
                        class="w-full"
                        :init="{
                            height: 245,
                            width: '100%',
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount',
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
                        }"
                    />
                </el-form-item>
                <el-form-item
                    prop="rules"
                    class="w-full"
                    label="Описание должностных обязанностей"
                >
                    <editor
                        api-key="smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw"
                        v-model="form.job_instructions"
                        class="w-full"
                        :init="{
                            height: 245,
                            width: '100%',
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount',
                            ],
                            toolbar:
                                'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
                        }"
                    />
                </el-form-item>
                <el-button
                    color="#FF6854"
                    style="color: white"
                    @click="submitForm(ruleFormRef)"
                    >Сохранить</el-button
                >
                <el-button color="#F0F4F7" style="color: #6d767e"
                    >Отменить</el-button
                >
            </el-form>
        </div>
    </el-drawer>
    <el-drawer v-model="createPosition" size="50%">
        <template #title>
            <div class="flex gap-1 items-center text-main-black">
                <unicon name="file-plus-alt" fill="#FF6854" />
                <span> Новая заявка</span>
            </div>
        </template>
        <div>
            <position-create @updatePosition="updatePosition" />
        </div>
    </el-drawer>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Search } from "@element-plus/icons-vue";
// import PositionForm from "../../components/manager/PositionForm.vue";
import PositionCreate from "../../components/manager/PositionCreate.vue";
import Editor from "@tinymce/tinymce-vue";
import axios from "axios";
import moment from "moment";
import "moment/locale/ru";
import { useToast } from "vue-toastification";
const toast = useToast();
const store = useStore();
const searchTerm = ref("");
const drawer = ref(false);
const positions = ref([]);
const getPositions = async () => {
    await axios.get("/api/v1/manager/positions").then((res) => {
        positions.value = res.data;
    });
};
const createPosition = ref(false);
const positionInfo = ref(null);
const editPosition = async (id) => {
    console.log(id);
    positionInfo.value = id;
    store.commit("manager/setId", id);
    getPositionInfo();
    console.log(store.state.manager.id);
    drawer.value = true;
};
const updatePosition = () => {
    drawer.value = false;
    createPosition.value = false;
    getPositions();
};
const deletePosition = async (id) => {
    await axios.delete("/api/v1/hrd/positions/" + id).then((res) => {
        updatePosition();
        toast.success("Удалено!");
    });
};
onMounted(getPositions());

const getPositionInfo = async () => {
    await axios
        .get("/api/v1/manager/positions/" + store.state.manager.id)
        .then((res) => {
            form.value = res.data;
        });
};

const form = ref({
    title: "",
    grade: "",
    price_from: "",
    price_to: "",
    description: "",
    job_instructions: "",
});
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .put(
                        "/api/v1/manager/positions/" + store.state.manager.id,
                        form.value
                    )
                    .then((res) => {
                        console.log(res);
                        updatePosition();
                        toast.success("Сохранено!");
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
const rules = ref({});
const ruleFormRef = ref();
</script>

<style lang="scss"></style>
