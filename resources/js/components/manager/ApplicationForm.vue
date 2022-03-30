<template>
    <el-form
        ref="ruleFormRef"
        :model="form"
        :rules="rules"
        label-position="top"
        size="large"
    >
        <el-form-item
            label="Название вакансии"
            prop="name"
            class="w-full"
            :rules="{
                required: true,
                message: 'Обязательное поле',
                trigger: 'blur',
            }"
        >
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item
            v-if="searchReasons.length"
            prop="search_reason_id"
            :rules="{
                required: true,
                message: 'Обязательное поле',
                trigger: 'blur',
            }"
            label="Причина поиска кандидата"
            class="w-[300px]"
        >
            <el-select
                v-model="form.search_reason_id"
                placeholder="Структура"
                class="w-[300px]"
            >
                <el-option
                    v-for="item in searchReasons"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                ></el-option>
            </el-select>
        </el-form-item>
        <div class="flex gap-6">
            <el-form-item
                prop="structure_id"
                :rules="{
                    required: true,
                    message: 'Обязательное поле',
                    trigger: 'blur',
                }"
                label="Структурное подразделение"
                class="w-[300px]"
            >
                <el-select
                    v-model="form.structure_id"
                    placeholder="Структура"
                    class="w-[300px]"
                >
                    <el-option
                        v-for="item in structures"
                        :key="item.id"
                        :label="item.name"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-form-item
                prop="position_id"
                :rules="{
                    required: true,
                    message: 'Обязательное поле',
                    trigger: 'blur',
                }"
                label="Должность"
                class="w-[300px]"
            >
                <el-select
                    v-model="form.position_id"
                    placeholder="Структура"
                    class="w-[300px]"
                    @change="handleChange"
                >
                    <el-option
                        v-for="item in positions"
                        :key="item.id"
                        :label="item.title"
                        :value="item.id"
                    ></el-option>
                </el-select>
            </el-form-item>
        </div>

        <el-form-item
            prop="job_description"
            label="Описание должностной инструкции"
        >
            <editor
                api-key="smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw"
                v-model="form.job_description"
                :init="{
                    height: 245,
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
                v-model="form.job_instruction"
                class="w-full"
                :init="{
                    height: 245,
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
import { useStore } from "vuex";
import { useToast } from "vue-toastification";
const toast = useToast();
const email = ref("asd");
const store = useStore();
const value = ref("");
const form = ref({
    name: "",
    search_reason_id: "",
    position_id: "",
    structure_id: "",
    job_description: "",
    job_instruction: "",
});
const rules = ref({});
const profile = computed(() => store.state.manager.profile);
const searchReasons = ref([]);
const getSearchReasons = async () => {
    await axios.get("/api/v1/admin/directories/search-reasons").then((res) => {
        searchReasons.value = res.data;
    });
};
const structures = ref([]);
const getStructures = async () => {
    await axios.get("/api/v1/hrd/structures").then((res) => {
        structures.value = res.data;
    });
};
const handleChange = async (value) => {
    await axios.get("/api/v1/manager/positions/" + value).then((res) => {
        form.value.job_description = res.data.description;
        form.value.job_instruction = res.data.job_instructions;
    });
};
const positions = ref([]);
const getPositions = async () => {
    await axios.get("/api/v1/hrd/positions").then((res) => {
        positions.value = res.data;
    });
};
const emit = defineEmits(["updateAppliction"]);
const ruleFormRef = ref();
const submitForm = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .post("/api/v1/manager/vacancies", form.value)
                    .then((res) => {
                        console.log(res);
                        emit("updateAppliction");
                        toast.success("Сохранено!");
                        form.value = {
                            title: "",
                            grade: "",
                            price_from: "",
                            price_to: "",
                            description: "",
                            job_instruction: "",
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
onMounted(getSearchReasons());
onMounted(getPositions());
onMounted(getStructures());
onMounted(store.dispatch("manager/getProfile"));
</script>
<style lang="scss" scoped>
.delete-account {
    border: 1px solid #dbe4eb;
    border-radius: 10px;
}
</style>
