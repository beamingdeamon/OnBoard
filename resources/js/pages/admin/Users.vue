<template>
    <!-- <input type="text" v-model="searchTerm" /> -->
    <!-- <label class="typo__label">Select with search</label>
    <VueMultiselect
        v-model="selected"
        deselect-label="Can't remove this value"
        track-by="name"
        label="name"
        id="name"
        placeholder="Select one"
        :options="options"
        :searchable="false"
        :allow-empty="false"
        @select="changeFilter"
    >
        <template v-slot:singleLabel="{ option }">{{ option.name }}</template>
    </VueMultiselect> -->
    <div class="p-5">
        <vue-good-table
            :columns="columns"
            :rows="rows"
            :line-numbers="true"
            :search-options="{
                enabled: true,
                externalQuery: searchTerm,
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
                    {{ props.row.name }} {{ props.row.surname }}
                </div>

                <!-- <div v-if="props.column.field == 'before'" class="edit-buttons">
                <router-link
                    class="square button-show"
                    title="Подробнее"
                    :to="`/admin/users/show/${props.row.id}`"
                >
                    <unicon name="pen"></unicon>
                </router-link>

                <router-link
                    class="square button-show"
                    title="Сменить пароль"
                    :to="`/admin/users/change-password/${props.row.id}`"
                    ><unicon name="trash-alt"></unicon
                ></router-link>
            </div> -->

                <div v-else>
                    {{ props.formattedRow[props.column.field] }}
                </div>
            </template>
        </vue-good-table>
    </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import VueMultiselect from "vue-multiselect";
import "vue-multiselect/dist/vue-multiselect.css";
import useAxiosGET from "../../composables/useAxiosGET";
export default {
    name: "admin-users",
    components: {
        VueMultiselect,
    },
    setup() {
        const store = useStore();
        const searchTerm = ref("");
        const users = ref([]);
        const selected = ref(null);

        const options = ref([
            { name: "All", language: "" },
            { name: "Jane", language: "Jane" },
            { name: "Sinatra", language: "Ruby" },
            { name: "Laravel", language: "PHP", $isDisabled: true },
            { name: "Phoenix", language: "Elixir" },
        ]);
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
                field: "email",
            },
            {
                label: "Телефон",
                field: "phone",
            },
            {
                label: "Структура",
                field: "department",
            },
            {
                label: "Должность",
                field: "position",
            },
        ]);

        const changeFilter = (newFilter, field) => {
            let found = columns.value.find((c) => {
                return c.field == field;
            });
            if (found) {
                if (found.hasOwnProperty("filterOptions")) {
                    if (found.filterOptions.hasOwnProperty("filterValue")) {
                        found.filterOptions.filterValue = newFilter.language;
                    } else {
                        alert(
                            `Column '${field}' does not have filterValue property!`
                        );
                    }
                } else {
                    alert(
                        `Column '${field}' does not have filtering configured!`
                    );
                }
            } else {
                alert(`Field '${field}' does not exist!`);
            }
        };
        // const { data, getData, errors } = useAxiosGET("/api/v1/admin/users");

        // onMounted(getData);
        const data = computed(() => store.state.users.all);
        onMounted(store.dispatch("users/getAllUsers"));

        return {
            columns,
            rows: data,
            searchTerm,
            changeFilter,
            selected,
            options,
        };
    },
};
</script>

<style lang="scss"></style>
