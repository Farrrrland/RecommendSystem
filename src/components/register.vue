<template>
<div>
  <el-header>Register</el-header>
  <el-main>
    <el-input v-model="email_address" placeholder="email" clearable>
      <template slot="append">
        <el-button type="info" plain @click="sendEmail">获取验证码</el-button>
      </template>
    </el-input>
    
    <el-input v-model="user_name" placeholder="user_name" clearable></el-input>
    <el-input v-model="password" placeholder="password" clearable show-password></el-input>
<!--    <el-input v-model="password2" placeholder="请确认密码" clearable show-password></el-input>-->
    <el-button type="danger" plain @click="Cancel">取消</el-button>
    <el-button type="success" plain @click="Register">注册</el-button>
  </el-main>
</div>
</template>

<script>
export default {
name: "register",
  data() {
    return {
      user_name: "",
      password: "",
      email_address:""
      // email_pwd: ""
    }
  },
  methods: {
    sendEmail() {
      console.log("send email")
      // register.js
    },
    Register() {
      console.log("rigister")
      // register.js
    },
    Cancel() {
      console.log("Cancel")
      this.user_name = ""
      this.password = ""
      this.email_address = ""
    }
  }
}
</script>

<style scoped>

</style>