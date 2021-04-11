<template>
    
    <div>
        <h1> upload </h1>
        <div class="main">
        <el-input v-model="food_name" placeholder="请输入食物名" clearable></el-input>
        <br />
        <br />
        <el-input type="textarea" :autosize="{ minRows: 7}" v-model="food_desc" placeholder="请输入推荐理由" clearable></el-input>
        <el-upload
            list-type="picture"
            action=''
            accept=".jpg, .png"
            :limit="1"
            :auto-upload="false"
            :file-list="fileList"
            :on-change="getFile"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleUploadRemove"
            :width="10"
        >
            <br />
            <el-dialog :visible.sync="dialogVisible" append-to-body>
                <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
            <el-button type="info" plain >选择食物图片</el-button>
            <div slot="tip" class="el-upload__tip">只能上传一张jpg/png文件</div>
        </el-upload>
        <el-row>
            <el-button type="danger">取消</el-button>
            <el-button type="success" @click="upLoad()">上传</el-button>
        </el-row>
        </div>
    </div>

</template>

<script>
import upload_func from '../api/upload'
export default {
  name: 'upload',
  data() {
    return {
        food_name: "",
        food_desc: "",
        fileList: [],
        dialogImageUrl: "",
        dialogVisible: false,
        base64: ""
    }
  },
  methods: { 
      getFile(file) {
        console.log(this.fileList)
        this.getBase64(file.raw).then(res => {
            console.log("success")
            console.log("res = " + res)
            const params = res.split(',')
            // console.log(params, 'params')
            if (params.length > 0) {
                this.base64 = params[1]
                // console.log(this.base64)
                // console.log("par:")
                // console.log(params)
                console.log(typeof(this.base64))
            }
        })
      },
      getBase64(file) {
        return new Promise(function (resolve, reject) {
            const reader = new FileReader()
            let imgResult = ''
            reader.readAsDataURL(file)
            reader.onload = function () {
                imgResult = reader.result
            }
            reader.onerror = function (error) {
                reject(error)
            }
            reader.onloadend = function () {
                resolve(imgResult)
            }
        })
      },
      handleUploadRemove(fileList) {
        fileList = []
        this.dialogImageUrl = "",
        this.dialogVisible = false
        console.log(fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      upLoad() {
          upload_func.uploadFood(this)
      }
  }
}
</script>

<style scoped>
.main{
	text-align: center;
	width: 400px;
	margin: auto;
}
</style>