<!--<template>-->
<!--<div>-->
<!--  <h1>Sign Up</h1>-->
<!--  <el-main>-->

<!--    <el-container>-->
<!--&lt;!&ndash;      <el-aside width="500px">&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;        <el-image&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;            style="width: 200px; height: 400px"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;            src="../assets/long.png"&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;&lt;!&ndash;            fit="contain"></el-image>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;        <img src="../assets/long.png" alt="food" style="width:300px">&ndash;&gt;-->
<!--&lt;!&ndash;      </el-aside>&ndash;&gt;-->
<!--&lt;!&ndash;      <el-container>&ndash;&gt;-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="6">-->
<!--          <el-input v-model="email_address" span="6" placeholder="请输入邮箱" clearable>-->
<!--            <template slot="append">-->
<!--              <el-button type="info" plain @click="Email">获取验证码</el-button>-->
<!--            </template>-->
<!--          </el-input>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--        <br/>-->
<!--        <el-row :gutter="20">-->
<!--          <el-col :span="6"></el-col>-->
<!--        <el-input v-model="user_name" span="6" placeholder="请输入用户名" clearable></el-input>-->
<!--        </el-row>-->
<!--        <el-input v-model="password" span="6" placeholder="请输入密码" clearable show-password></el-input>-->
<!--        <el-input v-model="ver_code" style="width:300px;" placeholder="请输入验证码" clearable show-password></el-input><br/>-->
<!--        <el-button type="danger" plain @click="Cancel()">取消</el-button>-->
<!--        <el-button type="success" plain @click="Register">注册</el-button>-->
<!--      </el-container>-->
<!--&lt;!&ndash;    </el-container>&ndash;&gt;-->

<!--  </el-main>-->
<!--</div>-->
<!--</template>-->
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
      <el-input v-model="user_name" style="width:300px;" placeholder="请输入用户名" clearable></el-input><br/><br/>
      <el-input v-model="password" style="width:300px;" placeholder="请输入密码" clearable show-password></el-input><br/><br/>
      <el-input v-model="ver_code" style="width:300px;" placeholder="请输入验证码" clearable show-password></el-input><br/><br/>
      <el-button type="success" default @click="Cancel()">取消</el-button>
      <el-button type="warning" default @click="Register">注册</el-button>
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