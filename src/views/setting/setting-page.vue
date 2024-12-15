<template>
  <div class="setting-container">
    <div class="top">
      <div class="title">
        <span>个人中心</span>
      </div>
      <div class="userInfo">
        <div class="avatar">
          <n-avatar
            round
            :size="100"
            src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
          />
        </div>
        <div class="name">{{ username }}</div>
      </div>
    </div>
    <div class="bottom">
      <n-card title="我的订单">
        <n-empty
          size="large"
          description="你什么也找不到"
          v-if="token && orderList.length == 0"
        >
          <template #extra>
            <n-button size="small" @click="$router.push('/')">
              去买票
            </n-button>
          </template>
        </n-empty>
        <n-list hoverable clickable v-else-if="orderList.length > 0">
          <n-list-item v-for="item in orderList" :key="item">
            <div style="display: flex; justify-content: space-between">
              <n-thing content-style="margin-top: 10px;">
                电影：{{ item.name }}<br />
                时间：{{ item.time }}<br />
                地点：{{ item.cinema }} <br />
                座位：{{ item.seat }}
              </n-thing>
              <n-image
                width="100"
                :src="`/src/assets/电影/${item.name}.webp`"
              />
            </div>
          </n-list-item>
        </n-list>
        <n-empty size="large" description="你什么也找不到" v-else>
          <template #extra>
            <n-button size="small"> 去登录 </n-button>
          </template>
        </n-empty>
      </n-card>
    </div>
  </div>
</template>
<script setup>
import {
  NAvatar,
  NCard,
  NEmpty,
  NButton,
  NThing,
  NList,
  NListItem,
  NImage,
} from "naive-ui";
import { reqUserInfo } from "@/api/userInfo";
import { ref, onMounted } from "vue";
import { reqMovieList } from "@/api/movie";
import { reqCinemaList } from "@/api/cinema";
const token = ref(localStorage.getItem("token"));
const username = ref("");
const orderList = ref([]);
const movieList = ref([]);
const cinemaList = ref([]);
onMounted(async () => {
  getMovieList();
  getCinemaList();
  const res = await reqUserInfo();
  username.value = res.data.data.username;
  const orders = JSON.parse(res.data.data.order_list);
  orders.forEach((item) => {
    const movie = movieList.value.find((movie) => movie.id == item.movieId);

    const cinema = cinemaList.value.find(
      (cinema) => cinema.id == item.cinemaId
    );

    orderList.value.push({
      name: movie?.movie_cn_name,
      time: item?.date,
      cinema: cinema?.cinema_specific_address,
      seat: item?.isChoosedSeats,
    });
  });
});
const getMovieList = async () => {
  const res = await reqMovieList();
  movieList.value = res.data;
  console.log(movieList.value);
};
const getCinemaList = async () => {
  const res = await reqCinemaList();
  cinemaList.value = res.data;
  console.log(cinemaList.value);
};
</script>
<style scoped lang="scss">
.setting-container {
  .top {
    .title {
      margin-bottom: 30px;
    }
    .userInfo {
      display: flex;
      align-items: center;
      .avatar {
        margin-right: 20px;
      }
      .name {
        font-size: 20px;
      }
    }
  }
  .bottom {
    margin-top: 20px;
  }
}
</style>
