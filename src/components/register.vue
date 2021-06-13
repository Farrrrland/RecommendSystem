<template>
  <div>
    <h1>Sign Up</h1>
    <el-main>
      <img src="../assets/long2.png" alt="food" style="width:350px; margin-left: 250px" align="left">
      <br/>

      <el-input v-model="email_address" style="width:300px;" placeholder="请输入邮箱" clearable>
        <template slot="append">
          <el-button type="info" plain @click="Email">获取验证码</el-button>
        </template>
      </el-input>
      <br/>
      <br/>
      <el-input v-model="user_name" @input="user_name=user_name.replace(/\s+/, '')" style="width:300px;" placeholder="请输入用户名" clearable></el-input><br/><br/>
      <el-input v-model="password" @input="password=password.replace(/\s+/, '')" style="width:300px;" placeholder="请输入密码" clearable show-password></el-input><br/><br/>
      <el-input v-model="ver_code"  @input="ver_code=ver_code.replace(/\s+/, '')" style="width:300px;" placeholder="请输入验证码" clearable></el-input><br/><br/>
      <el-button type="warning" default @click="Cancel">取消</el-button>
      <el-button type="success" default @click="Register">注册</el-button>
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
      alert("验证码已发送，请注意查收邮件。")
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