<template>
    <div class="page-header bg-gray-200">
        <div class="flex items-center gap-3">
            <router-link :to="{ name: 'company' }" class="flex items-center"
                ><unicon name="angle-left-b"
            /></router-link>
            <p class="font-bold text-small px-6">Редактировать профиль</p>
            <el-button
                @click="$store.dispatch('company/submitForm', ruleFormRef)"
                color="#7734fc"
                style="color: white"
                >Сохранить</el-button
            >
            <main-button>Отменить</main-button>
        </div>
    </div>
    <div class="page-content">
        <h2 class="font-bold text-small text-gray-500 mb-4">
            Основная информация
        </h2>
        <el-form
            ref="ruleFormRef"
            :model="company"
            :rules="rules"
            label-position="top"
            size="large"
        >
            <div class="flex gap-8">
                <el-avatar
                    :size="80"
                    class="relative !text-xl"
                    :src="company.logo"
                    fit="cover"
                >
                    RT
                    <div
                        class="absolute w-full h-full bg-[#3A3D40]/70 flex items-center justify-center"
                    >
                        <unicon
                            name="image-plus"
                            height="30"
                            width="30"
                            fill="#fff"
                        />
                    </div>
                    <input
                        class="absolute w-full h-full bg-[#3A3D40]/70 flex items-center justify-center opacity-0"
                        type="file"
                        @change="(event) => previewFiles(event)"
                    />
                </el-avatar>
                <div>
                    <div class="flex gap-6">
                        <el-form-item
                            label="Название компании"
                            prop="company_name"
                            class="w-[367px]"
                        >
                            <el-input v-model="company.company_name"></el-input>
                        </el-form-item>
                        <el-form-item
                            label="Сфера деятельности"
                            prop="sphere"
                            class="w-[367px]"
                        >
                            <el-input v-model="company.sphere"></el-input>
                        </el-form-item>
                    </div>

                    <el-form-item prop="description" label="Описание компании">
                        <editor
                            api-key="smq93pmzmcw471hivrg6vts22kyeef3k0dejf17b3545v7zw"
                            v-model="company.description"
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
                </div>
            </div>
            <h2 class="font-bold text-small text-gray-500 mb-4 pt-10">
                Связаться
            </h2>
            <div class="flex">
                <div class="flex flex-col items-start">
                    <el-form-item
                        v-for="(contact, index) in company.contacts"
                        :key="index"
                    >
                        <div class="flex items-center gap-8">
                            <el-form-item
                                label="Способ связи"
                                class="w-[260px]"
                                :prop="'contacts.' + index + '.contact_type_id'"
                                :rules="{
                                    required: true,
                                    message: 'Обязательное поле',
                                    trigger: 'blur',
                                }"
                            >
                                <el-select
                                    v-model="contact.contact_type_id"
                                    placeholder="please select your zone"
                                    class="w-[260px]"
                                >
                                    <el-option
                                        label="Zone one"
                                        value="1"
                                    ></el-option>
                                    <el-option
                                        label="Zone two"
                                        value="2"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item
                                :prop="'contacts.' + index + '.contact'"
                                :rules="{
                                    required: true,
                                    message: 'Обязательное поле',
                                    trigger: 'blur',
                                }"
                                label="Ссылка"
                                class="w-[260px]"
                            >
                                <el-input v-model="contact.contact"></el-input>
                            </el-form-item>
                            <button
                                @click.prevent="
                                    $store.dispatch(
                                        'company/removeContact',
                                        contact
                                    )
                                "
                            >
                                <unicon name="times-circle" fill="red" />
                            </button>
                        </div>
                    </el-form-item>
                    <button
                        class="text-red-500"
                        @click.prevent="$store.dispatch('company/addContact')"
                    >
                        + &nbsp;&nbsp;Добавить способ связи
                    </button>
                </div>
            </div>
            <h2 class="font-bold text-small text-gray-500 mb-4 pt-10">
                Адреса офисов
            </h2>
            <div class="flex">
                <div class="flex flex-col items-start">
                    <el-form-item
                        v-for="(address, index) in company.addresses"
                        :key="address.id"
                    >
                        <div class="flex items-center gap-8">
                            <el-form-item
                                label="Город"
                                class="w-[260px]"
                                :prop="'addresses.' + index + '.city_id'"
                                :rules="{
                                    required: true,
                                    message: 'Обязательное поле',
                                    trigger: 'blur',
                                }"
                            >
                                <el-select
                                    v-model="address.city_id"
                                    placeholder="please select your zone"
                                    class="w-[260px]"
                                >
                                    <el-option
                                        label="Zone one"
                                        value="1"
                                    ></el-option>
                                    <el-option
                                        label="Zone two"
                                        value="2"
                                    ></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item
                                :prop="'addresses.' + index + '.address'"
                                :rules="{
                                    required: true,
                                    message: 'Обязательное поле',
                                    trigger: 'blur',
                                }"
                                label="Адрес"
                                class="w-[260px]"
                            >
                                <el-input v-model="address.address"></el-input>
                            </el-form-item>
                            <el-form-item
                                :prop="'addresses.' + index + '.map'"
                                :rules="{
                                    required: true,
                                    message: 'Обязательное поле',
                                    trigger: 'blur',
                                }"
                                label="Ссылка на 2GIS"
                                class="w-[260px]"
                            >
                                <el-input v-model="address.map"></el-input>
                            </el-form-item>
                            <button
                                @click.prevent="
                                    $store.dispatch(
                                        'company/removeAddress',
                                        address
                                    )
                                "
                            >
                                <unicon name="times-circle" fill="red" />
                            </button>
                        </div>
                    </el-form-item>
                    <button
                        class="text-red-500"
                        @click.prevent="$store.dispatch('company/addAddress')"
                    >
                        + &nbsp;&nbsp;Добавить способ связи
                    </button>
                </div>
            </div>
        </el-form>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import mainButton from "../../components/utils/mainButton.vue";
import MainInput from "../../components/utils/MainInput.vue";
import Editor from "@tinymce/tinymce-vue";
import { Plus } from "@element-plus/icons-vue";
import { useStore } from "vuex";

export default {
    components: { mainButton, MainInput, editor: Editor, Plus },

    setup() {
        const ruleFormRef = ref();
        const store = useStore();
        const rules = computed(() => store.state.company.rules);
        const company = computed(() => store.state.company.company);
        onMounted(store.dispatch("company/getCompanyInfo"));
        return {
            rules,
            ruleFormRef,
            company,
        };
    },
};
</script>

<style lang="scss" scoped>
.page-header {
    padding: 14px 20px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 2;
}
.el-avatar {
    background: #7734fc;
}
</style>
