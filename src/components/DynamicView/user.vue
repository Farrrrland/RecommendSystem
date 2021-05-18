<template>
  <div class='user'>
    <h1> {{msg}} </h1>
    <h2> your uid is {{$route.params.uid}} </h2>
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
      this.msg = "Welcome, " + window.sessionStorage.getItem('usrname')
    }
    else {
      this.msg = "User status err! Contact administrator!"
    }
  }
}
</script>

<style scoped>
</style>
