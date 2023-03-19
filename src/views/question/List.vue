<template>
    <Row :gutter="20" class="section-wrapper">
        <Col :span="17">
            <div class="section">
                <Tabs value="name1" :animated="false" :bar-gutter="20">
                    <TabPane label="全部" name="name1">
                        <div class="section-p-20">
                            <List>
                                <ListItem v-for="k of 10" :key="`k-${k}`">
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="48" />
                                    <div class="topic-content">
                                        <div class="topic-title"><Tag v-if="k - 1 === 0" size="small" color="primary">置顶</Tag><router-link :to='{name:"questionDetail", params: {id: 1}}'>这是一个标题</router-link></div>
                                        <div class="topic-meta">
                                            <div class="ltr">
                                                <span>问答</span>
                                                <Divider type="vertical" />
                                                <span>10分钟前</span>
                                                <Divider type="vertical" />
                                                <span>最后回复来自 星雨</span>
                                            </div>
                                            <div class="reply-count">
                                                <span><i class="fa-sharp fa-regular fa-eye"></i>15698</span>
                                                <span><i class="fa-regular fa-comment-dots"></i>36</span>
                                            </div>
                                        </div>
                                    </div>
                                </ListItem>
                            </List>
                        </div>   
                    </TabPane>
                    <TabPane label="回答" name="name2">标签二的内容</TabPane>
                    <TabPane label="建议" name="name3">标签三的内容</TabPane>
                    <TabPane label="其他" name="name4">标签三的内容</TabPane>
                </Tabs>
                <Row justify="center" class="page-wrapper">
                    <Page :total="100" />
                </Row>
            </div>
        </Col>
        <Col :span="7">
            <div class="block bg-none"><Button size="large" type="primary" long icon="md-create">我要提问</Button></div>
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
}

.section :deep(.ivu-tabs-nav .ivu-tabs-tab) {
    /* height: 54px;
    vertical-align: middle;
    display: inline-flex;
    align-items: center; */
    padding: 12px 16px;
 }

 .section :deep(.ivu-tabs) .ivu-tabs-content .topic-content {
    margin-left: 20px;
    flex: 1;

    .topic-title {
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 22px;
        text-overflow: ellipsis;
        white-space: nowrap;
        a {
            color: @text-dark-color !important;
            &:hover {
                color: @primary-color !important;
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