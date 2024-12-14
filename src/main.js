import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import { useLoadingStore } from "@/stores/modules/loading-store"; // 引入loadingStore

const app = createApp(App);
const pinia = createPinia();

router.beforeEach((to, from, next) => {
  useLoadingStore().startLoading();
  next();
});

router.afterEach(() => {
  useLoadingStore().stopLoading();
});

app.use(router);
app.use(pinia);
app.mount('#app');
