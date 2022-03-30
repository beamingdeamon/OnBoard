<template>
    <Modal :close="closeModal">
        <div class="modal">
            <div class="modal-header" v-if="title">
                {{ title }}
                <unicon
                    name="times"
                    @click="closeModal"
                    hover-fill="#191b1d"
                ></unicon>
            </div>
            <slot name="body"> </slot>
        </div>
    </Modal>
</template>

<script>
export default {
    props: {
        isShows: Boolean,
        title: String,
    },
    name: "modal",
    setup(props, context) {
        function closeModal() {
            context.emit("closeModal");
        }
        return {
            closeModal,
        };
    },
};
</script>

<style lang="scss" scoped>
.modal {
    min-width: 535px;
    padding: 25px 26px 30px;
    box-sizing: border-box;
    background-color: #fff;
    font-size: 20px;
    border-radius: 4px;
    &-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #191b1d;
        font-weight: 700;
        font-size: 16px;
        margin-bottom: 15px;
        .unicon {
            cursor: pointer;
        }
    }
}
</style>
