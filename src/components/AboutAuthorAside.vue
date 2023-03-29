<template>
    <div class="block">
        <h3 class="title">关于作者</h3>
        <Divider />
        <div class="user-card">
            <Row>
                <Col flex="84px">
                    <img class="user-avatar" src="@/assets/demo-avatar.jpg" width="64" />
                </Col>
                <Col>
                    <div class="name">欢喜哥</div>
                    <div class="ztext">这里可以填一些介绍信息</div>
                </Col>
            </Row>
            <Divider />
            <div class="user-stats">
                <Row>
                    <Col :span="8">
                        <span class="label">问答</span>
                        <span class="value">13</span>
                    </Col>
                    <Col :span="8">
                        <span class="label">评论</span>
                        <span class="value">27</span>
                    </Col>
                    <Col :span="8">
                        <span class="label">粉丝</span>
                        <span class="value">25</span>
                    </Col>
                </Row>
            </div>
            <Row :gutter="20">
                <Col :span="12"><Button type="primary" icon="md-add" long>关注他</Button></Col>
                <Col :span="12"><Button icon="md-mail" long>发私信</Button></Col>
            </Row>
        </div>
</div>
</template>

<script setup>
const props = defineProps({
    authorId: {
        type: Number,
        default: 0,
        required: true
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

    .user-card {
        padding: 0 15px 15px 15px;

        .user-avatar {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            display: block;
        }

        .name {
            margin-top: 10px;
            font-size: 20px;
            font-weight: 400;
            line-height: 1;
        }

        .ztext {
            font-size: 14px;
            margin-top: 4px;
            color: #666;
        }

        .ivu-divider.ivu-divider-horizontal {
            background: #f5f5f5;
            margin: 15px 0;
        }


         .user-stats {
            margin: 20px 15px;

            span.value {
                color: @text-color !important;
                display: block;
                text-align: center;
                font-size: 18px;
                font-weight: 400;
            }

            span.label {
                color: #8590a6 !important;
                display: block;
                text-align: center;
                font-size: 13px;
            }
        }


    }
}
</style>