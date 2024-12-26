<template>
  <n-button style="margin-bottom: 10px" @click="addUser">添加用户</n-button>
  <n-modal
    v-model:show="showModal"
    preset="card"
    :style="bodyStyle"
    title="添加用户"
    size="huge"
    :bordered="false"
  >
    <!-- 用户名 -->
    <n-input
      v-model:value="value"
      style="margin-bottom: 40px"
      type="text"
      placeholder="请输入用户名"
    />
    <!-- 密码 -->
    <n-input
      type="password"
      show-password-on="mousedown"
      placeholder="密码"
      style="margin-bottom: 40px"
      v-model:value="pwdValue"
      :maxlength="8"
    />
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
      <n-button @click="addNewUser">添加</n-button>
    </div>
  </n-modal>
  <n-table :single-line="false">
    <thead>
      <tr>
        <th>用户名</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in userList" :key="index">
        <td>{{ item.username }}</td>
        <td>
          <n-button @click="delUser(item.id)">删除</n-button>
        </td>
      </tr>
    </tbody>
  </n-table>
</template>
<script setup>
import { NTable, NButton, NModal, NRadio, NInput } from "naive-ui";
import { reqUserList, reqDelUser, reqAddNewUser } from "@/api/system";
import { onMounted, ref } from "vue";
const userList = ref([]);
const showModal = ref(false);
const checkedValueRef = ref(null);
const value = ref("");
const pwdValue = ref("");
const checkedValue = checkedValueRef;
const bodyStyle = {
  width: "600px",
  height: "400px",
};

onMounted(() => {
  getUserList();
});
const getUserList = async () => {
  const res = await reqUserList();
  userList.value = res.data;
};
const delUser = async (id) => {
  const res = await reqDelUser(id);
  console.log(res);
  if (res.status === 200) {
    alert("删除成功");
    getUserList();
  } else {
    alert("删除失败");
  }
};
const addUser = () => {
  showModal.value = true;
};
const handleChange = (e) => {
  checkedValueRef.value = e.target.value;
};
const addNewUser = () => {
  console.log(value.value, pwdValue.value, checkedValue.value);

  if (!value.value || !pwdValue.value || !checkedValue.value) {
    alert("请填写完整信息");
    return;
  }

  checkedValue.value = checkedValue.value === "超级管理员" ? 1 : 0;

  showModal.value = false;

  const data = JSON.stringify({
    username: value.value,
    password: pwdValue.value,
    is_admin: checkedValue.value,
  });

  const res = reqAddNewUser(data);

  res
    .then((response) => {
      if (response.status === 200) {
        alert("添加成功");
      } else if (
        response.status === 400 &&
        response.data.message === "Username already exists"
      ) {
        alert("用户名已存在，请选择其他用户名");
      } else {
        alert("添加失败");
      }
    })
    .catch((error) => {
      console.error("请求失败：", error);
      alert("用户名已存在，请选择其他用户名");
    });

  getUserList();
  value.value = "";
  pwdValue.value = "";
  checkedValue.value = null;
};
</script>
<style scoped lang="scss"></style>
