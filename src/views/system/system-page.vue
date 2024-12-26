<template>
  <div class="system-container">
    <div class="left">
      <div class="top">
        <div class="title">
          <img src="@/assets/logo.jpg" alt="" />
        </div>
        <div class="tab">
          <div class="newShow">
            <span> > {{ now }}</span>
          </div>
          <div class="avatar">
            <div>{{ username }}</div>
            <n-avatar
              size="large"
              src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
            />
          </div>
        </div>
      </div>
      <n-space vertical>
        <n-layout has-sider>
          <n-layout-sider :width="240">
            <n-menu :options="menuOptions" @update:value="onMenuClick" />
          </n-layout-sider>
          <n-layout>
            <router-view></router-view>
          </n-layout>
        </n-layout>
      </n-space>
    </div>
  </div>
</template>
<script setup>
import { NSpace, NMenu, NLayout, NLayoutSider, NAvatar } from "naive-ui";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { reqUserInfo } from "@/api/userInfo";
const router = useRouter();
const username = ref("");
const menuOptions = [
  {
    label: "影视管理",
    key: "FilmManagement",
    children: [
      {
        label: "电影列表",
        key: "FilmList",
      },
    ],
  },
  {
    label: "影院管理",
    key: "CinemaManagement",
    children: [
      {
        label: "影院列表",
        key: "CinemaList",
      },
    ],
  },
  // {
  //   label: "订单管理",
  //   key: "OrderManagement",
  // },
  {
    label: "用户管理",
    key: "UserManagement",

    children: [
      {
        label: "用户列表",
        key: "UserList",
      },
      {
        label: "权限管理",
        key: "RootManagement",
      },
    ],
  },
  {
    label: "退出后台",
    key: "exit",
  },
];
onMounted(() => {
  getUserInfo();
});
const getUserInfo = async () => {
  const res = await reqUserInfo();
  username.value = res.data.data.username;
};
const now = ref("filmList");
const onMenuClick = (key) => {
  now.value = key;
  console.log(key);

  if (key === "exit") {
    router.push("/");
  } else if (key === "RootManagement") {
    router.push("/system/rootmanagement");
  } else if (key === "UserList") {
    router.push("/system/userlist");
  } else if (key === "CinemaList") {
    router.push("/system/cinemaList");
    // } else if (key === "OrderManagement") {
    //   router.push("/system/ordermanagement");
    // }
  } else if (key === "FilmList") {
    router.push("/system");
  }
};
</script>
<style scoped lang="scss">
.system-container {
  width: 100%;
  .left {
    .top {
      display: flex;
      .title {
        display: inline-block;
        margin-left: 15px;
        img {
          max-width: 180px;
          height: auto;
          padding: 5px 18px;
        }
      }
      .tab {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .newShow {
          margin-left: 10px;
        }
        .avatar {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-right: 10px;
        }
      }
    }
    .layout {
    }
  }
}
</style>
