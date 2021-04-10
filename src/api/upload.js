var uploadText = function(str) {
    // 上传文本（待调试）
    this.$axios.post('/api/upload', {
        Text: str
    })
    .then(
        res =>  {
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })
}

var uploadImage = function(obj) {
    // 上传图片（待调试）
    console.log(obj.target.files[0]);
    let param = new FormData();  
    param.append('img', obj.target.files[0]);    // 通过append向form对象添加数据  
    console.log(param.get('img'));      // FormData私有类对象，访问不到，可以通过get判断值是否传进去  
    let config = {  
        headers: {
            'Content-Type': 'multipart/form-data'
        }   // 添加请求头
    }
    this.$axios.post('/api/upload', param, config)  
    .then(
        res => {
            console.log(res.data)
        // if (this.form.url) {  
        //     alert('图片上传成功')  
        // }
    })
    .catch(
        (err) => {
            console.log(err);
    })
}