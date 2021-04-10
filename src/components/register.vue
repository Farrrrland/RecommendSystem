<template>
<div>
  <el-header>Register</el-header>
  <el-main>
    <el-input v-model="email_address" placeholder="email" clearable></el-input>
    <el-button type="info" plain @click="Email">Verify</el-button>
    <el-input v-model="email_pwd" placeholder="user_name" clearable></el-input>
    <el-input v-model="user_name" placeholder="user_name" clearable></el-input>
    <el-input v-model="password" placeholder="password" clearable show-password></el-input>
<!--    <el-input v-model="password2" placeholder="请确认密码" clearable show-password></el-input>-->
    <el-button type="success" plain @click="Register">注册</el-button>
  </el-main>
</div>
</template>

<script>
// import {sendEmail, userRegister} from '../api/register'
export default {
name: "register",
  data() {
    return {
      user_name: "",
      password: "",
      email_address:"",
      email_pwd: ""
    }
  },
  methods: {
    Email() {
      // register.js
      console.log(this.email_address)
    },
    Register() {
      // register.js
    }
  }
}
</script>

<style scoped>

</style>