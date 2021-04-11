<template>
<div>
  <h1>Register</h1>
  <el-main>
    <el-input v-model="email_address" placeholder="请输入邮箱" clearable>
      <template slot="append">
        <el-button type="info" plain @click="Email">获取验证码</el-button>
      </template>
    </el-input>
    <el-input v-model="user_name" placeholder="请输入用户名" clearable></el-input>
    <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
    <el-input v-model="ver_code" placeholder="请输入验证码" clearable show-password></el-input>
<!--    <el-input v-model="password2" placeholder="请确认密码" clearable show-password></el-input>-->
    <el-button type="danger" plain @click="Cancel()">取消</el-button>
    <el-button type="success" plain @click="Register">注册</el-button>
  </el-main>
</div>
</template>

<script>
import {sendEmail, userRegister} from '../api/register'
export default {
name: "register",
  data() {
    return {
      user_name: "",
      password: "",
      email_address: "",
      ver_code: "", // verification code entered by user
      email_password: "", // random verification code generated
    }
  },
  methods: {
    Email() {
      console.log("send email")
      sendEmail(this)
      console.log(this.email_address)
    },
    Register() {
      console.log("register")
      userRegister(this)
    },
    Cancel() {
      console.log("Cancel")
      this.user_name = ""
      this.password = ""
      this.email_address = ""
      this.ver_code = ""
      this.$router_func.toHome(this)
    }
  }
}
</script>

<style scoped>

</style>