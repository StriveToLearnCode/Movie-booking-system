<template>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>用户名</th>
        <th>用户权限</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in userList" :key="index">
        <td>{{ item.username }}</td>
        <td>{{ item.is_admin == 1 ? "超级管理员" : "普通用户" }}</td>
        <td>
          <n-button @click="updateRoot(item.id)">修改权限</n-button>
        </td>
      </tr>
    </tbody>
  </n-table>

  <n-modal
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="修改权限"
    size="huge"
    :bordered="false"
  >
    <!-- is_admin -->
    <n-radio
      :checked="checkedValue === '超级管理员'"
      value="超级管理员"
      name="basic-demo"
      @change="handleChange"
    >
      超级管理员
    </n-radio>
    <n-radio
      :checked="checkedValue === '普通用户'"
      value="普通用户"
      style="margin-bottom: 40px"
      name="basic-demo"
      @change="handleChange"
    >
      普通用户
    </n-radio>
    <div>
      <n-button @click="addNewUser">修改</n-button>
    </div>
  </n-modal>
</template>
<script setup>
import { NTable, NButton, NModal, NRadio } from "naive-ui";
import { reqUserList, reqChangeRoot } from "@/api/system";
import { onMounted, ref } from "vue";
const userList = ref([]);
const showModal = ref(false);
const userId = ref(null);
const bodyStyle = {
  width: "300px",
  height: "200px",
};
const checkedValueRef = ref(null);
const checkedValue = checkedValueRef;
onMounted(() => {
  getUserList();
});
const getUserList = async () => {
  const res = await reqUserList();

  userList.value = res.data;
};
const updateRoot = (id) => {
  showModal.value = true;
  userId.value = id;
};
const handleChange = (e) => {
  checkedValueRef.value = e.target.value;
};
const addNewUser = async () => {
  showModal.value = false;

  checkedValue.value = checkedValue.value === "超级管理员" ? 1 : 0;
  const data = {
    id: userId.value,
    is_admin: checkedValue.value,
  };

  const res = await reqChangeRoot(data);

  res.status === 200 ? alert("修改成功") : alert("修改失败");
  getUserList();
};
</script>
<style scoped lang="scss"></style>
