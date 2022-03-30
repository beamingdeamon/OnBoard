<template>
    <!-- <div>Справочник</div> -->
    <div class="flex gap-5 p-2">
        <div class="manual grid grid-cols-1 w-1/4 gap-3 mt-5">
            <div
                v-for="manual in manuals"
                :key="manual.id"
                :to="manual.link"
                class="manual-link shadow border p-3 font-semibold rounded-lg hover:shadow-md transition-all duration-200"
                :class="current === manual.link ? 'active' : ''"
                @click="changeCurrent(manual.link)"
            >
                {{ manual.name }}
                <unicon
                    name="arrow-right"
                    :fill="current === manual.link ? '#7734fc' : ''"
                ></unicon>
            </div>
        </div>
        <div class="manual-content shadow border p-3 mt-5 rounded-lg w-3/4">
            <el-button
                :icon="CirclePlus"
                color="#FF6854"
                @click="addManualModal = true"
                style="color: #fff"
                >Добавить</el-button
            >

            <vue-good-table
                :columns="columns"
                :rows="content"
                :line-numbers="false"
                :search-options="{
                    enabled: false,
                }"
                :pagination-options="{
                    enabled: true,
                    mode: 'pages',
                    rowsPerPageLabel: 'Записей на странице',
                    perPageDropdown: [20, 40, 50],
                    nextLabel: '',
                    prevLabel: '',
                    pageLabel: '',
                    ofLabel: 'из',
                }"
                styleClass="vgt-table bordered lll mt-3"
            >
                <template v-slot:emptystate>Пусто</template>

                <template v-slot:table-row="props">
                    <div
                        v-if="props.column.field == 'before'"
                        class="edit-buttons"
                    >
                        <use-edit
                            :id="props.row.id"
                            :name="props.row.name"
                            :link="current"
                        />
                    </div>

                    <div v-else>
                        {{ props.formattedRow[props.column.field] }}
                    </div>
                </template>
            </vue-good-table>
        </div>
    </div>
    <modal
        v-if="addManualModal"
        :title="`Добавить в справочник`"
        @close-modal="addManualModal = false"
    >
        <template v-slot:body>
            <main-input
                id="name"
                name="name"
                type="text"
                labelText="Название"
                placeholder="Название"
                v-model="name"
                fullwidth
            />
            <div class="flex gap-2">
                <el-button
                    color="#FF6854"
                    @click="addNewItems"
                    style="color: #fff"
                    >Сохранить</el-button
                >
                <el-button
                    color="#DBE4EB"
                    @click="addManualModal = false"
                    style="color: #3a3d40"
                    >Отменить</el-button
                >
            </div>
        </template>
    </modal>
</template>

<script>
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
import { CirclePlus } from "@element-plus/icons-vue";
import "vue-good-table-next/dist/vue-good-table-next.css";
import { VueGoodTable } from "vue-good-table-next";
import useEdit from "../../composables/useEdit.vue";
import MainButton from "../../components/utils/mainButton.vue";
import Modal from "../../composables/Modal.vue";
import MainInput from "../../components/utils/MainInput.vue";
export default {
    name: "manual",
    components: {
        VueGoodTable,
        useEdit,
        Modal,
        MainButton,
        MainInput,
        CirclePlus,
    },
    setup() {
        const addManualModal = ref(false);
        const current = ref("directions");
        const name = ref("");
        const store = useStore();
        const data = computed(() => store.state.manuals.all);
        const content = computed(() => store.state.manuals.list);
        const columns = ref([
            {
                label: "Название",
                field: "name",
            },
            {
                label: "Действие",
                field: "before",
                width: "150px",
                sortable: false,
            },
        ]);
        onMounted(() => {
            store.dispatch("manuals/getAllManuals");
            store.dispatch("manuals/getList", current.value);
        });
        const changeCurrent = (link) => {
            current.value = link;
            store.dispatch("manuals/getList", link);
            name.value = "";
        };
        const addNewItems = () => {
            store.dispatch("manuals/addNewItem", {
                link: current.value,
                name: name.value,
            });
            name.value = "";
            addManualModal.value = false;
        };
        console.log(data);
        return {
            name,
            manuals: data,
            addManualModal,
            current,
            changeCurrent,
            addNewItems,
            content,
            CirclePlus,
            columns,
        };
    },
};
</script>

