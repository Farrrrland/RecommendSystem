<template>
  <div id="wrapper">
    <div style="float: left;">
      <button type="text" v-on:click="Upload()">Recommend</button>
    </div>
    <div style="float: right;">
      <button type="text" v-on:click="changePwd()">Change Pwd</button>
      <button type="text" v-on:click="preLogOut()">Log Out</button>
      <button type="text" v-on:click="User()">{{usr_bar}}</button>
      <el-button type="box" v-on:click="Register()">Sign Up</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>确认注销吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logOut()">确 定</el-button>
      </span>
    </el-dialog>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>
      <el-input
          style="width:300px;"
          placeholder="Type something"
          v-model="search_key">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
      <el-button type="box" icon="el-icon-search">Search</el-button>
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    
    <el-row>
      <el-col :span="8" v-for="(item,index) in items" :key="index" v-model="items[index]" :offset="2">
          <el-card :body-style="{ padding: '5px' }">
            <img :src="item.fimg" class="image" @click="showInfo(item.fid)">
            <div style="padding: 14px;">
              <span>{{item.fname}}</span><br/>
              <span>Food id is {{item.fid}}!</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
              </div>
            </div>
          </el-card>
          <br />
      </el-col>
    </el-row>

    <br />
    <br />
  </div>
</template>

<style scoped>
button{
  box-shadow: inset 0 0 0 2px #212931;
}
.time {
font-size: 13px;
color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
  cursor: pointer;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}


</style>

<script>
import $getData from '../api/getData'
import $logOut_func from '../common/logOut'
export default {
  name: 'home',
  data() {
    return {
      counter: 0,
      items: [],
      search_key:"",
      currentDate: new Date(),
      dialogVisible: false,
      usr_bar:""
    }
  },
  methods: {
    add() {
      this.counter += 1
    },
    Home() {
      this.$router_func.toHome(this)
    },
    User() {
      this.$router_func.toUser(this)
    },
    Upload() {
      this.$router_func.toUpload(this)
    },
    changePwd() {
      this.$router_func.toChangePwd(this)
    },
    search_test() {
      // search.dispalyList(this.data)
      // $getData.searchData(this.data, 'AAAAAB', 'BBBBBB', 1, 7)
    },
    Register() {
      this.$router_func.toRegister(this)
    },
    logOut() {
      this.dialogVisible = false
      $logOut_func.logOut(this)
      location.reload()
    },
    preLogOut() {
      console.log(window.sessionStorage.getItem('login'))
      if(!window.sessionStorage.getItem('login')) {
        alert("您还未登录")
      }
      else {
        this.dialogVisible = true
      }
    },
    showInfo(fid) {
      console.log("show info fid " + fid)
      this.$router_func.toInfo(this, fid)
    }
  },
  created: function () {
    if(window.sessionStorage.getItem('login') == 'true') {
      this.usr_bar = "User Home"
    }
    else {
      this.usr_bar = "Log In"
    }
    console.log("items = " + this.items)
    $getData.getList(this)
    console.log(this.items)
  }
}
</script>
