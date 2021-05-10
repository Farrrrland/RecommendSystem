<template>
  <div class='user'>
    this is id:{{$route.params.uid}}
    <br/>
    {{msg}}
  </div>
</template>

<script>
// console.log(this.router.params.uid)
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
