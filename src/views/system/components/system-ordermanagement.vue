<template>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>订单号</th>
        <th>时间</th>
        <th>影院</th>
        <th>影片</th>
        <th>座位</th>
        <th>价格</th>
        <th>状态</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in orderList" :key="index">
        <td>{{ item.order_id }}</td>
        <td>{{ item.order_time }}</td>
        <td>{{ item.cinema_name }}</td>
        <td>{{ item.movie_name }}</td>
        <td>{{ item.seat }}</td>
        <td>{{ item.price }}</td>
        <td>{{ item.status }}</td>
        <td>
          <n-button>删除</n-button>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script setup>
import { NTable, NButton } from "naive-ui";
import { reqUserList } from "@/api/system";
import { onMounted, ref } from "vue";
const orderList = ref([]);

onMounted(() => {
  getUserList();
});
const getUserList = async () => {
  const orders = [];
  const res = await reqUserList();
  res.data.forEach((item) => {
    if (item.order_list) {
      item.order_list = JSON.parse(item.order_list);
      item.order_list.forEach((order) => {
        orders.push(order);
      });
    }
  });
  orderList.value = orders;
  console.log(orderList.value);
};
</script>
<style scoped lang="scss"></style>
