<template>
    <div class="block">
        <h3 class="title">{{title}}</h3>
        <Divider />
        <div class="list">
            <div class="list-item" v-for="k of props.maxLength" :key="k">
                <span class="jim-tag tag--primary">问</span>
                <router-link :to="{name:'questionDetail',params:{id: 1111}}">这是一个测文章测试文章？</router-link>
                <span class="answer-count"><em>1</em>个回答</span>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: '相关问题',
    },
    tags: {
        type: Array,
        default: () => [],
    },
    maxLength: {
        type: Number,
        default: 10,
    }
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

    .list {
        padding: 5px 15px 15px 15px;

        .list-item {
            &:first-child { margin: 0; }
            margin-top: 10px;

            .jim-tag {
                margin-right: 6px;
                padding: 2px 4px;
                line-height: 20px;
                font-size: 13px;
                border-radius: 2px;

                &.tag--primary {
                    color: @primary-color;
                    background: fade(@primary-color, 10%);
                }

                &.tag--error {
                    @color: @error-color;
                    background: fade(@error-color, 10%);
                }
            }

            > a {
                line-height: 20px;
                color: @text-dark-color;
                &:hover {
                    color: @primary-color;
                }
                
            }
            .answer-count {
                line-height: 20px;
                margin-left: 8px;
                color: #8590a6;
                em {
                    margin-right: 2px;
                    font-style: normal;
                }
            }
        }
    }

    
}
</style>