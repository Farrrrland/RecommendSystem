<template>
  <div id="app">
    <button v-on:click="increment()"> {{count}} </button>
    <router-view/>
  </div>
</template>

<script>
// import Home from './components/home'


export default {
  name: 'App',
  components: {
    // Home
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count ++
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
