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
        <n-input v-model:value="value" type="text" placeholder="搜索" />
      </div>
      <div class="bottom">
        <div class="item">
          <div class="title">流行电影</div>
          <movieCard>
            <template #name>John Wick</template>
            <template #cate>Action,Horror</template>
            <template #score>8.5</template>
          </movieCard>
          <movieCard>
            <template #name>John Wick</template>
            <template #cate>Action,Horror</template>
            <template #score>8.5</template>
          </movieCard>
          <movieCard>
            <template #name>John Wick</template>
            <template #cate>Action,Horror</template>
            <template #score>8.5</template>
          </movieCard>
          <movieCard>
            <template #name>John Wick</template>
            <template #cate>Action,Horror</template>
            <template #score>8.5</template>
          </movieCard>
          <movieCard>
            <template #name>John Wick</template>
            <template #cate>Action,Horror</template>
            <template #score>8.5</template>
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
import { ref } from "vue";
const value = ref("");
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
