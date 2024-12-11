<template>
  <div class="detail-container">
    <div class="top">
      <n-steps v-model:current="current">
        <n-step title="选择影片场次" />
        <n-step title="选择座位" />
        <n-step disabled title="14分钟内付款" />
        <n-step disabled title="影票出票" />
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
const currentRef = ref(2);
const current = currentRef;
const router = useRouter();
watch(currentRef, (val) => {
  console.log(val);
  switch (val) {
    case 1:
      router.push("/detail");
      break;
    case 2:
      router.push("/detail/seat");
      break;
    default:
      console.log("Unknown step value:", val);
      // You could push to a default route or handle errors here
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
    display: flex;
  }
}
</style>
