<template>
  <div class="tab">
    <n-tabs animated>
      <n-tab-pane name="oasis" tab="Oasis"></n-tab-pane>
      <n-tab-pane name="the beatles" tab="Movies"></n-tab-pane>
      <n-tab-pane name="jay chou" tab="Animes"></n-tab-pane>
    </n-tabs>
  </div>
  <div class="carousel">
    <n-carousel autoplay show-arrow>
      <img class="carousel-img" src="@/assets/swiper/swiper1.jpg" />
      <img class="carousel-img" src="@/assets/swiper/swiper2.jpg" />
      <img class="carousel-img" src="@/assets/swiper/swiper3.jpg" />
    </n-carousel>
  </div>
  <div>
    <div class="subTitle">电影列表</div>
    <div class="list">
      <n-card
        v-for="item in movieList"
        :key="item.id"
        :title="item.movie_cn_name"
        @click="toDetail(item.id)"
      >
        <template #cover>
          <img :src="`/src/assets/电影/${item.movie_cn_name}.webp`" />
        </template>
      </n-card>
    </div>
  </div>
</template>
<script setup>
import { NCarousel, NTabs, NTabPane, NCard } from "naive-ui";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { reqMovieList } from "@/api/movie";
const router = useRouter();
const movieList = ref([]);
const toDetail = (id) => {
  router.push({
    path: "/detail",
    query: { id }, // 将 id 作为查询参数传递
  });
};
const getMovieList = async () => {
  const res = await reqMovieList();
  movieList.value = res.data;
  console.log(movieList.value);
};
getMovieList();
</script>
<style scoped lang="scss">
.content {
  .carousel-img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    border-radius: 20px;
  }
  .subTitle {
    font-size: 20px;
    margin-top: 20px;
  }
  .list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    .n-card {
      max-width: 200px;
    }
  }
}
</style>
