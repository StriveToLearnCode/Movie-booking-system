<template>
  <div class="login-container">
    <div class="card">
      <div class="left">
        <div class="logo">
          <img src="@/assets/logo.jpg" alt="" />
        </div>
      </div>
      <div class="right">
        <n-card class="card-login">
          <n-tabs
            class="card-tabs"
            default-value="signin"
            size="large"
            animated
            pane-wrapper-style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
          >
            <n-tab-pane name="signin" tab="登录">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong> 登录 </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input />
                </n-form-item-row>
                <n-form-item-row label="重复密码">
                  <n-input />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong> 注册 </n-button>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </div>
    </div>
  </div>
</template>
<script setup>
import {
  NCard,
  NButton,
  NInput,
  NForm,
  NFormItemRow,
  NTabs,
  NTabPane,
} from "naive-ui";
</script>
<style scoped lang="scss">
.login-container {
  padding: 40px 200px;

  .left {
    .logo {
      img {
        max-width: 180px;
        height: auto;
      }
    }
  }
  .right {
    align-self: center;
    .card-login {
      width: 400px;
    }
  }
}
.card {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  border: 1px solid #efeff5;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  height: 550px;
  align-self: center;
}
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
</style>
