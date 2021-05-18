<template>
<div>
  <h1>Log In</h1>
  <el-main>

    <img src="../assets/fun2.png" alt="food" style="width:350px; margin-left: 200px" align="left">
    <br/><br/>
    <el-input v-model="user_name" style="width:300px;" placeholder="请输入用户名" clearable></el-input><br/><br/>
    <el-input v-model="password" style="width:300px;" placeholder="请输入密码" clearable show-password>
      <template slot="append">
          <el-button type="info" plain @click="forgetPwd">忘记密码</el-button>
      </template>
    </el-input><br/><br/>
    <el-button type="success" default @click="Cancel">取消</el-button>
    <el-button type="warning" default @click="Login">登录</el-button>
  </el-main>
</div>
</template>


<script>
import login_func from '../api/login'

export default {
  name: 'logIn',
  data() {
    return {
      user_name: "",
      password: ""
    }
  },
  methods: {
    Login() {
      console.log("try to login\n")
      login_func.sendUserInfo(this)
      // this.user_name = ""
      // this.password = ""
    },
    Cancel() {
      this.user_name = ""
      this.password = ""
      this.$router_func.toHome(this)
    },
    forgetPwd() {
      console.log("待完成忘记密码处理方法")
    }
  }
}
</script>

<style scoped>
.main{
	text-align: center;
	width: 400px;
	margin: auto;
}
</style>