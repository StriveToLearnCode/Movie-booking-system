<template>
  <n-card>
    <div class="left">
      <div class="top">
        <div class="seat" v-for="(seatInfo, index) in seatInfos" :key="index">
          <img :src="seatInfo.img" :alt="seatInfo.alt" />
          <span>{{ seatInfo.label }}</span>
        </div>
      </div>
      <div class="content">
        <div class="screen">
          <img src="@/assets/荧幕.png" alt="荧幕中央" />
          <div>荧幕中央</div>
        </div>
        <div class="seat-area">
          <div
            class="seats"
            v-for="(seat, index) in seats"
            :key="index"
            @click="chooseSeat(index)"
          >
            <img :src="seat.img" alt="Seat" />
          </div>
        </div>
        <div class="btn">
          <n-button @click="goPay">确认选座</n-button>
        </div>
      </div>
    </div>
  </n-card>
</template>

<script setup>
import { NCard, NButton } from "naive-ui";
import { useRouter } from "vue-router";
import seatChoosed from "@/assets/seat-choosed.png";
import seat from "@/assets/seat.png";
import seatSealed from "@/assets/seat-sealed.png";
import { ref } from "vue";

const router = useRouter();

const goPay = () => {
  router.push("/detail/pay");
};

const seatInfos = [
  { img: seat, label: "可选座位", alt: "可选座位" },
  { img: seatSealed, label: "已售座位", alt: "已售座位" },
  { img: seatChoosed, label: "已选座位", alt: "已选座位" },
];

const seats = ref(Array.from({ length: 60 }, () => ({ img: seat })));

const chooseSeat = (index) => {
  seats.value[index].img = seatChoosed;
};
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