<style lang="scss">
.manual {
    &-link {
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        &.active {
            background: rgba(119, 52, 252, 0.15);
            color: #7734fc;
            & .unicon {
                transform: translateX(3px);
                transition: transform 0.1s ease-in-out;
            }
        }
        .unicon {
            transition: transform 0.1s ease-in-out;
        }
        &:hover {
            .unicon {
                transform: translateX(3px);
                transition: transform 0.1s ease-in-out;
            }
        }
    }
}
.edit-buttons {
    position: relative;
}
.vgt-table thead th,
.vgt-table th.vgt-checkbox-col {
    background: #dbe4eb;
    font-weight: 400;
    color: #191b1d;
    font-size: 14px;
}
.vgt-table th.line-numbers,
.vgt-wrap__footer {
    background: #fff;
}
.vgt-responsive {
    border-radius: 10px 10px 0px 0;
    overflow: unset;
}
.vgt-table thead tr:nth-child(2) {
    display: none;
}
.vgt-table thead tr:nth-child(1) th {
    background: #dbe4eb;
}
.vgt-wrap__footer {
    border-top: none;
    border: none;
    padding: 10px;
}
.vgt-inner-wrap {
    box-shadow: none;
}
.vgt-table th.sortable button:after {
    border-bottom: 5px solid #191b1d;
}
.vgt-table th.sortable button:before {
    border-top: 5px solid #191b1d;
}
.vgt-table thead th.sorting-desc button:before {
    border-top: 5px solid #7734fc;
}
.vgt-table thead th.sorting-asc button:after {
    border-bottom: 5px solid #7734fc;
}
table.vgt-table td {
    color: #191b1d;
    font-size: 13px;
}
.vgt-wrap__footer .footer__row-count__label {
    color: #191b1d;
    font-size: 12px;
}
.vgt-wrap__footer .footer__row-count__select {
    font-size: 12px;
    color: #191b1d;
}
.vgt-wrap__footer .footer__row-count::after {
    right: 6px;
    border-top: 4px solid #606266;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    margin-top: 0;
}
.vgt-wrap__footer .footer__navigation__page-info__current-entry {
    font-size: 13px;
    border: 1px solid #c4d1d9;
    box-sizing: border-box;
    border-radius: 3px;
    width: 42px;
    height: 35px;
    font-weight: 400;
    color: #191b1d;
}
.page-info__label {
    font-size: 13px;
    color: #191b1d;
}
.vgt-wrap__footer .footer__navigation > button:first-of-type {
    border-radius: 3px 0px 0px 3px;
}
.vgt-wrap__footer .footer__navigation > button:last-of-type {
    border-radius: 0px 3px 3px 0px;
}
.vgt-wrap__footer .footer__navigation__page-btn {
    background: #7f43ff;
    width: 36px;
    height: 36px;
}
.vgt-wrap__footer .footer__navigation__page-btn.disabled,
.vgt-wrap__footer .footer__navigation__page-btn.disabled:hover {
    background: #f0f4f7;
}
.vgt-wrap__footer .footer__navigation__page-btn .chevron.left::after {
    border-right: 6px solid #fff;
}
.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.left:after,
.vgt-wrap__footer
    .footer__navigation__page-btn.disabled:hover
    .chevron.left:after {
    border-right: 6px solid #c4d1d9;
}
.vgt-wrap__footer .footer__navigation__page-btn .chevron.right::after {
    border-left: 6px solid #fff;
}
.vgt-wrap__footer .footer__navigation__page-btn.disabled .chevron.right:after,
.vgt-wrap__footer
    .footer__navigation__page-btn.disabled:hover
    .chevron.right:after {
    border-left: 6px solid #c4d1d9;
}
.vgt-wrap__footer .footer__navigation > button:first-of-type {
    margin-right: 0;
}
.edit-buttons {
    display: flex;
    justify-content: center;
}
</style>
