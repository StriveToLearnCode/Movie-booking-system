<template>
  <div class="login-container">
    <div class="card">
      <div class="left">
        <div class="logo">
          <a href="#/">
            <img src="@/assets/logo.jpg" alt="" />
          </a>
        </div>
      </div>
      <div class="right">
        <n-card class="card-login">
          <n-tabs
            class="card-tabs"
            default-value="signin"
            v-model:value="activeTab"
            size="large"
            animated
            pane-wrapper-style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
          >
            <n-tab-pane name="signin" tab="登录">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input v-model:value="username" />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input type="password" v-model:value="password" />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong @click="login">
                登录
              </n-button>
            </n-tab-pane>
            <n-tab-pane name="signup" tab="注册">
              <n-form>
                <n-form-item-row label="用户名">
                  <n-input v-model:value="username" />
                </n-form-item-row>
                <n-form-item-row label="密码">
                  <n-input type="password" v-model:value="password" />
                </n-form-item-row>
                <n-form-item-row label="重复密码">
                  <n-input
                    type="password"
                    v-model:value="rePassword"
                    @change="changeRePassword"
                  />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong @click="signup">
                注册
              </n-button>
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
  NQrCode,
} from "naive-ui";
import { ref, watch } from "vue";
import { reqLogin, reqRegister } from "@/api/user";
import { useRouter } from "vue-router";
const router = useRouter();
const username = ref("");
const password = ref("");
const rePassword = ref("");
const activeTab = ref("signin");
watch(activeTab, () => {
  username.value = "";
  password.value = "";
  if (activeTab.value === "signup") {
    rePassword.value = "";
  }
});
const login = async () => {
  console.log(username.value, password.value);
  if (!username.value || !password.value) {
    alert("请输入用户名和密码");
  }

  const res = await reqLogin({
    username: username.value,
    password: password.value,
  });

  const token = res.data.token;
  localStorage.setItem("token", token);
  if (token) {
    alert("登录成功");
    router.push("/");
  }
};

const signup = async () => {
  if (!username.value || !password.value || !rePassword.value) {
    alert("请输入用户名和密码");
    return;
  }
  if (password.value !== rePassword.value) {
    alert("两次输入的密码不一致");
    return;
  }

  const res = await reqRegister({
    username: username.value,
    password: password.value,
  });

  const token = res.data.token;
  localStorage.setItem("token", token);

  if (token) {
    alert("注册成功");
    router.push("/");
  }
};
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
