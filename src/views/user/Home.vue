<template>
    <Row :gutter="20">
        <Col flex="1">
            <div class="user-home-cover" :style="{'--height': '180px', '--bgCover': `url(${state.user?.home_cover || require('@/assets/user-card-bg.jpg')})`}"></div>
            <div class="user-meta">
                    <div class="meta-wrapper">
                        <img class="user-avatar" :src="state.user?.avatar || require('@/assets/demo-avatar.jpg')" />
                        <div class="user-box">
                            <div class="top-line">
                                <span class="name">{{state.user?.user_name || '名称'}}</span>
                                <Tag class="primary-plain">管理员</Tag>
                            </div>
                            <div class="second-line">{{state.user?.home_description || '没有描述'}}</div>
                        </div>
                        <div class="user-stat">
                            <Row align="middle">
                                <div>
                                    <span class="value">{{state.user?.fans_num || 0}}</span>
                                    <span class="label">粉丝</span>
                                </div>
                                <Divider type="vertical" class="divi"/>
                                <div>
                                    <span class="value">{{state.user?.follow_num || 0}}</span>
                                    <span class="label">关注</span>
                                </div>
                            </Row>
                            <div class="stat-action">
                                <Row justify="center" align="middle">
                                    <Button type="primary" icon="md-add" size="small">关注他</Button>
                                    <Button icon="md-mail" size="small">发私信</Button>
                                </Row>
                            </div>
                        </div>
                    </div>
            </div>
            
            <div class="section">
                <Tabs value="name1" :animated="false">
                    <TabPane label="动态" name="name1">标签一的内容</TabPane>
                    <TabPane label="文章" name="name2">标签二的内容</TabPane>
                    <TabPane label="问答" name="name3">标签三的内容</TabPane>
                    <TabPane label="评论" name="name3">标签三的内容</TabPane>
                </Tabs>
            </div>
        </Col>
        <Col flex="320px">
            <div class="block">
                <h3 class="title">热评帖子</h3>
            </div>
            <div class="block">
                <h3 class="title">随便看看</h3>
            </div>
        </Col>
    </Row>
</template>

<script setup>
import * as api from "@/api"
import { onBeforeMount, onMounted, reactive } from "vue"
import { useRoute } from "vue-router"

const state = reactive({
    user: null
})

const route = useRoute()
onBeforeMount(() => {

    api.userApi.getBaseInfo(route.params.id).then(result => {
        state.user = result.result
        state.user.home_cover ??= require('@/assets/user-card-bg.jpg')
    })

})

</script>

<style lang="less" scoped>
.ivu-row {
     .user-home-cover {
        height: var(--height);
        background: var(--bgCover) left top no-repeat;
        background-size: cover;
        position: relative;
    }

    .user-meta {
        
        margin-bottom: 20px;

        img {
            display: block;
        }

        .user-avatar {
            position: relative;
            border-radius: 50%;
            width: 80px;
            height: 80px;
            margin: 20px;
            box-sizing: border-box;
        }

        .meta-wrapper {
            display: flex;
            background: #fff;

            .user-box {
                flex: 1;
                margin-top: 30px;

                .top-line {
                    display: flex;
                    align-items: center;

                    span.name {
                        font-size: 22px;
                        font-weight: 400;
                        margin-right: 10px;
                        line-height: 1;
                    }

                }

                .second-line {
                    font-size: 12px;
                    margin-top: 10px;
                    color: #555;
                }

            }

            .user-stat {
                margin-top: 30px;
                margin-right: 30px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;

                .divi {
                    margin: 0 20px;
                }

                span.label, span.value {
                    display: block;
                    text-align: center;
                    line-height: 1;
                }

                span.value {
                    font-size: 18px;
                }

                span.label {
                    margin-top: 6px;
                    font-size: 12px;
                    color: #8590a6;
                }

                .stat-action {
                    margin-top: 20px;
                    margin-bottom: 15px;

                    :deep(button) {
                        margin-right: 8px;
                    }

                    :deep(button + button) {
                        margin-left: 8px;
                        margin-right: 0;
                    }


                }
            }
        }
    }

    .section {
        background: #fff;
        padding: 10px;
    }


    .block.bg-none {
        background: none;
        padding: 0;
    }

    .block {
        margin-bottom: 20px;
        background: #fff;
        padding: 15px;

        .title {
            font-size: 16px;
            font-weight: 500;
            line-height: 1;
            color: @text-dark-color;
            display: flex;
            margin-bottom: 15px;

            &::before {
                content: "";
                display: block;
                width: 3px;
                margin-right: 12px;
                background: @primary-color;
                border-radius: 3px;
            }
        }
    }



}
</style>