<template>
    <div class="block">
        <h3 class="title">推荐专家</h3>
        <Divider />
        <List item-layout="vertical">
            <ListItem v-for="k of 10" :key="k">
                <Row :gutter="10">
                    <Col>
                        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="38" />
                    </Col>
                    <Col flex="1">
                        <Row class="cell" justify="space-between">
                            <Col><router-link class="name" to="/">用户名</router-link></Col>
                            <Col><Button type="warning" size="small" ghost>向他求助</Button></Col>
                        </Row>
                        <div class="cell autowrap">
                            <router-link to="/" class="tag tag--primary">智能合约</router-link>
                            <router-link to="/" class="tag tag--primary">智能合约</router-link>
                        </div>
                        <div class="cell metadata">
                            <span>150 采纳</span>
                            <Divider type="vertical" />
                            <span>150 回答</span>
                        </div>
                    </Col>
                </Row>
            </ListItem>
        </List>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import colors from "@/theme.module.less"

const props = defineProps({
    
})

const state = reactive({
    colors
})

</script>

<style lang="less" scoped>
.block {
    background: #fff;
    overflow: hidden;

    .title {
        font-size: 15px;
        font-weight: 600;
        color: @text-dark-color;
        display: flex;
        margin: 15px;
        padding: 0;
        justify-content: space-between;
    }

    > div.ivu-divider {
        margin: 10px 0;
    }

    .ivu-list {
        margin: 5px 15px 15px 15px;

        .ivu-list-item {
            padding: 10px 0;
        }

        a.name {
            color: @text-dark-color;
            &:hover {
                color: @primary-color;
            }
        }

        .cell {
            margin-bottom: 6px;
            &.autowrap {
                white-space: pre-wrap;
            }

            &:not(.autowrap) {
                margin-bottom: 4px;
            }

            &.metadata > span {
                color: @text-color-third;
            }
        }

        .tag.tag--primary {
            display: inline-block;
            line-height: 24px;
            font-size: 13px;
            color: fade(@primary-color, 85%);
            background: fade(@primary-color, 8%);
            padding: 0 8px;
            margin-bottom: 4px;
            margin-right: 4px;
            transition: none;
            border-radius: 1px;

            &:hover {
                color: @white;
                background: fade(@primary-color, 85%);
            }
        }

    }
    
}
</style>