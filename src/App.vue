<template>
  <Layout class="page-wrapper">
      <Header class="header">
        <section>
          <img src="@/assets/jimlogo-dark.png" height="42" />
          <Menu mode="horizontal">
            <MenuItem name="1" to="/">首页</MenuItem>
            <!-- <MenuItem name="2">问答</MenuItem> -->
            <MenuItem name="2">课程</MenuItem>
            <MenuItem name="3">直播</MenuItem>
            <MenuItem name="4">其他</MenuItem>
          </Menu>
          <div class="right-side">
            <span @click="showLogin">登录</span><Divider type="vertical" /><span @click="showLogin">注册</span>
            <Button type="primary" size="small">投稿</Button>
          </div>
        </section>
      </Header>
      <Content class="content">
        <main>
          <router-view/>
        </main>
      </Content>


      <Modal
            :transition-names="['move-up', 'fade']"
            v-model="state.showLogin"
            :width="420"
            footer-hide>
            <div class="login-form">
                <img class="brand-logo" :src="require('@/assets/jimlogo-dark.png')" height="42"/>
                <Form  v-if="state.formType == 'login'">
                  <FormItem>
                      <Input size="large" type="text" placeholder="请输入电子邮箱/用户名">
                        <template #prefix>
                          <i class="fa-light fa-user"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Input size="large" type="text" placeholder="请输入登录密码">
                        <template #prefix>
                          <i class="fa-light fa-lock-keyhole"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Row justify="space-between" align="middle">
                          <Checkbox v-model="single">记住我</Checkbox>
                          <span class="primary link">忘记密码？</span>
                      </Row>
                  </FormItem>
                  <FormItem>
                      <Button type="primary" size="large" long>登 录</Button>
                  </FormItem>
                  <FormItem>
                      还没有账号？<span class="primary link" @click="state.formType = 'register'">立即注册</span>
                  </FormItem>
                  <Divider>第三方快捷登录</Divider>
                  <Row justify="center" align="middle">
                    <img :src="require('@/assets/MetaMask_Fox.svg.png')" height="36"/>
                  </Row>
                </Form>
                <Form  v-else>
                  <FormItem>
                      <Input size="large" type="text" placeholder="请输入电子邮箱">
                        <template #prefix>
                          <i class="fa-light fa-user"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Row :gutter="8">
                        <Col :span="16">
                          <Input size="large" type="text" placeholder="请输入验证码">
                            <template #prefix>
                              <i class="fa-light fa-shield-check"></i>
                            </template>
                          </Input>
                        </Col>
                        <Col :span="8">
                          <Button class="font-size-14" long size="large">获取验证码</Button>
                        </Col>
                      </Row>
                  </FormItem>
                  <FormItem>
                      <Input size="large" type="text" placeholder="请输入登录密码">
                        <template #prefix>
                          <i class="fa-light fa-lock-keyhole"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Input size="large" type="text" placeholder="请再次输入登录密码">
                        <template #prefix>
                          <i class="fa-light fa-lock-keyhole"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Button type="primary" size="large" long>立即注册</Button>
                  </FormItem>
                  <FormItem>
                      已经有账号？<span class="primary link" @click="state.formType = 'login'">前往登录</span>
                  </FormItem>
                  <Divider>第三方快捷登录</Divider>
                  <Row justify="center" align="middle">
                    <img :src="require('@/assets/MetaMask_Fox.svg.png')" height="36"/>
                  </Row>
                </Form>
            </div>
        </Modal>
  </Layout>
</template>

<script setup>
import { reactive } from "vue"

const state = reactive({
  showLogin: false,
  formType: 'login'
})

function showLogin() {
  state.showLogin = true

}
</script>

<style lang="less">
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
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

span.primary {
  color: @primary-color;
  &.link {
    cursor: pointer;
  }
}

.font-size-14 {
  font-size: 14px;
}

.ivu-tag.primary-plain {
    background: fade(@primary-color, 10%) !important;
    border-color: @primary-color !important;
    span { color: @primary-color !important;  }
}

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

.page-wrapper {
  height: 100%;
  overflow: hidden;
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

  > span {
    cursor: pointer;
    &:hover {
      color: @primary-color;
    }

  }
}

.header section .right-side .ivu-btn {
  margin-left: 16px;
}

.content {
  margin-top: 64px;
  background: #f5f5f5;
  flex: 1;
  overflow: auto;
}

.content main {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.login-form {
  padding: 34px 9px 9px 9px;


  .ivu-input-wrapper-large .ivu-input-prefix i, .ivu-input-wrapper-large .ivu-input-suffix i {
    font-size: 16px;
  }


  .brand-logo {
    display: block;
    margin: 0 auto 40px auto;
  }

  .ivu-input-large {
    font-size: 14px;
    &::placeholder, &::-webkit-input-placeholder {
      color: rgba(38,38,38,0.6);
    }
  }

  .ivu-divider > span  {
    font-size: 14px;
  }

}

</style>
