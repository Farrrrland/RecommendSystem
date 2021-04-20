<template>
  <div>
    <h1>Change Password</h1>
    <el-main>
      <img src="../assets/long2.png" alt="food" style="width:350px; margin-left: 250px" align="left">
      <br/>

      <br/>
      <br/>
      <el-input v-model="old_password" style="width:300px;" placeholder="请输入现用密码" clearable show-password></el-input><br/><br/>
      <el-input v-model="new_password" style="width:300px;" placeholder="请输入新密码" clearable show-password></el-input><br/><br/>
      <el-input v-model="ver_new_password" style="width:300px;" placeholder="确认新密码" clearable show-password></el-input><br/><br/>
      <el-button type="warning" default @click="Cancel">取消</el-button>
      <el-button type="success" default @click="Submit">确认</el-button>
    </el-main>
  </div>
</template>

<script>
import {changePwd} from '../api/changePwd'
export default {
name: "register",
  data() {
    return {
      old_password: "",
      new_password: "",
      ver_new_password: ""
    }
  },
  methods: {
    Submit() {
      console.log(this.old_password)
      console.log(this.new_password)
      console.log(this.ver_new_password)
      console.log("checking...")
      if (this.new_password != this.ver_new_password) {
        alert("两次输入的密码不一致！")
        console.log("Cancel1")
        // this.old_password = ""
        this.new_password = ""
        this.ver_new_password = ""
      } else if (this.new_password == this.old_password) {
        alert("新密码不能与旧密码相同！")
        console.log("Cancel2")
        // this.old_password = ""
        this.new_password = ""
        this.ver_new_password = ""
      } else {
          console.log("wrong")
          changePwd(this)
      }
    },
    Cancel() {
      console.log("Cancel")
      this.old_password = ""
      this.new_password = ""
      this.ver_new_password = ""
      this.$router_func.toHome(this)
    }
  }
}
</script>

<style scoped>


</style>