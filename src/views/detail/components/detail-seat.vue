<template>
  <n-card>
    <div class="left">
      <div class="top">
        <div class="seat">
          <img src="@/assets/seat.png" alt="" />
          <span>可选座位</span>
        </div>
        <div class="seat">
          <img src="@/assets/seat-sealed.png" alt="" />
          <span>已售座位</span>
        </div>
        <div class="seat">
          <img src="@/assets/seat-choosed.png" alt="" />
          <span>已选座位</span>
        </div>
      </div>
      <div class="content">
        <div class="screen">
          <img src="@/assets/荧幕.png" alt="" />
          <div>荧幕中央</div>
        </div>
        <div class="seat-area">
          <div class="seats" v-for="i in 60" :key="i">
            <img src="@/assets/seat.png" alt="" />
          </div>
        </div>
        <div class="btn">
          <n-button>确认选座</n-button>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </n-card>
</template>
<script setup>
import { NCard, NButton } from "naive-ui";
</script>
<style scoped lang="scss">
.top {
  display: flex;
  gap: 20px;
  justify-content: center;
  .seat {
    display: flex;
    align-items: center;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      margin-left: 10px;
    }
  }
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .screen {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .seat-area {
    display: flex;
    gap: 20px;
    margin-top: 20px;
    flex-wrap: wrap;
    width: 60%;
    justify-content: center;
  }
  .btn {
    margin-top: 20px;
  }
}
</style>
