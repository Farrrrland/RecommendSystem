<template>
  <div id="home">
    <h1> home </h1>
    
    <button v-on:click="add()">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    <button v-on:click="Home()"> home </button>
    <button v-on:click="User()"> user </button>
    <button v-on:click="Register()"> user </button>
    <button v-on:click="Upload()"> upload </button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      counter: 0
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
    }
    Register() {
      this.$router_func.toRegister(this)
    }
  }
}
</script>
