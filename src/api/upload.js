import axios from 'axios'
// http://111.229.81.92:8000index/item/insertApi
var uploadFood = function(obj) {
    // 上传文本（待调试）
    axios.post('http://111.229.81.92:8000/index/item/insertApi', {
        fname: obj.food_name,
        uid: window.sessionStorage.getItem('uid'),
        fdesc: obj.food_desc,
        base64: obj.base64
        // fid:
    })
    .then(
        res =>  {
        console.log(res)
    })
    .catch(function (err) {
        console.log(err)
    })
}

export default {
    uploadFood
}