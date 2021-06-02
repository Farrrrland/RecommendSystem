<template>
  <div class='user'>

    <h1> Home Page </h1>
<!--    <h2> your uid is {{$route.params.uid}} </h2>-->

    <div class='user-profile'>
<!--      <div class="block" >-->
<!--        <el-avatar shape="square" :size="50" :src="../../assets/avatar.jpg"></el-avatar>-->
<!--      </div>-->
    </div>
    <el-row class="tac">
      <el-col :span="4">
        <br>
      </el-col>
      <el-col :span="4">
        <img src="../../assets/avatar.jpg" alt="avatar" style="width:150px; margin: 50px" align="left"><br>
        <h3>{{msg}} 的个人主页</h3>
        <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-s-custom"></i>
            <span>个人信息</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-dessert"></i>
            <span>我的推荐</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-star-on"></i>
            <span>我的收藏</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span>设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span=12>
        <div class="profile-text" style="margin: 80px" align="left">
          用户名：{{msg}}
          <br>
          邮箱：evelyn0414@foxmail.com
          <br>
          推荐数：1

        </div>






      </el-col>
    </el-row>

      <br/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: ""
    }
  },
  created: function () {
    if(window.sessionStorage.getItem('login') == 'true') {
      this.msg = window.sessionStorage.getItem('usrname')
    }
    else {
      this.msg = "User status err! Contact administrator!"
    }
  },
  handleOpen(key, keyPath) {
    console.log(key, keyPath);
  },
  handleClose(key, keyPath) {
    console.log(key, keyPath);
  }
}


</script>

<style scoped>
</style>
