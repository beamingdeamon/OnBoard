<!-- CustomInput.vue -->
<template>
    <button
        v-if="!link"
        :class="{
            orange: orange,
            purple: purple,
            'w-full text-center': fullwidth,
        }"
    >
        <unicon v-if="icon" :name="icon" :fill="iconColor" />
        <slot />
    </button>
    <router-link
        v-if="link"
        :to="link"
        :class="{
            orange: orange,
            purple: purple,
            'w-full text-center': fullwidth,
        }"
    >
        <unicon v-if="icon" :name="icon" :fill="iconColor" />
        <slot />
    </router-link>
</template>

<script>
export default {
    name: "main-button",
    props: {
        icon: String,
        iconColor: String,
        orange: Boolean,
        purple: Boolean,
        fullwidth: Boolean,
        link: String,
    },
};
</script>
<style lang="scss" scoped>
button,
a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #dbe4eb;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 12.5px;
    color: #191b1d;
    .unicon {
        margin-right: 5px;
    }
    &.orange {
        background: #ff6854;
        color: #fff;
    }
    &.purple {
        background: #7734fc;
        color: #fff;
    }
}
</style>
