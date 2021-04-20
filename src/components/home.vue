<template>
  <div id="wrapper">
<!--    <h1> home </h1>-->
    <div style="float: left;">
      <button type="text" v-on:click="Upload()">Recommend</button>
    </div>
    <div style="float: right;">
      <!-- testing -->
      <button type="text" v-on:click="changePwd()">Change Pwd</button>
      <!-- testing -->
      <button type="text" v-on:click="preLogOut()">Log Out</button>
      <button type="text" v-on:click="User()">Log In</button>
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
      <el-col :span="8" v-for="(o) in 2" :key="o" :offset="2">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../assets/biscuit.png" class="image">
          <div style="padding: 14px;">
            <span>Afternoon tea</span><br/>
            <span>These biscuits are really good for leisure time!</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
            </div>
          </div>
        </el-card>
<!--        <el-card :body-style="{ padding: '0px' }">-->
<!--          <img src="../assets/coffee.png" class="image">-->
<!--          <div style="padding: 14px;">-->
<!--            <span>Coffee</span>-->
<!--            <div class="bottom clearfix">-->
<!--              <time class="time">{{ currentDate }}</time>-->
<!--            </div>-->
<!--          </div>-->
<!--        </el-card>-->
      </el-col>
    </el-row>
    <br />
    <br />

<!--    <button v-on:click="add()">Add 1</button>-->
<!--    <p>The button above has been clicked {{ counter }} times.</p>-->
<!--    <button v-on:click="Home()"> home </button>-->
<!--    <button v-on:click="User()"> user </button>-->
<!--    <button v-on:click="Register()"> register </button>-->
<!--    <button v-on:click="Upload()"> upload </button>-->
<!--    <button v-on:click="search_test()"> 获取测试数据 </button>-->
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
import search from '../api/getData'
import $logOut_func from '../common/logOut'
export default {
  name: 'home',
  data() {
    return {
      counter: 0,
      res: {
        stat: 'failed'
      },
      search_key:"",
      currentDate:new Date(),
      dialogVisible: false
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
      console.log("here1")
      this.$router_func.toChangePwd(this)
    },
    search_test() {
      // search.dispalyList(this.data)
      search.searchData(this.data, 'AAAAAB', 'BBBBBB', 1, 7)
    },
    Register() {
      this.$router_func.toRegister(this)
    },
    logOut() {
      this.dialogVisible = false
      $logOut_func.logOut(this)
    },
    preLogOut() {
      console.log(window.sessionStorage.getItem('login'))
      if(!window.sessionStorage.getItem('login')) {
        alert("您还未登录")
      }
      else {
        this.dialogVisible = true
      }
    }
  }
}
</script>
