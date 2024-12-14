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
            v-for="(row, rowIndex) in seats"
            :key="rowIndex"
            class="seat-row"
          >
            <div class="row-number">{{ rowIndex + 1 }}</div>
            <!-- Row Number -->
            <div
              v-for="(seat, seatIndex) in row"
              :key="seatIndex"
              class="seats"
              :class="{ chosen: seat.selected, sealed: seat.sealed }"
              @click="chooseSeat(rowIndex, seatIndex)"
            >
              <img :src="seat.img" alt="Seat" />
            </div>
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
import { useRouter, useRoute } from "vue-router";
import seatChoosed from "@/assets/seat-choosed.png";
import seat from "@/assets/seat.png";
import seatSealed from "@/assets/seat-sealed.png";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const seats = ref(
  Array.from({ length: 6 }, (_, rowIndex) => {
    return Array.from({ length: 10 }, (_, seatIndex) => ({
      img: seat,
      selected: false,
    }));
  })
);

const seatInfos = [
  { img: seat, label: "可选座位", alt: "可选座位" },
  { img: seatSealed, label: "已售座位", alt: "已售座位" },
  { img: seatChoosed, label: "已选座位", alt: "已选座位" },
];

const goPay = () => {
  const isChoosedSeats = [];
  seats.value.forEach((row, rowIndex) => {
    row.forEach((seat, seatIndex) => {
      if (seat.selected) {
        isChoosedSeats.push({ rowIndex, seatIndex });
      }
    });
  });

  if (isChoosedSeats.length === 0) {
    alert("请选择座位");
    return;
  }
  const query = {
    ...route.query,
    isChoosedSeats: JSON.stringify(isChoosedSeats),
  };
  console.log(query);

  router.push({
    path: "/detail/pay",
    query,
  });
};

const chooseSeat = (rowIndex, seatIndex) => {
  if (seats.value[rowIndex][seatIndex].sealed) return;

  if (seats.value[rowIndex][seatIndex].selected) {
    seats.value[rowIndex][seatIndex].img = seat;
    seats.value[rowIndex][seatIndex].selected = false;
  } else {
    seats.value[rowIndex][seatIndex].img = seatChoosed;
    seats.value[rowIndex][seatIndex].selected = true;
  }
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
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
  .btn {
    margin-top: 20px;
  }
}

.seat-row {
  display: flex;
  align-items: center;
  gap: 10px;
  .row-number {
    font-weight: bold;
    width: 30px;
    text-align: center;
  }
}

.seats {
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
}
</style>
