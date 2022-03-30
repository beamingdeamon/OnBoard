<template>
    <div class="menu">
        <menu-item text="О компании" link="company" icon="building" />
        <menu-item text="Сотрудники" link="employees" icon="users-alt" />
        <!-- <menu-item text="База кандидатов" link="users" icon="user-square" /> -->
        <!-- <menu-item text="Отчёты" link="users" icon="chart" /> -->
        <menu-item text="Настройки" link="setting/stages" icon="setting" />
        <!-- <menu-item text="Хостинг" link="users" icon="browser" /> -->
    </div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";
export default {
    name: "hrd-menu",
    components: { MenuItem },
};
</script>

<style></style>
