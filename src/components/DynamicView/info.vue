<template>
  <div>
    <div class="Info" :style="{
                        width: '100%',
                        height: '100%',
                        position: 'fixed',
                        backgroundImage: 'url(' + img_url + ')', 
                        backgroundSize: '100% 100%',
                        filter: 'blur(10px)'
                      }">
                      
    </div>
    <br/>
    <br/>
    <div class = "content-front">
      <br/>
      <div class = "text-header">
        <p> {{name}} </p>
      </div>
      <div class = "text">
        <p> {{desc}} </p>
      </div>
      <br/>
      <br/>
      <div>
        <el-row>
          <el-col :span='12'>
            <el-button type="box" v-on:click="toHome()">返回</el-button>
          </el-col>
          <el-col :span='12'>
            <el-button type="box" v-on:click="Like()">收藏</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import $getData from '../../api/getData'
import $Like from '../../api/Like'
import $router_func from '../../common/router'
export default {
  data() {
    return {
        img_url: "http://111.229.81.92:801/api/public/img/",
        desc: "",
        name: ""
    }
  },
  methods: {
    toHome() {
      $router_func.goBack(this);
    },
    Like() {
      $Like.checkInfo(this, this.$route.params.fid);
    }
  },
  created: function () {
    console.log("fid = " + this.$route.params.fid);
    let uid = "";
    if(window.sessionStorage.getItem('login') == 'true') {
      uid = window.sessionStorage.getItem('uid')
    }
    $getData.getInfo(this, this.$route.params.fid, uid);
    console.log("img = " + this.img_url);
  }
}
</script>

<style scoped>
  button{
    box-shadow: inset 0 0 0 2px #212931;
    width:50%;
  }
  .text-header {
    font-family: 'Courier New', Courier, monospace;
    color: #050505;
    font-size: 40px;
  }
  .text {
    font-family: 'Courier New', Courier, monospace;
    color: #050505;
    font-size: 18px;
  }
  .content-front {
    background-color:rgba(253, 253, 253, 0.65);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    width: 35%;
    height: 70%;
    border-radius: 5px;
    position: absolute;
    margin: auto 33%;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
  }
</style>