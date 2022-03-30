<template>
    <div class="tab-wrap">
        <div class="tab-navigate">
            <el-button
                class="w-full"
                color="#7734FC"
                style="color: #fff"
                :icon="CirclePlus"
                @click="addTemplate"
                >Добавить должность</el-button
            >
            <div v-for="(item, index) in templatesList" :key="item.id">
                <div
                    class="nodes mt-3.5"
                    :class="
                        currentTemplate
                            ? currentTemplate.id == item.id
                                ? 'active'
                                : ''
                            : index === 0
                            ? 'active'
                            : ''
                    "
                    @click="getTemplateInfo(item.id)"
                >
                    {{ item.title }}
                </div>
            </div>
        </div>
        <div class="tab-content">
            <div class="tab-header" v-if="currentTemplate">
                <h3>
                    <span>
                        {{ currentTemplate.title }}
                    </span>
                </h3>
                <button
                    v-if="edit"
                    @click.prevent="deleteTemplate(currentTemplate.id)"
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
                                    deleteTemplate(currentTemplate.id)
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
            <div class="tab-body" v-if="currentTemplate">
                <el-form
                    v-if="edit"
                    ref="ruleFormRef2"
                    :model="currentTemplate"
                    label-position="top"
                    size="large"
                    class="mb-10"
                >
                    <el-form-item
                        prop="title"
                        :rules="{
                            required: true,
                            message: 'Обязательное поле',
                            trigger: 'blur',
                        }"
                        label="Тема письма"
                        class="w-[260px]"
                    >
                        <el-input v-model="currentTemplate.title"></el-input>
                    </el-form-item>
                    <el-form-item
                        prop="description"
                        :rules="{
                            required: true,
                            message: 'Обязательное поле',
                            trigger: 'blur',
                        }"
                        label="Описание"
                        class="w-full"
                    >
                        <editor
                            api-key="smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw"
                            v-model="currentTemplate.description"
                            :init="{
                                height: 500,
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
                        type="primary"
                        color="#FF6854"
                        @click="updateTemplate(ruleFormRef2)"
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
                <div v-else>
                    <p class="title">Описание должности</p>
                    <div v-html="currentTemplate.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

import { CirclePlus } from "@element-plus/icons-vue";
import { useToast } from "vue-toastification";
import Editor from "@tinymce/tinymce-vue";
import EmailHtml from "./EmailHtml.vue";
import axios from "axios";
const toast = useToast();

//Email
const edit = ref(false);
const templatesList = ref(null);
const currentTemplate = ref(null);
const ruleFormRef2 = ref();
const getTemplatesList = async () => {
    await axios.get("/api/v1/hrd/positions").then(async (res) => {
        templatesList.value = res.data;
        console.log(templatesList.value);
        if (templatesList.value.length && !currentTemplate.value) {
            const id = [...res.data][0].id;
            getTemplateInfo(id);
        }
    });
};
const getTemplateInfo = async (id) => {
    await axios.get("/api/v1/hrd/positions/" + id).then((res) => {
        currentTemplate.value = res.data;
        edit.value = false;
    });
};

const addTemplate = async () => {
    await axios.post("/api/v1/hrd/positions").then(() => {
        console.log("success");
        getTemplatesList();
        toast.success("Успешно создано!");
        edit.value = false;
    });
};
const updateTemplate = async (formEl) => {
    if (!formEl) return;
    await formEl.validate(async (valid, fields) => {
        if (valid) {
            try {
                await axios
                    .put(
                        `/api/v1/hrd/positions/${currentTemplate.value.id}`,
                        currentTemplate.value
                    )
                    .then(() => {
                        getTemplatesList();
                        edit.value = false;
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
const cancelUpdate = async () => {
    getTemplateInfo(currentTemplate.value.id);
    console.log(currentTemplate.value);
    edit.value = false;
};
const deleteTemplate = async (id) => {
    await axios.delete("/api/v1/hrd/positions/" + id).then(() => {
        currentTemplate.value = null;
        getTemplatesList();
        edit.value = false;
    });
};
onMounted(() => getTemplatesList());
</script>

<style lang="scss">
.description * {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    margin: 0;
    color: #6d767e;
}
.nodes {
    background: #ffffff;
    border: 1px solid #c4d1d9;
    border-radius: 10px;
    padding: 13px 16px;
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
