<template>
    <div class="section">
        <h1>个人资料</h1>
        <Divider />
        <Row :gutter="40">
            <Col :span="16">
                <Form label-position="left" :label-width="100">
                    <FormItem label="用户名">
                        <Input type="text" />
                    </FormItem>
                    <FormItem label="职位">
                        <Input type="text" />
                    </FormItem>
                    <FormItem label="个人主页">
                        <Input type="text" />
                    </FormItem>
                    <FormItem label="自我介绍">
                        <Input type="textarea" :rows="6" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary">保存</Button>
                    </FormItem>
                </Form>
            </Col>
            <Col :span="8">
                <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" :size="80" />
                <div class="avatar-label">我的头像</div>
                <div class="avatar-summary">支持 jpg、png、jpeg 格式大小 5M 以内的图片</div>
            </Col>
        </Row>
    </div> 
</template>

<script setup></script>

<style lang="less" scoped>
.section {
    padding: 20px;

    > h1 {
        font-size: 20px;
        margin-bottom: 20px;
        line-height: 1;
    }

    .ivu-form {
        margin: 0 20px;
    }

    .avatar-label {
        width: 80px;
        margin-top: 8px;
        font-size: 14px;
        color: #1d2129;
    }

    .avatar-summary {
        margin-top: 8px;
        color: #86909c;
    }
}
</style>