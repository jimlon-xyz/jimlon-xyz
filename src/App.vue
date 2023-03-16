<template>
  <Layout>
      <Header class="header">
        <section>
          <img :src="require('./assets/jimlogo-dark.png')" height="42" />
          <Menu mode="horizontal">
            <MenuItem name="1" to="/">首页</MenuItem>
            <!-- <MenuItem name="2">问答</MenuItem> -->
            <MenuItem name="3">课堂</MenuItem>
            <MenuItem name="4">求购</MenuItem>
          </Menu>
          <div class="right-side">
            <span>登录</span><Divider type="vertical" /><span>注册</span>
            <Button type="primary" size="small">投稿</Button>
          </div>
        </section>
      </Header>
      <Content class="content">
        <section>
          <router-view/>
        </section>
      </Content>
      <Footer>
        <section>
            <div>
              Copyright &copy; 2023 JIMLON.XYZ 版权所有
            </div>
        </section>
      </Footer>
  </Layout>
</template>

<script>
</script>

<style lang="less">
.ivu-tag-size-small {
  height: 18px !important;
  line-height: 18px !important;
}

.ivu-layout-footer {
  background: rgba(45,45,45,1);
  padding: 50px 0;
}

.ivu-layout-footer section {
  width: 1200px;
  margin: 0 auto;
  color: rgba(255,255,255,255,.65);
  display: flex;
  align-items: center;
  flex-direction: column;
}

a {
  color: @text-dark-color !important;
}

a:hover {
  color: @primary-color !important;
}

.ivu-btn > span i[class^="fa-"] {
  margin-right: 3px;
  font-size: 14px;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px; 
    background: transparent;
}

::-webkit-scrollbar-track{
    background-color: transparent;
}

::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: rgba(0,0,0,0);
    transition: background-color .5s ease-in;
}

::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0,0,0,0.35);
}

::-webkit-scrollbar-button {
    background-color: transparent;
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-corner {
    background: transparent;
    width: 5px;
    height: 5px;
}

.header {
  background: #fff;
  box-shadow: 0 0 3px 1px rgba(38,38,38,0.06);
  position: fixed;
  left: 0;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
}

.header section {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}

.header section .ivu-menu {
  margin-left: 60px;
  flex: 1;
}

.header section .ivu-menu.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}

.header section .ivu-menu.ivu-menu-horizontal .ivu-menu-item {
  border: 0;
}

.header section .right-side {
  display: flex;
  align-items: center;
}

.header section .right-side .ivu-btn {
  margin-left: 16px;
}

.content {
  margin-top: 64px;
  background: #f5f5f5;
}

.content section {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
