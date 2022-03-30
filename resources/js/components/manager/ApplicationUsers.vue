<template>
    <div class="stages flex pt-3">
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list1"
                group="people"
                animation="200"
                @change="log"
                @end="dd"
                data-id="item1"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list2"
                animation="200"
                group="people"
                @change="log"
                @end="dd"
                data-id="item2"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list1"
                group="people"
                animation="200"
                @change="log"
                @end="dd"
                data-id="item1"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list2"
                animation="200"
                group="people"
                @change="log"
                @end="dd"
                data-id="item2"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list1"
                group="people"
                animation="200"
                @change="log"
                @end="dd"
                data-id="item1"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list2"
                animation="200"
                group="people"
                @change="log"
                @end="dd"
                data-id="item2"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list1"
                group="people"
                animation="200"
                @change="log"
                @end="dd"
                data-id="item1"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list2"
                animation="200"
                group="people"
                @change="log"
                @end="dd"
                data-id="item2"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list1"
                group="people"
                animation="200"
                @change="log"
                @end="dd"
                data-id="item1"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />
        <div class="stage-item">
            <div class="stage-card flex bg-red-200">
                <div>
                    <p class="titles">asd</p>
                    <p class="subtitle">asd</p>
                </div>
                <div class="count">8</div>
            </div>
            <draggable
                class="list-group"
                :list="list2"
                animation="200"
                group="people"
                @change="log"
                @end="dd"
                data-id="item2"
                itemKey="name"
            >
                <template #item="{ element, index }">
                    <div
                        class="list-group-item w-full border-gray-500 border-solid border-2 bg-white"
                    >
                        <div class="name">
                            <div class="flex items-center">
                                <el-avatar class="mr-2">EL</el-avatar>
                                <p class="font-bold text-sm">
                                    {{ element.name }} {{ index }}
                                </p>
                            </div>

                            <span class="text-[13px] text-gray-500"
                                >Опыт: 8 лет</span
                            >
                        </div>
                        <el-divider />
                        <div class="comment flex items-center">
                            <unicon name="comment" size="2" class="mr-0.5" />8
                        </div>
                    </div>
                </template>
            </draggable>
        </div>
        <el-divider direction="vertical" class="!h-full" />

        <pre>{{ list1 }}</pre>
        <pre>{{ list2 }}</pre>
    </div>
</template>

<script setup>
import { ref } from "vue";
import draggable from "vuedraggable";
const list1 = ref([
    { name: "John", id: 1 },
    { name: "Joao", id: 2 },
    { name: "Jean", id: 3 },
    { name: "Gerard", id: 4 },
]);
const list2 = ref([
    { name: "Juan", id: 5 },
    { name: "Edgard", id: 6 },
    { name: "Johnson", id: 7 },
]);
const log = (evt) => {
    window.console.log(evt);
};
const dd = (ee) => {
    console.log(ee.from.getAttribute("data-id"));
    console.log(ee.to.getAttribute("data-id"));
};
console.log("asdad");
</script>

<style lang="scss" scoped>
.stages {
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: auto;
    & .stage-item {
        width: 250px;
        min-width: 250px;
        padding: 10px;

        .list-group {
            width: 100%;
            height: 100%;
            &-item {
                background: #ffffff;
                border: 1px solid #c4d1d9;
                box-sizing: border-box;
                border-radius: 10px;
                margin-bottom: 10px;
                .el-divider--horizontal {
                    margin: 30px 0px 7px;
                }
                .name {
                    padding: 17px 12px 0;
                    .el-avatar {
                        width: 37px;
                        height: 37px;
                        min-height: 37px;
                        min-width: 37px;
                    }
                }
                .comment {
                    font-size: 11px;
                    line-height: 13px;
                    color: #3a3d40;
                    padding: 0px 12px 7px;
                }
            }
        }
    }
}
.el-divider--vertical {
    margin: 0;
}
.stage-card {
    height: 55px;
    display: flex;
    align-items: center;
    padding: 5px 21px;
    border-radius: 10px;
    background: #dbe4eb;
    margin-bottom: 13px;
    .titles {
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        color: #191b1d;
    }
    .subtitle {
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #6d767e;
    }
    .count {
        background: rgba(109, 118, 126, 0.2);
        border-radius: 8px;
        padding: 4px 8px;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        color: #191b1d;
        margin-left: 8px;
    }
}
</style>
