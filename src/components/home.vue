<template>
  <div id="wrapper">
<!--    <h1> home </h1>-->
    <div style="float: left;">
      <button type="text" v-on:click="Upload()">Recommend</button>
    </div>
    <div style="float: right;">
      <button type="text" v-on:click="User()">Log In</button>
      <el-button type="box" v-on:click="Register()">Sign Up</el-button>
    </div>
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
</style>

<script>
import search from '../api/getData'
export default {
  name: 'home',
  data() {
    return {
      counter: 0,
      res: {
        stat: 'failed'
      },
      search_key:""
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
    search_test() {
      // search.dispalyList(this.data)
      search.searchData(this.data, 'AAAAAB', 'BBBBBB', 1, 7)
    },
    Register() {
      this.$router_func.toRegister(this)
    }
  }
}
</script>
