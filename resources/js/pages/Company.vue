<template>
    <div class="flex p-5">
        <CompanyAside :company="company" />
        <CompanyInfo :company="company" />
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import CompanyAside from "../components/company/CompanyAside.vue";
import CompanyInfo from "../components/company/CompanyInfo.vue";
import { useStore } from "vuex";
const store = useStore();
const company = computed(() => store.state.company.company);

onMounted(store.dispatch("company/getCompanyInfo"));
</script>

<style></style>
