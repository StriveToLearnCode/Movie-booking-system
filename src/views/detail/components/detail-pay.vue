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
      <div>{{ movie[0]?.movie_cn_name }}</div>
      <div style="color: #f16e68">{{ query.date }}</div>
      <div>{{ cinema[0]?.cinema_name }}</div>
      <div class="seat">
        <span v-for="(item, index) in seats" :key="index">{{
          item.row + "排" + item.seat + "号"
        }}</span>
      </div>
    </div>
  </div>
  <div class="pay">
    <div class="top">
      <span>实际支付：</span
      ><span style="color: #f16e68; font-size: 30px"
        >¥{{ movie[0]?.movie_price * seats.length }}</span
      >
    </div>
    <n-button class="btn" color="#f03d37" @click="toTicket">确认支付</n-button>
  </div>
</template>
<script setup>
import { NCard, NCountdown, NButton } from "naive-ui";
import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { reqMovieList } from "@/api/movie";
import { reqCinemaList } from "@/api/cinema";
const movie = ref({});
const cinema = ref({});
const route = useRoute();
const query = route.query;
const seats = ref([]);
onMounted(() => {
  getMovieList();
  getCinemaList();
  convertSeats();
});
const getMovieList = async () => {
  const res = await reqMovieList();
  movie.value = res.data.filter((item) => item.id == query.movieId);
};
const getCinemaList = async () => {
  const res = await reqCinemaList();
  cinema.value = res.data.filter((item) => item.id == query.cinemaId);
};
const convertSeats = () => {
  const seatArr = JSON.parse(query?.isChoosedSeats);
  console.log(seatArr);
  seatArr.forEach((item) => {
    seats.value.push({
      row: item.rowIndex + 1,
      seat: item.seatIndex + 1,
    });
  });
};
const router = useRouter();
const active = ref(true);
const toTicket = () => {
  router.push({
    path: "/detail/ticket",
    query: {
      ...query,
      isChoosedSeats: JSON.stringify(seats.value),
    },
  });
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
    .seat {
      span {
        margin-right: 5px;
      }
    }
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
