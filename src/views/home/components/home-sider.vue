<template>
  <div>
    <div class="sider">
      <div class="title">
        <a href="#/">
          <img src="@/assets/logo.jpg" alt="" />
        </a>
      </div>
      <n-anchor :show-rail="showRail">
        <n-anchor-link title="菜单">
          <n-anchor-link title="首页" href="/" />
          <n-anchor-link title="票房排名" href="/discovery" />
          <n-anchor-link title="社区" href="/community" />
          <n-anchor-link title="即将上映" href="/coming" />
        </n-anchor-link>
        <n-anchor-link title="社交">
          <n-anchor-link title="我的好友" href="/friends" />
          <n-anchor-link title="聚会" href="/parties" />
          <n-anchor-link title="媒体" href="/media" />
        </n-anchor-link>
        <n-anchor-link title="全局">
          <n-anchor-link title="个人中心" href="/setting" />
          <n-anchor-link title="后台管理系统" @click="isAdmin" />
        </n-anchor-link>
      </n-anchor>
      <div class="layout">
        <NButton @click="logout">退出登录</NButton>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NAnchor, NAnchorLink, NButton } from "naive-ui";
import { ref } from "vue";
import { reqUserInfo } from "@/api/userInfo";
import { useRouter } from "vue-router";
const showRail = ref(false);
const router = useRouter();
const isAdmin = async () => {
  const res = await reqUserInfo();
  console.log(res.data.data.is_admin);
  if (res.data.data.is_admin == 1) {
    alert("进入后台管理系统");
    router.push("/system");
  } else {
    alert("权限不足");
  }
};
const logout = () => {
  localStorage.removeItem("token");
  router.push("/login");
};
</script>
<style scoped lang="scss">
.sider {
  padding: 20px;
  height: 100%;
  width: 200px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    img {
      max-width: 180px;
      height: auto;
    }
  }
  .n-anchor {
    height: 100%;
    width: 200px;

    .n-anchor-link {
      padding: 10px;
      .n-anchor-link__title {
        font-size: 20px;
      }
    }
  }
  .layout {
    margin-top: 40px;
  }
}
</style>
