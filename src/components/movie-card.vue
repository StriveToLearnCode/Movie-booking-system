<template>
  <div class="movies">
    <div class="left">
      <n-image
        :width="width"
        :src="props.imageSrc"
        alt="Movie Image"
        loading="lazy"
      />
    </div>
    <div class="right">
      <div class="name">
        <slot name="name"></slot>
      </div>
      <div class="cate">
        <slot name="cate"></slot>
      </div>
      <div class="score">
        <div class="rate" v-if="isRate">
          <i class="imdb">IMDB</i>
          <span>
            <slot name="score"></slot>
          </span>
        </div>
        <div v-else></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { NImage } from "naive-ui";
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
    default: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg",
  },
  isRate: {
    type: Boolean,
    default: true,
  },
  width: {
    type: String,
    default: "100",
  },
});
</script>
<style scoped lang="scss">
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
</style>
