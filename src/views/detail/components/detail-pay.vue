<template>
  <n-card class="pay-container">
    <div class="detail-pay">
      <div class="bgImg"></div>
      <div class="tooltip">
        <span style="font-size: 20px; color: #8f7a7b">请在</span>
        <n-countdown :duration="900000" :active="active" />
        <span style="font-size: 20px; color: #8f7a7b">分钟完成付款</span>
      </div>
    </div>
  </n-card>
  <div class="pay-bottom">
    <div class="top">
      <div>影片</div>
      <div>时间</div>
      <div>影院</div>
      <div>座位</div>
    </div>
    <div class="content">
      <div>《大话西游》</div>
      <div style="color: #f16e68">明天12月12日 11:45</div>
      <div>万达影院</div>
      <div>3号厅 2排 2座</div>
    </div>
  </div>
  <div class="pay">
    <div class="top">
      <span>实际支付：</span
      ><span style="color: #f16e68; font-size: 30px">¥100</span>
    </div>
    <n-button class="btn" color="#f03d37" @click="toTicket">确认支付</n-button>
  </div>
</template>
<script setup>
import { NCard, NCountdown, NButton } from "naive-ui";
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const active = ref(true);
const toTicket = () => {
  router.push("/detail/ticket");
};
</script>
<style scoped lang="scss">
.pay-container {
  background-color: #fff3f3;
}
.detail-pay {
  display: flex;
  align-items: center;
  padding: 20px;
  .bgImg {
    background-image: url("@/assets/倒计时.png");
    width: 50px;
    height: 50px;
    background-repeat: no-repeat;
  }
  .tooltip {
    font-size: 30px;
    color: #f03d37;
  }
}
.pay-bottom {
  margin-top: 20px;
  border: 1px solid #ececec;
  .top {
    display: flex;
    justify-content: space-around;
    padding: 15px 10px;
    background-color: #f7f7f7;
  }
  .content {
    display: flex;
    justify-content: space-around;
    padding: 15px 10px;
  }
}
.pay {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 100px;
  margin-right: 30px;
  .btn {
    margin-top: 20px;
  }
}
</style>
