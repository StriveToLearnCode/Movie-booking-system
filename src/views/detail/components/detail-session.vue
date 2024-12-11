<template>
  <n-card>
    <div class="top">
      <div class="left">
        <n-image
          width="200"
          height="300"
          src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
        />
      </div>
      <div class="center">
        <div class="title">大话西游之大圣归来</div>
        <div class="en-title">
          The Great Sage of Journey to the West has returned
        </div>
        <div class="cate">
          <span>动作</span>
          <span>剧情</span>
          <span>爱情</span>
        </div>
        <div class="area">
          <span>中国大陆</span>
          <span>/105分钟</span>
        </div>
        <div class="time">
          <span>2022-12-12</span>
          <span>19:00中国大陆上映</span>
        </div>
        <div class="btn">
          <div class="btn-top">
            <n-button>想看</n-button>
            <n-button>评分</n-button>
          </div>
          <div class="btn-bottom">
            <n-button color="red">查看更多电影详情</n-button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rate">
          <div>评分</div>
          <n-rate readonly :default-value="4.5" />
        </div>
        <div class="ticket">
          <div>累计票房</div>
          <div><span>6783</span>万</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="date">
        <div>日期</div>
        <ul class="date-list">
          <li>今天12月11</li>
          <li>明天12月12</li>
          <li>后天12月13</li>
          <li>周六12月14</li>
          <li>周日12月15</li>
        </ul>
      </div>
    </div>
  </n-card>
</template>
<script setup>
import { NCard, NImage, NButton, NRate } from "naive-ui";
</script>
<style scoped lang="scss">
.top {
  display: flex;
  .center {
    margin-left: 20px;
    .title {
      font-size: 20px;
      font-weight: bold;
    }
    .cate {
      margin-top: 10px;
      span {
        margin-right: 5px;
      }
    }
    .area {
      margin-top: 10px;
    }
    .time {
      margin-top: 10px;
      span {
        margin-right: 5px;
      }
    }
    .btn {
      margin-top: 50px;
      width: 140px;
      .btn-top {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }
      .btn-bottom {
        margin-top: 10px;
      }
    }
  }
  .right {
    margin-left: 20px;
    margin-top: 190px;
    .ticket {
      div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
      span {
        font-size: 20px;
      }
    }
  }
  .bottom {
    .date {
      .date-list {
        display: flex;
      }
    }
  }
}
</style>
