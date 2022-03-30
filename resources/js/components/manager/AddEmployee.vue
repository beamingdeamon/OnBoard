<template>
    <el-button
        type="primary"
        color="#FF6854"
        style="color: white"
        :icon="Message"
        @click="inviteEmailModal = true"
        >Пригласить сотрудника</el-button
    >

    <el-dropdown trigger="click">
        <el-button color="#DBE4EB" style="color: #191b1d" :icon="CirclePlus"
            >Пригласить сотрудника
            <el-icon class="el-icon--right"><ArrowDown /></el-icon
        ></el-button>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item @click="inviteFileModal = true">
                    <div class="flex items-center rounded-b-[6px]">
                        <unicon
                            name="cloud-upload"
                            fill=" #32373C"
                            class="mr-2"
                        ></unicon
                        ><span>Импорт из файла</span>
                    </div>
                </el-dropdown-item>
                <el-dropdown-item
                    ><div class="flex items-center rounded-b-[6px]">
                        <unicon
                            name="user-plus"
                            fill="#32373C"
                            class="mr-2"
                        ></unicon
                        ><span>Импорт из сайта</span>
                    </div></el-dropdown-item
                >
            </el-dropdown-menu>
        </template>
    </el-dropdown>
    <el-dialog
        v-model="inviteFileModal"
        custom-class="dialog-left"
        width="max-content"
    >
        <template #title>
            <span class="el-dialog__title">Импорт из файла</span><br />
        </template>
        <el-form
            ref="ruleFormRef"
            :model="form"
            label-position="top"
            size="large"
        >
            <el-form-item :key="index">
                <div class="flex items-end gap-6">
                    <el-upload
                        ref="uploadRef"
                        class="upload-demo"
                        drag
                        action="http://127.0.0.1:8000/api/v1/hrd/users/massStore"
                        :headers="headers"
                        :on-success="handleSuccess"
                        :auto-upload="false"
                    >
                        <template #trigger>
                            <el-icon class="el-icon--upload"
                                ><upload-filled
                            /></el-icon>
                            <div class="el-upload__text">
                                Перетащитите файл сюда или выберите
                            </div>
                        </template>
                    </el-upload>
                </div>
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submitUpload"
                    >Отправить</el-button
                >
            </span>
        </template>
    </el-dialog>
    <el-dialog
        v-model="inviteEmailModal"
        custom-class="dialog-left"
        width="max-content"
    >
        <template #title>
            <span class="el-dialog__title">Пригласить сотрудника</span><br />
            <p class="text-sm font-normal mt-3">
                Пригласить по электронной почте
            </p>
        </template>
        <el-form
            ref="ruleFormRef"
            :model="form"
            label-position="top"
            size="large"
        >
            <el-form-item v-for="(invite, index) in form.invites" :key="index">
                <div class="flex items-end gap-6">
                    <el-form-item
                        :prop="'invites.' + index + '.email'"
                        :rules="{
                            required: true,
                            message: 'Обязательное поле',
                            trigger: 'blur',
                        }"
                        label="Email"
                        class="w-[260px]"
                    >
                        <el-input v-model="invite.email"></el-input>
                    </el-form-item>

                    <el-form-item
                        label="Структура"
                        class="w-[260px]"
                        :prop="'invites.' + index + '.structure_id'"
                        :rules="{
                            required: true,
                            message: 'Обязательное поле',
                            trigger: 'change',
                        }"
                    >
                        <el-select
                            v-model="invite.structure_id"
                            placeholder="Структура"
                            class="w-[260px]"
                        >
                            <el-option
                                v-for="item in structures"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id"
                            ></el-option>
                        </el-select>
                    </el-form-item>

                    <button @click.prevent="removeEmail(invite)">
                        <unicon name="times-circle" fill="red" />
                    </button>
                </div>
            </el-form-item>
            <button class="text-red-500" @click.prevent="addEmail">
                + &nbsp;&nbsp;Добавить способ связи
            </button>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submitForm(ruleFormRef)"
                    >Отправить</el-button
                >
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";
import {
    Search,
    Edit,
    Message,
    ArrowDown,
    CirclePlus,
} from "@element-plus/icons-vue";
import { ElUpload } from "element-plus";
import { UploadFilled } from "@element-plus/icons-vue";
const toast = useToast();
const inviteEmailModal = ref(false);
const inviteFileModal = ref(false);
const form = ref({
    invites: [{ email: "", structure_id: "" }],
});
const ruleFormRef = ref();
const addEmail = () => {
    form.value.invites.push({ email: "", structure_id: "" });
};
const headers = ref({
    Authorization: "Bearer " + localStorage.getItem("token"),
});
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .post("/api/v1/hrd/users/emailStore", form.value)
                    .then((res) => {
                        console.log(res);
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

const handleSuccess = () => {
    inviteFileModal.value = false;
};
const uploadRef = ref(ElUpload);
const submitUpload = () => {
    console.log(uploadRef.value);
    uploadRef.value.submit();
};
const structures = ref([]);
const getStructures = async () => {
    await axios.get("/api/v1/hrd/structures").then((res) => {
        structures.value = res.data;
    });
};
const positions = ref([]);
const getPositions = async () => {
    await axios.get("/api/v1/hrd/positions").then((res) => {
        positions.value = res.data;
    });
};
const props = ref({
    key: "id",
    label: "name",
    value: "id",
    checkStrictly: true,
});
onMounted(getPositions());
onMounted(getStructures());
</script>

<style lang="scss">
.dialog-left {
    max-height: 700px;
    overflow: auto;
    border-radius: 10px;
    .el-dialog__footer {
        text-align: left;
    }
}
</style>
