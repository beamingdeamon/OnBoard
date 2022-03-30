<template>
    <Popper placement="bottom" hover offsetDistance="1">
        <unicon class="row-edit" name="ellipsis-h"></unicon>
        <template #content>
            <div
                @click="editModal = true"
                class="editable-item py-[10px] px-[13px] rounded-t-[6px]"
            >
                <unicon name="pen" fill="#191B1D"></unicon
                ><span>Редактировать</span>
            </div>
            <div
                @click="deleteModal = true"
                class="editable-item py-[10px] px-[13px] rounded-b-[6px]"
            >
                <unicon name="trash-alt" fill=" #FF2727"></unicon
                ><span>Удалить</span>
            </div>
        </template>
    </Popper>
    <modal
        v-if="editModal"
        :title="`Редактирование`"
        @close-modal="editModal = false"
    >
        <template v-slot:body>
            <main-input
                id="name"
                name="name"
                type="text"
                labelText="Название"
                placeholder="Название"
                v-model="currentName"
                :modelValue="currentName"
                fullwidth
            />
            <div class="flex gap-3">
                <el-button
                    color="#FF6854"
                    @click="renameItem"
                    style="color: #fff"
                    >Сохранить</el-button
                >
                <el-button
                    color="#DBE4EB"
                    @click="editModal = false"
                    style="color: #3a3d40"
                    >Отменить</el-button
                >
            </div>
        </template>
    </modal>
    <modal
        v-if="deleteModal"
        :title="`Удалить из справочника`"
        @close-modal="deleteModal = false"
    >
        <template v-slot:body>
            <div class="sure">
                <unicon name="question-circle" fill="#F4B740" />
                Вы действительно хотите удалить {{ name }}?
            </div>
            <div class="flex gap-3">
                <el-button
                    color="#FF6854"
                    @click="deleteItem"
                    style="color: #fff"
                    >Удалить</el-button
                >
                <el-button
                    color="#DBE4EB"
                    @click="deleteModal = false"
                    style="color: #3a3d40"
                    >Отменить</el-button
                >
            </div>
        </template>
    </modal>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import Popper from "vue3-popper";
import Modal from "./Modal.vue";
import MainInput from "../components/utils/MainInput.vue";
import MainButton from "../components/utils/mainButton.vue";
export default {
    name: "use-edit",
    components: { Popper, Modal, MainInput, MainButton },
    props: {
        id: Number,
        name: String,
        link: String,
    },
    setup(props) {
        console.log("p", props);
        const editModal = ref(false);
        const deleteModal = ref(false);
        const currentName = ref(props.name);
        const store = useStore();
        const deleteItem = () => {
            store.dispatch("manuals/deleteItem", {
                link: props.link,
                id: props.id,
            });
            deleteModal.value = false;
        };
        const renameItem = () => {
            store.dispatch("manuals/renameItem", {
                link: props.link,
                id: props.id,
                name: currentName.value,
            });
            editModal.value = false;
        };

        return { editModal, deleteModal, deleteItem, currentName, renameItem };
    },
};
</script>

<style lang="scss">
:root {
    --popper-theme-background-color: #fff;
    --popper-theme-background-color-hover: #fff;
    --popper-theme-text-color: #333;
    --popper-theme-border-width: 0px;
    --popper-theme-border-style: solid;
    --popper-theme-border-radius: 6px;
    --popper-theme-padding: 0px 0;
    --popper-theme-box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.25);
}

.editable {
    &-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        // padding: 7px 13px;
        span {
            margin-left: 5px;
        }
        &:hover {
            background: rgb(243, 242, 242);
        }
    }
}
.row-edit {
    background: #f0f4f7;
    border-radius: 4px;
    padding: 2px;
    cursor: pointer;
}
.edit-buttons .inline-block {
    border: none !important;
    margin: unset !important;
}
.sure {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #191b1d;
    margin-bottom: 40px;
    margin-top: 40px;
    .unicon {
        margin-right: 11px;
    }
}
</style>
