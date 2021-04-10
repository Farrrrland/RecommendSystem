<template>
<div>
  <el-header>Register</el-header>
  <el-main>
    <el-input v-model="user_name" placeholder="请输入用户名" clearable></el-input>
    <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
<!--    <el-input v-model="password2" placeholder="请确认密码" clearable show-password></el-input>-->
    <el-button type="success" plain @click="Register">注册</el-button>
  </el-main>
</div>
</template>

<script>
export default {
name: "register"
}
</script>

<style scoped>

</style>