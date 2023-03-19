<template>
    <Row :gutter="20">
        <Col>
            <aside>
                <Menu :active-name="$route.name" width="auto">
                    <MenuItem name="userSettingProfile" :to="{name:'userSettingProfile'}">
                        <i class="fa-regular fa-id-card"></i>
                        个人资料
                    </MenuItem>
                    <MenuItem name="userSettingAccount" :to="{name:'userSettingAccount'}">
                        <i class="fa-regular fa-gear"></i>
                        账号设置
                    </MenuItem>
                    <MenuItem name="userSettingMessage" :to="{name:'userSettingMessage'}">
                        <i class="fa-regular fa-bell"></i>
                        消息设置
                    </MenuItem>
                    <MenuItem name="userSettingWallet" :to="{name:'userSettingWallet'}">
                        <i class="fa-regular fa-wallet"></i>
                        钱包账户
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