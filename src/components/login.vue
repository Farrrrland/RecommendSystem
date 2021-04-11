<template>
<div class = "main">
  <h1>Login</h1>
  <el-main>
    <el-input v-model="user_name" placeholder="请输入用户名" clearable></el-input>
    <br />
    <br />
    <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
    <br />
    <br />
    <el-button type="danger" style="width:150px" plain @click="Cancel">取消</el-button>
    <el-button type="success" style="width:150px" plain @click="Login">登录</el-button>
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
      this.user_name = ""
      this.password = ""
    },
    Cancel() {
      this.user_name = ""
      this.password = ""
      this.$router_func.toHome(this)
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