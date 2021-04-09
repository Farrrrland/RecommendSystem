<template>
<div>
  <el-header>Login</el-header>
  <el-main>
    <el-input v-model="user_name" placeholder="请输入用户名" clearable></el-input>
    <el-input v-model="password" placeholder="请输入密码" clearable show-password></el-input>
    <el-button type="danger" plain @click="Cancel">取消</el-button>
    <el-button type="success" plain @click="Login">登录</el-button>
  </el-main>
</div>
</template>


<script>
// import login_func from '../api/login'

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
      // if 匹配 则 修改sessionStorage 的 'login' 状态为 true
      // 待测试模块 login.js
      // login_func.sendUserInfo(this)

      // 不含数据传输的测试代码
      console.log(window.sessionStorage.getItem('usr'))
      console.log(window.sessionStorage.getItem('login'))
      window.sessionStorage.setItem("usr", this.user_name)
      window.sessionStorage.setItem("login", true)
      this.$router_func.toHome(this)
    },
    Cancel() {
      this.user_name = ""
      this.password = ""
    }
  }
}
</script>

