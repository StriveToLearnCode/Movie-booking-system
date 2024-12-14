import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => ({
    isLoading: false, // 控制加载状态
  }),
  actions: {
    startLoading() {
      this.isLoading = true;
    },
    stopLoading() {
      this.isLoading = false;
    }
  }
});
