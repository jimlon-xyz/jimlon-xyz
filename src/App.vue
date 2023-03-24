<template>
  <Layout class="page-wrapper">
      <Header class="header">
        <section>
          <router-link to="/">
            <img class="brand-logo" src="@/assets/jimlogo-dark.png" height="42" />
          </router-link>
          <Menu mode="horizontal" :active-name="$route.path">
            <MenuItem name="/" to="/">首页</MenuItem>
            <MenuItem name="/feed" to="/feed">畅言</MenuItem>
            <!-- <MenuItem name="/news" to="/news">文章</MenuItem> -->
            <MenuItem name="/lesson" to="/lesson">课程</MenuItem>
            <MenuItem name="/project" to="/project">众包</MenuItem>
            <!-- <MenuItem name="4"><Badge text="邀请有礼" :offset="[15, -30]">APP</Badge></MenuItem> -->
          </Menu>
          <div class="right-side">
            <template v-if="state.user">
              <span class="btn"><i class="fa-solid fa-bell"></i></span>
              <Poptip placement="bottom-end" :width="280">
                <template #content>
                  <div class="user-card">
                     <div class="user-card-row">
                        <Avatar class="avatar" :src="state.user.avatar" :size="48" />
                      <div class="user-detail">
                        <div class="name">{{state.user.user_name}}</div>
                        <div class="summary">金币：100<i class="fa-sharp fa-regular fa-angle-right"></i></div>
                      </div>
                     </div>
                     <div class="user-level">
                        <Row justify="space-between" align="middle">
                          <div class="label">吉友等级<strong>JY.{{state.user.user_level}}</strong></div>
                          <div class="exp">{{state.user.user_exp}} / {{state.user.exp.rt}}<i class="fa-sharp fa-regular fa-angle-right"></i></div>
                        </Row>
                        <Progress :percent="state.user.user_exp_percent" hide-info :stroke-width="6" />
                     </div>
                    <!-- <Divider /> -->
                    <Menu width="auto">
                      <MenuItem name="1" :to="{name:'userHome',params:{id: state.user.id}}">我的主页</MenuItem>
                      <MenuItem name="2" :to="{name:'userSettingProfile'}">个人资料</MenuItem>
                      <MenuItem name="3" :to="{name:'userSettingWallet'}">钱包账户</MenuItem>
                      <MenuItem name="4" :to="{name:'userSettingAccount'}">账号设置</MenuItem>
                      <Divider />
                      <MenuItem name="5" @click="logoutAction">退出</MenuItem>
                    </Menu>
                  </div>
                </template>
                <Avatar :src="state.user.avatar" :size="28" />
              </Poptip>
            </template>
            <template v-else>
              <span @click="showLogin">登录</span><Divider type="vertical" /><span @click="showLogin">注册</span>
            </template>
            <Button type="primary" size="small">投稿</Button>
          </div>
        </section>
      </Header>
      <Content id="content" class="content">
        <router-view/>
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
                      <Input v-model="state.form.email" size="large" type="text" placeholder="请输入电子邮箱">
                        <template #prefix>
                          <i class="fa-light fa-user"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Input v-model="state.form.password" size="large" type="password" placeholder="请输入登录密码">
                        <template #prefix>
                          <i class="fa-light fa-lock-keyhole"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Row justify="space-between" align="middle">
                          <Checkbox v-model="state.form.remember">记住我</Checkbox>
                          <span class="primary link">忘记密码？</span>
                      </Row>
                  </FormItem>
                  <FormItem>
                      <Button type="primary" size="large" long @click="loginAction">登 录</Button>
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
                      <Input size="large" v-model="state.regFrom.email" type="text" placeholder="请输入电子邮箱">
                        <template #prefix>
                          <i class="fa-light fa-user"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Row :gutter="0">
                        <Col :span="24">
                          <Input size="large" v-model="state.regFrom.code" type="text" placeholder="请输入验证码">
                            <template #prefix>
                              <i class="fa-light fa-shield-check"></i>
                            </template>
                            
                          </Input>
                          <span class="primary link btn" @click="getRegisterCode">获取验证码</span>
                        </Col>
                        <!-- <Col :span="8">
                          <Button class="font-size-14" long size="large">获取验证码</Button>
                        </Col> -->
                      </Row>
                  </FormItem>
                  <FormItem>
                      <Input size="large" type="password" v-model="state.regFrom.password" placeholder="请输入登录密码">
                        <template #prefix>
                          <i class="fa-light fa-lock-keyhole"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Input size="large" type="password" v-model="state.regFrom.confirm_password" placeholder="请再次输入登录密码">
                        <template #prefix>
                          <i class="fa-light fa-lock-keyhole"></i>
                        </template>
                      </Input>
                  </FormItem>
                  <FormItem>
                      <Button type="primary" size="large" long @click="registerAction">立即注册</Button>
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
import { ref, reactive, getCurrentInstance, watch, computed } from "vue"
import { useRouter, onBeforeRouteUpdate } from "vue-router"
import { useStore } from '@/stores'
import useMitt from "./utils/mitt"
import * as api from "./api"

