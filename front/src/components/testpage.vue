<template>
  <div class="test">
    <img :src=image alt="">
    <el-button type="info" plain @click="show_img()">显示图片</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'testpage',
  data () {
    return {
      image: " "
    }
  },
  methods: {
    show_img() {
      // 测试图片传输
      axios.get('http://111.229.81.92:801/api/public/img/20210408124055.jpg', {
        responseType: 'arraybuffer',
      })
      .then(
        (response) => {
            console.log("image_success!")
            // this.data.image = btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
            // this.data.image = response.data
            // console.log(typeof(response.data));
            return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
      })
      .then(data=>{
        this.image = data;
        console.log(this.image);
      })
      .catch(
        (error) => {
            console.log(error);
      })
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
