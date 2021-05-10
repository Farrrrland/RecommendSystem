<template>
  <div class='user'>
    <h1> Welcome! User {{$route.params.uid}} </h1>
    <br/>
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "testing testing"
    }
  }
}
</script>

<style scoped>
</style>
