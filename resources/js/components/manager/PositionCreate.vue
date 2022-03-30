<template>
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
                        <div style="visibility: hidden">до</div></template
                    >
                    <el-input
                        v-model="form.price_to"
                        placeholder="до"
                        type="number"
                    ></el-input>
                </el-form-item>
            </div>
        </div>

        <el-form-item prop="description" label="Краткое описание должности">
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
        <el-button color="#F0F4F7" style="color: #6d767e">Отменить</el-button>
    </el-form>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import Editor from "@tinymce/tinymce-vue";
import { useToast } from "vue-toastification";
const toast = useToast();

const form = ref({
    title: "",
    grade: "",
    price_from: "",
    price_to: "",
    description: "",
    job_instructions: "",
});
const rules = ref({});
const ruleFormRef = ref();
const emit = defineEmits(["updatePosition"]);
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .post("/api/v1/manager/positions", form.value)
                    .then((res) => {
                        console.log(res);
                        emit("updatePosition");
                        toast.success("Сохранено!");
                        form.value = {
                            title: "",
                            grade: "",
                            price_from: "",
                            price_to: "",
                            description: "",
                            job_instructions: "",
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
</script>
<style lang="scss" scoped>
.delete-account {
    border: 1px solid #dbe4eb;
    border-radius: 10px;
}
</style>
