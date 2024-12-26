<template>
  <n-button style="margin-bottom: 10px" @click="addCinema">添加影院</n-button>
  <n-modal
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="添加影院"
    size="huge"
    :bordered="false"
  >
    <n-input
      v-model:value="nameVal"
      style="margin-bottom: 40px"
      type="text"
      placeholder="请输入影院名"
    />
    <!-- 地址 -->
    <n-input
      type="text"
      placeholder="影院地址"
      style="margin-bottom: 40px"
      v-model:value="addressVal"
    />
    <!-- 地址 -->
    <n-input
      type="text"
      placeholder="影院详细地址"
      style="margin-bottom: 40px"
      v-model:value="detailVal"
    />
    <div>
      <n-button @click="addNewCinema">添加</n-button>
    </div>
  </n-modal>
  <n-table :bordered="false" :single-line="false">
    <thead>
      <tr>
        <th>影院</th>
        <th>地址</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in cinemaList" :key="index">
        <td>{{ item.cinema_name }}</td>
        <td>{{ item.cinema_address }}</td>
        <td><n-button @click="delCinema(item.id)">删除</n-button></td>
      </tr>
    </tbody>
  </n-table>
</template>
<script setup>
import { NTable, NButton, NModal, NInput } from "naive-ui";
import { onMounted, ref } from "vue";
import { reqCinemaList } from "@/api/cinema";
import { reqAddCinema, reqDelCinema } from "@/api/system";
const cinemaList = ref([]);
const showModal = ref(false);
const nameVal = ref("");
const addressVal = ref("");
const detailVal = ref("");
const bodyStyle = {
  width: "600px",
  height: "400px",
};
onMounted(() => {
  getCinemaList();
});
const getCinemaList = async () => {
  const res = await reqCinemaList();
  cinemaList.value = res.data;
};
const addCinema = () => {
  showModal.value = true;
};
const addNewCinema = () => {
  console.log(nameVal.value, addressVal.value, detailVal.value);

  const data = {
    cinema_name: nameVal.value,
    cinema_address: addressVal.value,
    cinema_specific_address: detailVal.value,
  };
  reqAddCinema(data).then(() => {
    getCinemaList();
  });
  showModal.value = false;
  nameVal.value = "";
  addressVal.value = "";
  detailVal.value = "";
};
const delCinema = (id) => {
  console.log("del", id);
  reqDelCinema(id).then(() => {
    alert("删除成功");
    getCinemaList();
  });
};
</script>
<style scoped lang="scss"></style>
