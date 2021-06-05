<template>
  <div>
    <el-container>
      <el-aside width="400px" class="el-aside">
        <el-col :span="16" class="aside">
          <img src="../assets/avatar.jpg" alt="avatar" style="width:150px; margin: 50px" align="left"><br>
          <h3>{{user_name}} 的推荐</h3>
          <div class="mymenu">
            <el-menu
                default-active="2"
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
                <i class="el-icon-star-off"></i>
                <span>我的收藏</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-aside>
      <el-main class="el-main">
        <h1>My Recommend</h1>
        <div class="div-main">
          <el-row gutter="20" class="row-con">
            <el-col :span="8" v-for="(item,index) in items" :key="index" v-model="items[index]" :offset="2" class="box">
              <el-card class="card">
                <div class="title"><img :src="item.fimg" @click="showInfo(item.fid)"></div>
                <div style="padding: 14px;">
                  <span>{{item.fname}}</span><br/>
                  <span>Food id is {{item.fid}}!</span>
                  <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import {getUserInfo} from '../api/userInfo.js'
export default {
  data() {
    return {
      user_name: "",
      imgList:[]
    }
  },
  created: function () {
    getUserInfo()
    if (window.sessionStorage.getItem('login') == 'true') {
      this.user_name = window.sessionStorage.getItem('usrname')
    }
    // else {
    //   this.msg = "User status err! Contact administrator!"
    // }

  }
}
</script>

<style scoped>
.el-aside {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgb(250,241,255);
  background: linear-gradient(-180deg, rgba(250,241,255,1) 0%, rgba(226,255,249,1) 48%, rgba(210,233,255,1) 91%);
}
.el-main{
  position: absolute;
  left: 200px;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}
.aside{
  position: absolute;
  left:50px;
}
.mymenu{
  width: 50%;
  margin: auto;
}
.mymenu /deep/ .el-menu--fit{
  padding: 20px;
}
.mymenu /deep/  .el-menu, .el-menu__expanded-cell {
  background-color: transparent;
}

.mymenu /deep/ .el-menu tr {
  background-color: transparent!important;
}
.mymenu /deep/  .el-menu--enable-row-transition .el-menu__body td, .el-menu .cell{
  background-color: transparent;
}
.el-menu::before {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0px;
}
.row-con {
  display: flex;
  flex-flow: row wrap;
}
.row-con .card {
  height: 100%;
}
.box {
  height: 80%;
  /*overflow-y: auto;*/
  display: flex;
  flex-direction: column;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title img {
  width: 35%;
}
</style>