const state = reactive({
  showLogin: false,
  formType: 'login',
  form: {},
  regFrom: {},
  user: computed({
    get() {
      return useStore().$state.user
    },
    set(value) {
      useStore().$state.user = value
    }
  }),
  showPop: false
})

const { proxy } = getCurrentInstance()
const router = useRouter()

watch(
  () => router.currentRoute.value, 
  () => { document.querySelector('#content').scrollTop = 0 }
)

function showLogin() {
  state.showLogin = true
}

function logoutAction() {
  state.user = null
  proxy.$Message.success('退出登录')
  api.userApi.logout()
}

function loginAction() {
  api.userApi.login({
    email: state.form.email,
    password: state.form.password,
    remember: state.form.remember,
  }).then(({errMsg, result}) => {
      proxy.$Message.success(errMsg)
      state.showLogin = false
      state.form = {}
      state.token = result.token
      state.user = Object.assign(result.user, {user_exp_percent: (result.user.user_exp - result.user.exp.lt) / (result.user.exp.rt - result.user.exp.lt) * 100 })
  }).catch(null)
}

function registerAction() {
  api.userApi.register({
    email: state.regFrom.email,
    code: state.regFrom.code,
    password: state.regFrom.password,
  }).then(result => {
    console.log(result)
  })
}

function getRegisterCode() {
  api.userApi.getRegisterCode({
    email: state.regFrom.email,
  }).then(result => {
    console.log(result)
  })
}
</script>

<style lang="less">
html, body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

.ivu-message-notice-content {
  background: 0 1px 20px rgba(0, 0, 0, 0.2) !important;
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

.ivu-poptip-arrow {
  display: none;
}

.ivu-poptip-popper[x-placement^="bottom"] {
  padding: 0;
}

.ivu-poptip-popper[x-placement^="bottom"] .ivu-poptip-body {
  padding: 20px;
}

.ivu-poptip-inner {
  box-shadow: 0 0 24px rgb(81 87 103 / 16%);
  border: 1px solid #e4e6eb;
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

.ivu-layout-header.header {
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

.header section img.brand-logo {
  display: block;
}

.header section > .ivu-menu {
  margin-left: 60px;
  flex: 1;
}

.header section .ivu-menu.ivu-menu-horizontal.ivu-menu-light:after {
  height: 0;
}

.header section .ivu-menu.ivu-menu-horizontal .ivu-menu-item {
  border: 0;
}


.header section .ivu-badge-count {
    transform: scale(0.5);
    transform-origin: right center;
    font-weight: 500;
    font-size: 16px;
    padding: 2px 6px;
    height: auto;
    background: rgb(238 80 47 / 80%);
}

.user-card {

  .ivu-divider-horizontal {
    margin: 6px 0;
  }

  > .ivu-divider-horizontal {
    margin: 20px 0 6px 0;
  }

  .ivu-menu-vertical .ivu-menu-item {
    padding: 0;
    line-height: 32px;
  }

  .ivu-menu-vertical.ivu-menu-light:after {
    display: none;
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: rgba(0,0,0,0);
  }

  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu):after {
    display: none;
  }

  .user-level {
    margin: 16px 0;
    background: linear-gradient(to bottom, #ebf2ff, #f8f8ff);
    border-radius: 4px;
    padding: 6px 8px;

    .label {
      color: #1e80ff;
      font-size: 12px;
      line-height: 18px;
      > strong {
        margin-left: 4px;
      }
    }

    .exp {
      color: #1e80ff;
      font-size: 12px;
      line-height: 18px;
      i[class^="fa-"] {
        margin-left: 4px;
      }
    }


    .ivu-progress-inner {
      background: rgb(30 128 255 / 20%);
    }


  }
  
  .user-card-row {
    display: flex;

    .avatar {
      margin-right: 12px;
    }

    .user-detail {
      flex: 1;

      .name {
        font-size: 16px;
        line-height: 18px;
        color: #252933;
        margin-top: 2px;
        margin-bottom: 8px;
      }

      .summary {
        font-size: 12px;
        color: #252933;
        display: flex;
        align-items: center;

        i[class^="fa-"] {
          margin-left: 6px;
          color: #8a919f
        }

      }

    }

    
  }

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

  .btn {
    font-size: 18px;
    color: #8a919f;
    padding: 0;
  }

  .ivu-poptip {
    display: block;
  }

  .ivu-poptip-rel {
    display: flex;
    margin-left: 20px;
    cursor: pointer;
  }

}

.header section .right-side .ivu-btn {
  margin-left: 20px;
}

.content {
  margin-top: 64px;
  background: #f5f5f5;
  flex: 1;
  overflow: auto;
}

.content > main {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}

.login-form {
  padding: 34px 9px 9px 9px;


  .ivu-input-wrapper-large .ivu-input-prefix i, .ivu-input-wrapper-large .ivu-input-suffix i {
    font-size: 16px;
  }

  span.btn {
    position: absolute;
    white-space: nowrap;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 1;
    appearance: button;
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
