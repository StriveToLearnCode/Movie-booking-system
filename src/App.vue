<template>
  <div class="app-container">
    <!-- 如果loading状态为true，显示加载条 -->
    <n-spin size="large" :show="loading">
      <router-view />
    </n-spin>
  </div>
</template>

<script setup>
import { useLoadingStore } from "@/stores/modules/loading-store";
import { computed } from "vue";
import { NSpin } from "naive-ui";

const loadingStore = useLoadingStore();

const loading = computed(() => loadingStore.isLoading);
</script>
