<!-- CustomInput.vue -->
<template>
    <label :class="fullwidth ? 'w-full' : ''">
        {{ labelText }}

        <input
            :type="type"
            :name="name"
            v-model="modelValue"
            :placeholder="placeholder"
            @change="$emit('update:modelValue', $event.target.value)"
            @input="$emit('update:modelValue', $event.target.value)"
            :id="id"
        />
    </label>
</template>

<script>
export default {
    name: "main-input",
    props: {
        id: String,
        labelText: String,
        modelValue: String,
        placeholder: String,
        name: String,
        type: String,
        fullwidth: Boolean,
    },
    setup(props) {},
};
</script>
<style lang="scss" scoped>
label {
    font-size: 13px;
    line-height: 15px;
    display: inline-flex;
    flex-direction: column;
    color: #191b1d;
    margin-bottom: 25px;
}
input {
    margin-top: 5px;
    background: #ffffff;
    border: 1.5px solid #c4d1d9;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 9px 10px;
    font-size: 13px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #191b1d;
    &:focus {
        outline: none;
        border: 1.5px solid #6d767e;
    }
    &::placeholder {
        color: #c4d1d9;
    }
}
</style>
