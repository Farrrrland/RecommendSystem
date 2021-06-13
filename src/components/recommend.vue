<template>
  <div>
    <el-container>
      <el-aside width="400px" class="el-aside">
        <el-col :span="16" class="aside">
          <img :src="avator_url" alt="avatar" style="width:150px; margin: 50px" align="left"><br>
          <h3>{{user_name}} 的推荐</h3>
          <div class="mymenu">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
              <el-menu-item index="1" v-on:click="User()">
                <i class="el-icon-s-custom"></i>
                <span>个人信息</span>
              </el-menu-item>
              <el-menu-item index="2" v-on:click="recommend()">
                <i class="el-icon-dessert"></i>
                <span>我的推荐</span>
              </el-menu-item>
              <el-menu-item index="3" v-on:click="collection()">
                <i class="el-icon-star-off"></i>
                <span>我的收藏</span>
              </el-menu-item>
              <!-- <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </el-menu-item> -->
            </el-menu>
          </div>
        </el-col>
        <div class="home-icon">
          <el-button icon="el-icon-s-home" v-on:click="Home()"></el-button>
        </div>
      </el-aside>
      <el-main class="el-main">
        <h1>My Recommend</h1>
        <div class="div-main">
          <el-row :gutter="20" class="row-con" justify="space-between">
            <el-col :span="8" v-for="(item,index) in items" :key="index" v-model="items[index]" :offset="2" class="box">
              <el-card class="card">
                <div class="title"><img :src="item.fimg" @click="showInfo(item.fid)"></div>
                <div style="padding: 14px;">
                  <span>{{item.fname}}</span><br/>
                  <span>Food id is {{item.fid}}!</span><br/>
                  <i class="el-icon-delete" circle @click="deleteRec(item.fid, item.fname)"></i>
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
import $getData from '../api/getData'
import $delete from '../api/delete'
export default {
  data() {
    return {
      user_name: "",
      items:[],
      avator_url: "https://ui-avatars.com/api/",
    }
  },
  methods:{
    showInfo(fid) {
      console.log("show info fid " + fid)
      this.$router_func.toInfo(this, fid)
    },
    Home() {
      this.$router_func.toHome(this)
    },
    User() {
      this.$router_func.toUser(this)
    },
    recommend() {
      this.$router_func.toRecommend(this)
    },
    collection() {
      this.$router_func.toCollection(this)
    },
    deleteRec(fid, fname) {
      var del = confirm("确认删除" + fname + "吗？删除后不可恢复")
      if (del == true) {
        console.log("delete recommend id " + fid)
        $delete.deleteRecommend(fid)
      } else {
        this.$message.error("您取消了操作")
      }
    }
  },
  created: function () {
    this.avator_url += window.sessionStorage.getItem('usrname')
    this.avator_url += "/64/6d94bb/ffffff"
    console.log("avator_url:" + this.avator_url)
    getUserInfo()
    if (window.sessionStorage.getItem('login') == 'true') {
      this.user_name = window.sessionStorage.getItem('usrname')
    }
    // else {
    //   this.msg = "User status err! Contact administrator!"
    // }
    $getData.getRecommend(this)
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
.home-icon{
  position:relative;
  top:540px;
  left:-150px;
}
.div-main{
  width:700px;
  position:relative;
  top:40px;
  left:250px;
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
  display: flex;
  flex-direction: column;
}
.el-card{
  margin-bottom:20px;
}
.title {
  display: flex;
  justify-content: center;
  align-items: center;
}
.title img {
  width: 100%;
}
</style>