<template>
    <Row :gutter="20">
        <Col flex="240px">
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
        <Col flex="auto">
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

    :deep(.ivu-menu-light.ivu-menu-vertical) {
        &:after, &.ivu-menu-item-active:after { display: none !important; }
    }

    .ivu-menu-light .ivu-menu-item {
        color: #4e5969;

        i[class^="fa-"] {
            color: #86909c;
            font-size: 15px;
        }

        &.ivu-menu-item-active {
            color: @primary-color;

            i[class^="fa-"] {
                color: @primary-color;
            }
        }
    }
}

main {
    background: #fff;
}
</style>