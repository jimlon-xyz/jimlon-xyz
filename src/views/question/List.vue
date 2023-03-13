<template>
    <Row :gutter="20">
        <Col :span="18">
            <div class="section">
                <Tabs value="name1" :animated="false">
                    <TabPane label="全部" name="name1">
                        <div class="section-p-20">
                            <List>
                                <ListItem>
                                    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="48" />
                                </ListItem>
                            </List>
                        </div>   
                    </TabPane>
                    <TabPane label="回答" name="name2">标签二的内容</TabPane>
                    <TabPane label="建议" name="name3">标签三的内容</TabPane>
                    <TabPane label="其他" name="name3">标签三的内容</TabPane>
                </Tabs>
            </div>
        </Col>
        <Col :span="6">
            <Button size="large" type="primary" long icon="md-create">我要提问</Button>
        </Col>
    </Row>
</template>

<script setup>

</script>

<style lang="less" scoped>
@import url("../../theme.less");

.section {
    background: #fff;
}

.section :deep(.ivu-tabs){
    color: @text-color-secondary;
}

.section :deep(.ivu-tabs-nav .ivu-tabs-tab) {
    height: 54px;
    vertical-align: middle;
    display: inline-flex;
    align-items: center;
    padding: 8px 0;
    margin-right: 20px;
 }

.section :deep(.ivu-tabs-nav-wrap) {
    padding: 0 20px;
 }

 .section-p-20 {
    padding: 0 20px 20px;
 }
</style>