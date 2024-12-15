import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';
import { useLoadingStore } from "@/stores/modules/loading-store"; // Import loading store

const app = createApp(App);
const pinia = createPinia();

router.beforeEach((to, from, next) => {
  useLoadingStore().startLoading();
  const token = localStorage.getItem('token');

  if (to.path.includes('/detail') && !token) {
    next('/login');
  } else {
    next();
  }
});

router.afterEach(() => {
  useLoadingStore().stopLoading(); // Stop loading animation after route change
});

app.use(router);
app.use(pinia);
app.mount('#app');
