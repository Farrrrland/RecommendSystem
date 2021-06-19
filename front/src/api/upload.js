import axios from 'axios'
import router_func from '../common/router'

var uploadFood = function(obj) {
    axios.post('http://111.229.81.92:8000/index/item/insertApi', {
        fname: obj.food_name,
        uid: window.sessionStorage.getItem('uid'),
        fdesc: obj.food_desc,
        base64: obj.base64
        // fid:
    })
    .then(
        res =>  {
        obj.$message.success("上传成功")
        console.log(res)
        router_func.toHome(obj)
    })
    .catch(function (err) {
        console.log(err)
    })
}

var modifyFood = function(obj, fid) {
    axios.post('http://111.229.81.92:8000/index/item/insertApi', {
        fname: obj.name,
        uid: window.sessionStorage.getItem('uid'),
        fdesc: obj.desc,
        base64: obj.base64,
        fid: fid
    })
    .then(
        res =>  {
        obj.$message.success("修改成功")
        console.log(res)
        router_func.goBack(obj)
    })
    .catch(function (err) {
        console.log(err)
    })
}

export default {
    uploadFood,
    modifyFood
}