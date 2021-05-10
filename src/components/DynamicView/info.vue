<template>
  <div class='info'>
    <h1> Info page for food No.{{$route.params.fid}} </h1>
    <br/>
    {{msg}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      disc_msg: "This is a discription of food"
    }
  }
}
</script>
