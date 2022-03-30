<template>
    <div class="p-5">
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
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
            styleClass="vgt-table bordered lll"
        >
            <template v-slot:emptystate>Пусто</template>
            <template v-slot:table-row="props">
                <div v-if="props.column.field == 'fullname'">
                    {{ props.row.user.name }} {{ props.row.user.surname }}
                </div>
                <div
                    v-if="props.column.field == 'is_verified'"
                    class="text-center"
                >
                    <input
                        type="checkbox"
                        :checked="props.row.is_verified"
                        @change="
                            (event) =>
                                approve(
                                    props.row.company_name,
                                    props.row.id,
                                    event
                                )
                        "
                    />
                </div>

                <div v-else>
                    {{ props.formattedRow[props.column.field] }}
                </div>
                <modal
                    v-if="approveModal"
                    :title="`Одобрить заявку`"
                    @close-modal="approveModal = false"
                >
                    <template v-slot:body>
                        <div class="sure">
                            <unicon name="question-circle" fill="#F4B740" />
                            Вы действительно хотите одобрить компанию:&nbsp;
                            <strong>{{ currentCompany }}</strong
                            >?
                        </div>
                        <div class="flex gap-3">
                            <main-button orange @click="approveItem"
                                >Одобрить</main-button
                            >
                            <main-button @click="approveModal = false"
                                >Отменить</main-button
                            >
                        </div>
                    </template>
                </modal>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import "vue-good-table-next/dist/vue-good-table-next.css";
import { VueGoodTable } from "vue-good-table-next";
import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import MainInput from "../../components/utils/MainInput.vue";
import useEdit from "../../composables/useEdit.vue";
import { useStore } from "vuex";
import {
    approveItem,
    approve,
    approveModal,
    currentId,
    currentCompany,
    currentState,
} from "../../hooks/useApprove";
import Modal from "../../composables/Modal.vue";
import MainButton from "../../components/utils/mainButton.vue";
export default {
    name: "admin-users",
    components: {
        VueGoodTable,
        VueMultiselect,
        MainInput,
        useEdit,
        Modal,
        MainButton,
    },
    setup() {
        const columns = ref([
            {
                label: "ФИО",
                field: "fullname",
                filterOptions: {
                    styleClass: "class1", // class to be added to the parent th element
                    enabled: true, // enable filter for this column
                    placeholder: "All",
                    filterValue: "", // placeholder for filter input
                    // initial populated value for this filter
                    filterDropdownItems: ["Jane", "Susan"], // dropdown (with selected values) instead of text input
                    // filterFn: columnFilterFn, //custom filter function that
                    trigger: "enter", //only trigger on enter not on keyup
                },
            },
            {
                label: "Email",
                field: "user.email",
            },
            {
                label: "Телефон",
                field: "user.phone",
            },
            {
                label: "Название компании",
                field: "company_name",
            },
            {
                label: "Численность сотрудников",
                field: "employee_num",
            },
            {
                label: "Одобрено",
                field: "is_verified",
            },
            // {
            //     label: "Действие",
            //     field: "before",
            //     width: "114px",
            //     sortable: false,
            // },
        ]);
        const store = useStore();

        const data = computed(() => store.state.orders.all);
        onMounted(store.dispatch("orders/getAllOrders"));

        return {
            columns,
            rows: data,
            approveItem,
            approve,
            approveModal,
            currentId,
            currentCompany,
            currentState,
        };
    },
};
</script>

<style lang="scss">
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
