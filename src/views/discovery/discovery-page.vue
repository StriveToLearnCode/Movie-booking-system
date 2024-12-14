<template>
  <div class="office-container">
    <div class="title">票房排名</div>
    <div class="content">
      <div
        class="item"
        @click="toDetail(item.id)"
        v-for="(item, index) in movieList"
        :key="item.id"
      >
        <div class="index">{{ index + 1 }}</div>
        <movieCard :imageSrc="item.movie_cn_name">
          <template #name>{{ item.movie_cn_name }}</template>
          <template #cate>{{ item.movie_cate }}</template>
          <template #score>{{ item.movie_hot }}</template>
        </movieCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import movieCard from "@/components/movie-card.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { reqMovieList } from "@/api/movie";
const movieList = ref([]);
const router = useRouter();
const toDetail = (id) => {
  router.push({
    path: "/detail",
    query: { id }, // 将 id 作为查询参数传递
  });
};
const getMovieList = async () => {
  const res = await reqMovieList();
  res.data.sort((a, b) => b.movie_hot - a.movie_hot);
  movieList.value = res.data.slice(0, 10);
};
getMovieList();
</script>
<style scoped lang="scss">
.office-container {
  .title {
    font-size: 20px;
  }
  .content {
    .item {
      display: flex;
      margin-top: 20px;
      align-items: center;
      .index {
        font-size: 50px;
        margin-right: 20px;
      }
    }
  }
}
</style>
