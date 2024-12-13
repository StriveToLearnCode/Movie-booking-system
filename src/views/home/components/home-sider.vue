<template>
  <div>
    <div class="sider">
      <div class="title">
        <span>LOGO</span>
      </div>
      <n-anchor :show-rail="showRail">
        <n-anchor-link title="菜单">
          <n-anchor-link title="首页" href="#/" />
          <n-anchor-link title="票房排名" href="#/discovery" />
          <n-anchor-link title="社区" href="#/community" />
          <n-anchor-link title="即将上映" href="#/coming" />
        </n-anchor-link>
        <n-anchor-link title="社交">
          <n-anchor-link title="我的好友" href="#/friends" />
          <n-anchor-link title="聚会" href="#/parties" />
          <n-anchor-link title="媒体" href="#/media" />
        </n-anchor-link>
        <n-anchor-link title="全局">
          <n-anchor-link title="个人中心" href="#/setting" />
        </n-anchor-link>
      </n-anchor>
    </div>
  </div>
</template>
<script setup>
import { NAnchor, NAnchorLink } from "naive-ui";
import { ref } from "vue";
const showRail = ref(false);
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
}
</style>
