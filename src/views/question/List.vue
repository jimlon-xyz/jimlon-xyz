<template>
    <main>
        <Row :gutter="20" class="section-wrapper">
            <Col flex="1">
                <div class="section">
                    <Tabs value="name1" :animated="false" :bar-gutter="20">
                        <TabPane label="最新" name="name1">
                            <div class="section-p-20">
                                <List>
                                    <ListItem v-for="k of 10" :key="`k-${k}`">
                                        <div class="topic-ltr">
                                            <div class="anwser-state resolved" v-if="k == 2">
                                                <div class="value">1</div>
                                                <div class="label">解决</div>
                                            </div>
                                            <div class="anwser-state" v-else :class="[
                                                k == 1 || k == 3 ? 'no-answer' : null, 
                                                k > 3 ? 'answered' : null
                                                ]">
                                                <div class="value">0</div>
                                                <div class="label">回答</div>
                                            </div>
                                            <div class="topic-viewer">
                                                <div class="value">{{Math.floor(Math.random() * 9999)}}</div>
                                                <div class="label">浏览</div>
                                            </div>
                                        </div>
                                        <div class="topic-content">
                                            <div class="topic-title">
                                                <Tooltip max-width="200" content="如果回答被采纳，回答者将获得10个吉米" placement="top-start">
                                                    <div class="topic-reward">
                                                        <img :src="require('@/assets/coins.png')" height="16"/>
                                                        <span>{{Math.floor(Math.random() * 50)}}</span>
                                                    </div>
                                                </Tooltip>
                                                <Tag v-if="k - 1 === 0" class="ivu-tag-size-small" color="error">置顶</Tag>
                                                <router-link class="the-title" :to='{name:"questionDetail", params: {id: 1}}'>这是一个标题</router-link>
                                                <router-link to="/tag/USDT" class="jm-tag">USDT</router-link>
                                                <router-link to="/tag/bep-20" class="jm-tag">BEP-20</router-link>
                                            </div>
                                            <div class="topic-meta">
                                                <div class="ltr">
                                                    <span>问答</span>
                                                    <Divider type="vertical" />
                                                    <span>星雨</span>
                                                    <Divider type="vertical" />
                                                    <span>10分钟前</span>
                                                </div>
                                                <!-- <div class="reply-count">
                                                    <span><i class="fa-sharp fa-regular fa-eye"></i>15698</span>
                                                    <span><i class="fa-regular fa-comment-dots"></i>36</span>
                                                </div> -->
                                            </div>
                                        </div>
                                    </ListItem>
                                </List>
                            </div>   
                        </TabPane>
                        <TabPane label="热门" name="name2">标签二的内容</TabPane>
                        <TabPane label="未回答" name="name4">标签三的内容</TabPane>
                        <TabPane label="未解决" name="name3">标签三的内容</TabPane>
                        <TabPane label="已解决" name="name4">标签三的内容</TabPane>
                    </Tabs>
                    <Row justify="center" class="page-wrapper">
                        <Page :total="100" />
                    </Row>
                </div>
            </Col>
            <Col flex="320px">
                <div class="block bg-none"><Button size="large" type="primary" long icon="md-create">我要提问</Button></div>
                <div class="block">
                    <h3 class="title">热评帖子</h3>
                </div>
                <div class="block">
                    <h3 class="title">随便看看</h3>
                </div>
            </Col>
        </Row>
    </main>
</template>

<script setup>

</script>

<style lang="less" scoped>
.section-wrapper {
    margin-bottom: 20px;
}

.section {
    background: #fff;

    .page-wrapper {
        padding: 20px 0;
    }
}

.section :deep(.ivu-tabs){
    color: @text-color-secondary;

    .ivu-list-item {
        padding: 15px 0 !important;
    }

}

.section :deep(.ivu-tabs-nav .ivu-tabs-tab) {
    /* height: 54px;
    vertical-align: middle;
    display: inline-flex;
    align-items: center; */
    padding: 12px 16px;
 }

 .section :deep(.topic-ltr) {
    
    display: flex;

    .topic-viewer {
        margin-left: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 40px;
        min-width: 50px;
        max-width: 60px;

        .value {
            font-size: 16px;
            margin-bottom: 4px;
            line-height: 1;
        }
        .label {
            line-height: 1;
            font-size: 12px;
            color: @subsidiary-color;
        }
    }

    .anwser-state { 
        width: 40px;
        height: 40px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        .value {
            font-size: 16px;
            text-align: center;
            line-height: 1;
            margin-bottom: 4px;
        }
        .label {
            font-size: 12px;
            text-align: center;
            line-height: 1;
        }
        &.no-answer {
            background: fade(@subsidiary-color, 15%);
            color: @subsidiary-color;
        }
        &.resolved {
            background: fade(@success-color, 15%);
            color: @success-color;
        }
        &.answered {
            background: fade(@primary-color, 15%);
            color: @primary-color;
        }
    }
 }

 .section :deep(.ivu-tabs) .ivu-tabs-content .topic-content {
    margin-left: 6px;
    flex: 1;

    .topic-title {
        margin-bottom: 6px;
        font-size: 16px;
        line-height: 22px;
        text-overflow: ellipsis;
        white-space: nowrap;
        display: flex;
        align-items: center;

        .jm-tag {
            color: @primary-color !important;
            background: fade(@primary-color, 10%);
            font-size: 14px;
            padding: 0 8px;
            transition: none !important;
            margin-right: 6px;

            &:hover {
                color: #fff !important;
                background: fade(@primary-color, 85%);
            }
        }

        .ivu-tooltip {
            display: block;

            .ivu-tooltip-rel {
                display: flex;
            }
        }

        .topic-reward {
            display: inline-flex;
            color: @warning-color;
            margin-right: 6px;
            font-size: 16px;
            line-height: 1;
            align-items: center;
            cursor: pointer;

            > img {
                margin-right: 2px;
            }
        }
        

        a.the-title {
            color: @text-dark-color !important;
            margin-right: 12px;
            &:hover {
                color: @primary-color !important;
                text-decoration: underline;
            }
        }
    }

    .topic-meta {
        display: flex;
        color: @text-color-third;
        justify-content: space-between;
        font-size: 13px;

        .reply-count span {
            margin-left: 15px;
            i {
                margin-right: 3px;
            }
        }
    } 
 }

.section :deep(.ivu-tabs-nav-wrap) {
    padding: 0 20px;
 }

 .section-p-20 {
    padding: 0 20px 20px;
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

</style>