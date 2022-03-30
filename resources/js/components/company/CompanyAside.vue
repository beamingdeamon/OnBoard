<template>
    <div class="company-aside pb-6">
        <div class="company-header"></div>
        <div class="company-content">
            <el-avatar :size="80"> РТ </el-avatar>
            <div class="p-6 flex items-center flex-col mt-[-25px]">
                <h2 class="text-lg font-bold mb-4">
                    {{ $store.state.company.company.company_name }}
                </h2>
                <p class="text-center mb-4 text-gray-500">
                    {{ $store.state.company.company.sphere }}
                </p>
                <p class="text-gray-500">Нур-Султан, Алматы</p>
                <div class="mt-4 w-full">
                    <main-button :link="'company/edit'" fullwidth purple
                        >Редактировать</main-button
                    >
                </div>
            </div>
            <div class="company-socials px-6 text-gray-500">
                <p class="font-bold text-sm pb-4">Связаться</p>
                <div class="flex items-center justify-start pb-4">
                    <unicon name="users-alt" class="mr-2" />
                    <a href="tel:+777777">7777777</a>
                </div>
            </div>
            <div class="company-vacancies px-6 mt-4 text-gray-500">
                <p class="font-bold text-sm mb-4">Вакансии</p>
                <div class="flex items-center justify-start mb-4">
                    <a href="sdfsdf">7 открытых вакансии</a>
                    <pre></pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import mainButton from "../utils/mainButton.vue";
export default {
    props: { company: Object },
    components: { mainButton },
};
</script>

<style lang="scss" scoped>
.company-aside {
    background: #fafafa;
    border-radius: 10px;
    width: 300px;
    min-width: 300px;
    overflow: hidden;
}
.company-header {
    background: #c4d1d9;
    height: 85px;
}
.el-avatar {
    background: #7734fc;
    transform: translate(110px, -50%);
}
</style>
