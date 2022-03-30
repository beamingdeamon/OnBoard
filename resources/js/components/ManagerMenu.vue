<template>
    <div class="menu">
        <menu-item text="Главная" link="manager" icon="home" />
        <menu-item text="Сотрудники" link="m/employees" icon="users-alt" />
        <menu-item text="Заявки" link="m/applications" icon="file-check-alt" />
        <menu-item text="Должности" link="m/positions" icon="game-structure" />
        <!-- <menu-item text="База кандидатов" link="users" icon="user-square" /> -->
        <!-- <menu-item text="Отчёты" link="users" icon="chart" /> -->
        <!-- <menu-item text="Настройки" link="setting/stages" icon="setting" /> -->
        <!-- <menu-item text="Хостинг" link="users" icon="browser" /> -->
    </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";
export default {
    name: "manager-menu",
    components: { MenuItem },
};
</script>

<style></style>
