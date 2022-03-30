<template>
    <router-link
        :to="{ name: link }"
        class="menu-item"
        :class="[{ 'router-link-active active': $route.name.includes(link) }]"
        @click="aaa"
    >
        <unicon
            :name="`${icon}`"
            :fill="$route.name === link ? '#FF6854' : '#6D767E'"
        ></unicon>
        <span v-if="!$store.state.menu.isCollapsed">{{ text }}</span>
    </router-link>
</template>

<script>
import { ref } from "vue";
// import { useMainStore } from "../stores/main";
export default {
    name: "menu-item",
    props: ["text", "link", "icon"],
    setup(props) {
        // const store = useMainStore();
        const text = ref(props.text);
        const link = ref(props.link);
        const icon = ref(props.icon);
        const aaa = () => {
            // store.name = text;
            // store.icon = icon;
        };
        return { text, link, icon, aaa };
    },
};
</script>

<style scoped lang="scss">
.menu-item {
    background: #fafafa;
    border-radius: 12px;
    padding: 13px 17px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    color: #6d767e;
    font-size: 14px;
    &:hover {
        background: rgba(255, 104, 84, 0.05);
    }
    .unicon {
        margin-right: 10px;
    }
    &.active {
        background: rgba(255, 104, 84, 0.15);
        color: #ff6854;
        &:hover {
            background: rgba(255, 104, 84, 0.15);
        }
    }
}
</style>
