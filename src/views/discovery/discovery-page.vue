<template>
  <div class="office-container">
    <div class="title">票房排名</div>
    <div class="content">
      <div class="item" @click="toDetail">
        <div class="index">1</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">2</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>1000万</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">3</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">4</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">5</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">6</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">7</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">8</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
      <div class="item">
        <div class="index">9</div>
        <movieCard>
          <template #name>John Wick</template>
          <template #cate>Action,Horror</template>
          <template #score>8.5</template>
        </movieCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import movieCard from "@/components/movie-card.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = () => {
  router.push("/detail");
};
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
