<template>
  <n-result status="success" title="支付成功">
    <template #footer>
      <n-button @click="goHome">返回首页</n-button>
    </template>
  </n-result>
</template>
<script setup>
import { NResult, NButton } from "naive-ui";
import { useRouter, useRoute } from "vue-router";
import { reqAddOrder } from "@/api/order";
const router = useRouter();
const query = useRoute().query;
const goHome = async () => {
  const res = await reqAddOrder({
    newOrderItem: query,
  });

  console.log(res);
  if (res.status !== 200) return;
  router.push("/");
};
</script>
<style scoped lang="scss"></style>
