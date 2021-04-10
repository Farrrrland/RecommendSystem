<template>
  <div id="home">
    <h1> home </h1>
    
    <button v-on:click="add()">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <button v-on:click="Home()"> home </button>
    <button v-on:click="User()"> user </button>
    <button v-on:click="Register()"> user </button>
    <button v-on:click="Upload()"> upload </button>
    <button v-on:click="search_test()"> 获取测试数据 </button>
  </div>
</template>

<script>
import search from '../api/getData'
export default {
  name: 'home',
  data() {
    return {
      counter: 0,
      res: {
        stat: 'failed'
      }
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
