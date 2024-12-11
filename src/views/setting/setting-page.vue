<template>
  <div class="setting-container">
    <div class="top">
      <div class="title">
        <span>设置</span>
      </div>
      <div class="userInfo">
        <div class="avatar">
          <n-avatar
            round
            :size="100"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
        <div class="name">User</div>
      </div>
    </div>
    <div class="bottom">
      <n-card title="我的订单">
        <n-empty size="large" description="你什么也找不到">
          <template #extra>
            <n-button size="small"> 看看别的 </n-button>
          </template>
        </n-empty>
      </n-card>
    </div>
  </div>
</template>
<script setup>
import { NAvatar, NCard, NEmpty, NButton } from "naive-ui";
</script>
<style scoped lang="scss">
.setting-container {
  .top {
    .title {
      margin-bottom: 30px;
    }
    .userInfo {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 20px;
      }
      .name {
        font-size: 20px;
      }
    }
  }
  .bottom {
    margin-top: 20px;
  }
}
</style>
