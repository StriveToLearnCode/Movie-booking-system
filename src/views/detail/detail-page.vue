<template>
  <div class="detail-container">
    <div class="top">
      <n-steps :current="current">
        <n-step title="选择影片场次" />
        <n-step title="选择座位" />
        <n-step title="14分钟内付款" />
        <n-step title="影票出票" />
      </n-steps>
    </div>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { NSteps, NStep } from "naive-ui";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
const current = ref(1);
const router = useRouter();
watch(current, (val) => {
  console.log(val);
  switch (val) {
    case 1:
      router.push("/detail");
      break;
    case 2:
      router.push("/detail/seat");
      break;
    case 3:
      router.push("/detail/pay");
      break;
    case 4:
      router.push("/detail/ticket");
      break;
  }
});
</script>
<style scoped lang="scss">
.detail-container {
  padding: 50px 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    width: 80%;
    margin-bottom: 50px;
  }
  .bottom {
    width: 100%;
  }
}
</style>
