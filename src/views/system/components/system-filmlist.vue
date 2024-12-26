<template>
  <n-button style="margin-bottom: 10px" @click="addFilm">添加影片</n-button>
  <n-modal
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="添加电影"
    size="huge"
    :bordered="false"
  >
    <n-input
      v-model:value="nameVal"
      style="margin-bottom: 40px"
      type="text"
      placeholder="请输入电影名"
    />
    <n-input
      type="text"
      placeholder="请输入电影上映时间"
      style="margin-bottom: 40px"
      v-model:value="timeVal"
    />
    <n-input
      type="text"
      placeholder="请输入影片地址"
      style="margin-bottom: 40px"
      v-model:value="addressVal"
    />
    <n-input
      type="text"
      placeholder="请输入影片时长"
      style="margin-bottom: 40px"
      v-model:value="durationVal"
    />
    <n-input
      type="text"
      placeholder="请输入影片类型"
      style="margin-bottom: 30px"
      v-model:value="cateVal"
    />
    票价：
    <n-input-number
      v-model:value="priceVal"
      style="margin-bottom: 40px; margin-top: 5px"
      clearable
      placeholder="请输入票价"
    />
    <div>
      <n-button @click="addNewCinema">添加</n-button>
    </div>
  </n-modal>
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>影片</th>
        <th>类型</th>
        <th>上映时间</th>
        <th>价格</th>
        <th>时长</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in movieList" :key="index">
        <td>{{ item.movie_cn_name }}</td>
        <td>{{ item.movie_cate }}</td>
        <td>{{ item.movie_time }}</td>
        <td>{{ item.movie_price }}</td>
        <td>{{ item.movie_duration }}</td>
        <td>
          <n-button @click="delUser(item.id)">删除</n-button>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script setup>
import { NTable, NButton, NModal, NInput, NInputNumber } from "naive-ui";
import { reqMovieList } from "@/api/movie";
import { reqAddFilm, reqDelFilm } from "@/api/system";
import { onMounted, ref } from "vue";
const movieList = ref([]);
const showModal = ref(false);
const nameVal = ref("");
const addressVal = ref("");
const timeVal = ref("");
const durationVal = ref("");
const priceVal = ref("");
const cateVal = ref("");

const bodyStyle = {
  width: "600px",
  height: "600px",
};
onMounted(() => {
  getMovieList();
});
const getMovieList = async () => {
  const res = await reqMovieList();
  movieList.value = res.data;
};
const addFilm = () => {
  showModal.value = true;
};
const addNewCinema = () => {
  const data = {
    movie_cn_name: nameVal.value,
    movie_time: timeVal.value,
    movie_duration: durationVal.value,
    movie_price: priceVal.value,
    movie_cate: cateVal.value,
    movie_address: addressVal.value,
  };
  reqAddFilm(data).then(() => {
    getMovieList();
  });
  showModal.value = false;
  nameVal.value = "";
  addressVal.value = "";
  cateVal.value = "";
  timeVal.value = "";
  durationVal.value = "";
  priceVal.value = "";
};
const delUser = (id) => {
  console.log(id);
  reqDelFilm(id)
    .then(() => {
      getMovieList();
      alert("删除成功");
    })
    .catch(() => {
      alert("删除失败");
    });
};
</script>
<style scoped lang="scss"></style>
