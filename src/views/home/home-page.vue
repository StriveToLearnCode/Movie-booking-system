<template>
  <!-- 三栏布局 -->
  <div class="container">
    <div class="sider">
      <homeSider></homeSider>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="search">
      <div class="top">
        <n-input
          v-model:value="value"
          type="text"
          placeholder="搜索"
          @change="searchMovie"
        />
      </div>
      <div class="bottom">
        <div class="item">
          <div class="title">流行电影</div>
          <movieCard
            v-for="item in HotMovieList"
            :key="item.id"
            :image-src="item.movie_cn_name"
            v-if="searchArr.length === 0"
          >
            <template #name>{{ item.movie_cn_name }}</template>
            <template #cate>{{ item.movie_cate }}</template>
            <template #score>{{ item.movie_hot }}</template>
          </movieCard>
          <movieCard
            v-for="(item, index) in searchArr"
            :key="index"
            :image-src="item.movie_cn_name"
            v-else
          >
            <template #name>{{ item.movie_cn_name }}</template>
            <template #cate>{{ item.movie_cate }}</template>
            <template #score>{{ item.movie_hot }}</template>
          </movieCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NInput } from "naive-ui";
import movieCard from "@/components/movie-card.vue";
import homeSider from "./components/home-sider.vue";
import { reqMovieList } from "@/api/movie";
import { ref } from "vue";
const HotMovieList = ref([]);
const movieList = ref([]);
const value = ref("");
const searchArr = ref([]);
const getMovieList = async () => {
  const res = await reqMovieList();
  movieList.value = res.data;
  res.data.sort((a, b) => b.movie_hot - a.movie_hot);
  HotMovieList.value = res.data.slice(0, 5);
};
getMovieList();
const searchMovie = () => {
  const arr = [];
  movieList.value.forEach((item) => {
    if (item.movie_cn_name.includes(value.value)) {
      arr.push(item);
    }
    searchArr.value = arr;
  });
};
</script>
<style scoped lang="scss">
.container {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  .content {
    flex: 1;
    height: 100%;
    width: 100%;
    padding: 20px 50px;
    border-right: 1px solid #e5e5e5;
    border-left: 1px solid #e5e5e5;
  }
  .search {
    padding: 20px;
    height: 100%;
    width: 200px;
    .top {
      margin: 20px;
    }
    .bottom {
      margin-top: 20px;
      .item {
        gap: 20px;

        .title {
          font-size: 16px;
          margin-bottom: 20px;
        }
        .movies {
          display: flex;
          margin: 10px 0;
          .left {
            margin-right: 10px;
          }
          .right {
            gap: 8px;
            .name {
              font-size: 14px;
              font-weight: bold;
            }
            .cate {
              color: #b2b1b1;
              font-size: 12px;
            }
            .score {
              .imdb {
                font-weight: bold;
                font-size: 12px;
                padding: 2px;
                border-radius: 5px;
                background-color: #edc132;
              }
              margin-top: 30px;
              span {
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
