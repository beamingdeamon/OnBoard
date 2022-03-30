<template>
    <div class="w-full">
        <h2 class="text-lg font-bold mb-2 pl-5 pt-3">
            {{ company.company_name }}
        </h2>
        <el-tabs
            v-model="activeName"
            class="demo-tabs pl-5"
            @tab-click="handleClick"
        >
            <el-tab-pane label="О компании" name="company">
                <div
                    class="mt-2"
                    v-html="$store.state.company.company.description"
                ></div>
            </el-tab-pane>
            <el-tab-pane label="Адреса" name="address">
                <h2 class="text-lg font-bold mb-2">Адреса офисов</h2>
                <div class="divide-y w-5/6 text-sm">
                    <div class="grid grid-cols-4 py-5">
                        <p>г. Нур-Султан</p>
                        <p class="font-bold">Мангилик ел 19</p>
                        <p class="text-green-500">Открыто</p>
                        <div class="text-gray-500">
                            <p>пн-пт 9:00 - 18:00</p>
                            <p>пн-пт 9:00 - 18:00</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 py-5">
                        <p>г. Нур-Султан</p>
                        <p class="font-bold">Мангилик ел 19</p>
                        <p class="text-green-500">Открыто</p>
                        <div class="text-gray-500">
                            <p>пн-пт 9:00 - 18:00</p>
                            <p>пн-пт 9:00 - 18:00</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 py-5">
                        <p>г. Нур-Султан</p>
                        <p class="font-bold">Мангилик ел 19</p>
                        <p class="text-green-500">Открыто</p>
                        <div class="text-gray-500">
                            <p>пн-пт 9:00 - 18:00</p>
                            <p>пн-пт 9:00 - 18:00</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 py-5">
                        <p>г. Нур-Султан</p>
                        <p class="font-bold">Мангилик ел 19</p>
                        <p class="text-green-500">Открыто</p>
                        <div class="text-gray-500">
                            <p>пн-пт 9:00 - 18:00</p>
                            <p>пн-пт 9:00 - 18:00</p>
                        </div>
                    </div>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, defineProps } from "vue";
import Node from "element-plus/es/components/tree/src/model/node";

const props = defineProps({
    company: Object,
});

const activeName = ref("company");

const handleClick = (tab, event) => {
    console.log(tab, event);
};
</script>

<style lang="scss"></style>
