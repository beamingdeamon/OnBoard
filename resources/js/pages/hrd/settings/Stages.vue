<template>
    <div class="page-content">
        <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
        >
            <el-tab-pane lazy label="Этапы отбора" name="setting/stages">
                <stages-content />
            </el-tab-pane>
            <el-tab-pane lazy label="Шаблоны писем" name="company"
                ><email-content
            /></el-tab-pane>
            <el-tab-pane
                lazy
                label="Структура компании"
                name="setting/structure"
                ><structure-content />
            </el-tab-pane>
            <el-tab-pane lazy label="Должности" name="setting/positions"
                ><positions-content />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script setup>
import StagesContent from "../../../components/company/settings/stages/StagesContent.vue";
import StructureContent from "../../../components/company/settings/stages/StructureContent.vue";
import EmailContent from "../../../components/company/settings/stages/EmailContent.vue";
import PositionsContent from "../../../components/company/settings/stages/PositionsContent.vue";
import { useStore } from "vuex";
const store = useStore();
const activeName = store.state.stages.activeName;
const handleClick = (tab, event) => {
    console.log(tab.props.name);
};
</script>

<style lang="scss">
.user-add {
}
.user-card {
    h4 {
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #191b1d;
        margin-bottom: 4px;
    }
    p {
        font-weight: 500;
        font-size: 13px;
        line-height: 16px;
        color: #6d767e;
    }
    .el-avatar {
        margin-right: 12px;
    }
}
.addUser {
    .vgt-responsive {
        border-radius: 0;
    }
    .vgt-selection-info-row {
        display: none;
    }
    .vgt-table thead th,
    .vgt-table th.vgt-checkbox-col {
        background: transparent;
    }
    .vgt-table.bordered td,
    .vgt-table.bordered th {
        border: none;
    }
    .vgt-table.bordered th {
        padding-left: 20px;
    }
    .vgt-table.bordered tr {
        border-top: 1px solid #dcdfe6;
        border-bottom: 1px solid #dcdfe6;
    }

    .vgt-responsive thead {
        display: none !important;
    }
    .vgt-wrap {
        width: 100%;
    }
    .el-dialog__body {
        padding-left: 0;
        padding-right: 0;
    }
}
.stage-card {
    height: 55px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 21px;
    border-radius: 10px;
    background: #fff;
    width: 241px;
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
}
.el-tabs__header {
    margin-bottom: 0;
}
.tab-wrap {
    height: 100vh;
    display: flex;
}
.tab-navigate {
    width: 320px;
    min-width: 320px;
    height: 100%;
    margin-top: 20px;
    padding-right: 20px;
}
.tab-content {
    height: 100%;
    width: 100%;
    border-left: 1px solid #dbe4eb;
    & .tab-header {
        width: 100%;
        padding: 21px 20px;
        background: #f0f4f7;
        display: flex;
        align-items: center;
        h3 {
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #191b1d;
            margin-right: 15px;
        }
    }
    & .tab-body {
        padding: 30px 20px;
        & .title {
            font-weight: 700;
            font-size: 16px;
            line-height: 19px;
            color: #6d767e;
            margin-bottom: 15px;
        }
    }
}
.stages {
    margin-top: 20px;
}
.stage {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    cursor: pointer;
    &-num {
        background: #f0f4f7;
        border-radius: 8px;
        width: 23px;
        height: 24px;
        min-width: 23px;
        min-height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 12px;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
    }
    &-name {
        display: flex;
        align-items: center;
        background: transparent;
        border: 1px solid transparent;
        border-radius: 10px;
        width: 100%;
        padding: 16px 19px;
        min-height: 60px;
        &.active {
            background: rgba(119, 52, 252, 0.08);
            border: 1px solid #7734fc;
        }
        & .color {
            width: 16px;
            height: 16px;
            min-width: 16px;
            min-height: 16px;
            margin-right: 16px;
            background: #dbe4eb;
            border-radius: 50%;
        }
        & .title {
            font-weight: 700;
            font-size: 13px;
            line-height: 16px;
            color: #191b1d;
        }
        & .subtitle {
            font-weight: 400;
            font-size: 12px;
            line-height: 15px;
            color: #6d767e;
        }
    }
    &:hover {
        .stage-name {
            border: 1px solid #7734fc;
        }
    }
}
</style>
