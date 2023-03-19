<template>
    <Row :gutter="20">
        <Col>
            <aside>
                <Menu active-name="1" width="auto">
                    <MenuItem name="1">
                        <Icon type="md-document" />
                        个人资料
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="md-chatbubbles" />
                        账号设置
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="md-chatbubbles" />
                        消息设置
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="md-chatbubbles" />
                        评论管理
                    </MenuItem>
                </Menu>
            </aside>
        </Col>
        <Col :span="18">
            <main>
                <router-view/>
            </main>
        </Col>
    </Row>    
</template>

<script setup></script>

<style lang="less" scoped>
aside {
    padding: 10px;
    width: 240px;
    background: #fff;

    :deep(.ivu-menu-light.ivu-menu-vertical:after) {
        display: none;
    }

    :deep(.ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:after) {
        display: none !important;
    }
}

main {
    background: #fff;
}
</style>