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
import { ref, watch, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
const current = ref(1);
const router = useRouter();
const route = useRoute();
const movieId = ref(null);

onMounted(() => {
  movieId.value = route.query.id; // 获取传递的 id
  console.log("Received movie id:", movieId.value);
});

watch(current, (val) => {
  switch (val) {
    case 1:
      router.push({ path: "/detail", query: { id: movieId.value } });
      break;
    case 2:
      router.push({ path: "/detail/seat", query: { id: movieId.value } });
      break;
    case 3:
      router.push({ path: "/detail/pay", query: { id: movieId.value } });
      break;
    case 4:
      router.push({ path: "/detail/ticket", query: { id: movieId.value } });
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
