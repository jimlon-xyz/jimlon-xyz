<template>
    <div class="block">
        <h3 class="title">热门标签</h3>
        <Divider />
        <div class="list">
            <router-link class="tag" v-for="k of 30" to="/" :key="`tag-${k}`">标题{{ k }}</router-link>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    
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
        white-space: pre-wrap;

        > a {
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