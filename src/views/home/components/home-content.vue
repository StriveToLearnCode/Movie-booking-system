<template>
  <div class="tab">
    <n-tabs animated>
      <n-tab-pane name="oasis" tab="Oasis"></n-tab-pane>
      <n-tab-pane name="the beatles" tab="Movies"></n-tab-pane>
      <n-tab-pane name="jay chou" tab="Animes"></n-tab-pane>
    </n-tabs>
  </div>
  <div class="carousel">
    <n-carousel autoplay centered-slides="true" show-arrow>
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
      />
      <img
        class="carousel-img"
        src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
    </n-carousel>
  </div>
  <div>
    <div class="subTitle">Best Artists</div>
    <div class="list">
      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>
      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>

      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>
      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>
    </div>
  </div>
  <div>
    <div class="subTitle">Best Artists</div>
    <div class="list">
      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>
      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>

      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>
      <n-card title="带封面的卡片">
        <template #cover>
          <img
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </template>
        卡片内容
      </n-card>
    </div>
  </div>
</template>
<script setup>
import { NCarousel, NTabs, NTabPane, NCard } from "naive-ui";
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
    gap: 20px;
    .n-card {
      max-width: 200px;
    }
  }
}
</style>
