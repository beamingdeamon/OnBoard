<template>
    <div class="menu">
        <menu-item text="Пользователи" link="admin/users" icon="users-alt" />
        <menu-item text="Заявки" link="admin/orders" icon="building" />
        <menu-item text="Справочник" link="admin/manual" icon="book-alt" />
    </div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";
export default {
    name: "admin-menu",
    components: { MenuItem },
};
</script>

<style></style>
