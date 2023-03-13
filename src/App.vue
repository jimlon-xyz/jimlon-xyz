<template>
  <Layout>
      <Header class="header">
        <section>
          <img :src="require('./assets/logo.svg')" height="48" />
          <Menu mode="horizontal">
            <MenuItem name="1">首页</MenuItem>
            <MenuItem name="2">问答</MenuItem>
            <MenuItem name="2">课堂</MenuItem>
            <MenuItem name="2">求购</MenuItem>
          </Menu>
          <div class="right-side">
            <span>登录</span><Divider type="vertical" /><span>注册</span>
            <Button type="primary">投稿</Button>
          </div>
        </section>
      </Header>
      <Content class="content">
        <section>
          asdfasdfasdf
        </section>
      </Content>
      <Footer></Footer>
  </Layout>
</template>

<script>
</script>

<style>
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
  padding-top: 64px;
  background: #f5f5f5;
}

.content section {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
</style>
