<template>
    <div class="statistic">
        <div class="statistic-icon">
            <unicon :name="icon" fill="#3A3D40" />
        </div>
        <div>
            <h4 class="statistic-title">{{ title }}</h4>
            <p class="statistic-number">{{ number }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
    title: String,
    icon: String,
    number: Number,
});
</script>

<style scoped lang="scss">
.statistic {
    padding: 15px 20px;
    background: #ffffff;
    border: 1px solid #c4d1d9;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 300px;
    &-icon {
        height: 44px;
        width: 44px;
        min-width: 44px;
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f0f4f7;
        border-radius: 10px;
        margin-right: 15px;
    }
    &-title {
        font-weight: 500;
        font-size: 15px;
        line-height: 15px;
        color: #191b1d;
    }
    &-number {
        font-weight: 700;
        font-size: 17px;
        line-height: 17px;
        color: #7734fc;
        margin-top: 7px;
    }
}
</style>
