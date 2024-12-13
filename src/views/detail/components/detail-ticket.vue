<template>
  <n-result status="success" title="支付成功">
    <template #footer>
      <n-button @click="goHome">返回首页</n-button>
    </template>
  </n-result>
</template>
<script setup>
import { NResult, NButton } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();
const goHome = () => {
  router.push("/");
};
</script>
<style scoped lang="scss"></style>
