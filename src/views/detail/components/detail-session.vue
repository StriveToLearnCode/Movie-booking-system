<template>
  <n-card class="detail-session">
    <div class="top">
      <div class="left">
        <n-image
          width="200"
          height="300"
          :src="`/src/assets/电影/${movie.movie_cn_name}.webp`"
        />
      </div>
      <div class="center">
        <div class="title">{{ movie.movie_cn_name }}</div>
        <div class="en-title">
          {{ movie.movie_en_name }}
        </div>
        <div class="cate">
          <span>{{ movie.movie_cate }}</span>
        </div>
        <div class="area">
          <span>{{ movie.movie_address }}</span>
          <span>/{{ movie.movie_duration }}分钟</span>
        </div>
        <div class="time">
          <span>{{ movie.movie_time }}</span>
          <span>{{ movie.movie_address }}上映</span>
        </div>
        <div class="btn">
          <div class="btn-top">
            <n-button>想看</n-button>
            <n-button @click="toComment">评分</n-button>
          </div>
          <div class="btn-bottom">
            <n-button color="red">查看更多电影详情</n-button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="rate">
          <div>评分</div>
          <n-rate readonly v-model:value="rate" />
        </div>
        <div class="ticket">
          <div>累计票房</div>
          <div><span>6783</span>万</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="date">
        <ul class="date-line">
          <li class="date-item">
            <div class="date-title">日期:</div>
            <ul class="date-list">
              <li
                v-for="(item, index) in timeArr"
                :class="index === isSelectedTime ? 'active' : ''"
                :key="index"
                @click="chooseDate(index)"
              >
                {{ item }}
              </li>
            </ul>
          </li>
        </ul>
        <ul class="date-line">
          <li class="date-item">
            <div class="date-title">品牌:</div>
            <ul class="date-list">
              <li
                :class="item.id === isSelectedCinema ? 'active' : ''"
                v-for="item in cinemaList"
                :key="item.id"
                @click="chooseCinema(item.id)"
              >
                {{ item.cinema_name }}
              </li>
            </ul>
          </li>
        </ul>
        <ul class="date-line">
          <li class="date-item">
            <div class="date-title">行政区:</div>
            <ul class="date-list">
              <li
                :class="item.id === isSelectedAdress ? 'active' : ''"
                v-for="item in cinemaList"
                :key="item.id"
                @click="chooseAdress(item.id)"
              >
                {{ item.cinema_address }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="cinema-list">
        <div class="title">
          <div class="line"></div>
          <span>影院列表</span>
        </div>
        <div class="list">
          <div class="item" v-for="item in cinemaList" :key="item.id">
            <div class="left">
              <div class="name">{{ item.cinema_name }}</div>
              <div class="address">
                <span>地址:</span>
                {{ item.cinema_specific_address }}
              </div>
            </div>
            <div class="right">
              <div class="info">
                <div class="price">¥{{ movie.movie_price }}</div>
                <div class="btn">
                  <n-button @click="toSeat">选座购票</n-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </n-card>
  <n-modal
    v-model:show="showModal"
    preset="dialog"
    title="评分"
    positive-text="提交"
    class="custom-card"
    @positive-click="submitCallback"
    @negative-click="cancelCallback"
  >
    <div class="content">
      <n-rate size="large" />
      <n-input
        v-model:value="value"
        type="textarea"
        placeholder="快来说说你的看法吧~"
      />
    </div>
  </n-modal>
</template>
<script setup>
import { NCard, NImage, NButton, NRate, NModal, NInput } from "naive-ui";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { reqMovieList } from "@/api/movie";
import { reqCinemaList } from "@/api/cinema";
const route = useRoute();
const movieId = ref(null);
const showModal = ref(false);
const movie = ref({});
const rate = ref();
const timeArr = ref([]);
const isSelectedTime = ref(0);
const cinemaList = ref([]);
const isSelectedCinema = ref(1);
const isSelectedAdress = ref(1);
onMounted(() => {
  movieId.value = route.query.id;
  console.log("Received movie id:", movieId.value);
  getMovieList();
  getCinemaList();
  getDate();
});
const getMovieList = async () => {
  const res = await reqMovieList();
  res.data.find((item) => {
    if (item.id == movieId.value) {
      movie.value = item;
      rate.value = Number(item.movie_rate);
      console.log(rate.value);
    }
  });
};
const getCinemaList = async () => {
  const res = await reqCinemaList();
  cinemaList.value = res.data;
  console.log(cinemaList.value);
};
const getDate = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  console.log(month, day);
  for (let i = 0; i < 5; i++) {
    const time = `${month}月${day + i}日`;
    timeArr.value.push(time);
  }
};
const chooseDate = (index) => {
  isSelectedTime.value = index;
};
const chooseCinema = (id) => {
  isSelectedCinema.value = id;
};
const chooseAdress = (id) => {
  isSelectedAdress.value = id;
};
const toSeat = () => {
  router.push("/detail/seat");
};
const toComment = () => {
  showModal.value = true;
};
const submitCallback = () => {
  showModal.value = false;
};
const cancelCallback = () => {
  showModal.value = false;
};
</script>
<style scoped lang="scss">
* {
  list-style: none;
}
.detail-session {
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
  }
  .bottom {
    margin-top: 50px;
    .date {
      .date-line {
        border-bottom: 1px solid #f7f7f7;
        padding-bottom: 5px;
      }
      .date-item {
        display: flex;
        align-items: center;
      }
      .date-list {
        display: flex;
        gap: 10px;
        align-items: center;
        li {
          padding: 5px 10px;
          border-radius: 99999px;
          font-size: 12px;
        }
      }
    }
    .cinema-list {
      .title {
        display: flex;
        font-style: 25px;
        font-weight: bold;
        margin-bottom: 20px;

        .line {
          border-right: 4px solid #f03d37;
          margin-right: 5px;
        }
      }
      .list {
        .item {
          display: flex;
          justify-content: space-between;
          padding: 5px;
          margin-bottom: 20px;
          border-bottom: 1px dotted #e9e7e7;
          .address {
            margin-top: 5px;
            font-size: 12px;
          }
          .right {
            .info {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .price {
                font-size: 20px;
                color: #f03d37;
              }
              .btn {
                margin-left: 10px;
                .n-button {
                  border-radius: 99999px;
                }
              }
            }
          }
        }
      }
    }
  }
}
.active {
  background-color: #f34d41;
  color: #fff;
}
.custom-card {
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
  }
}
ul > li {
  cursor: pointer;
}
</style>
