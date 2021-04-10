import axios from 'axios'

var dispalyList = function(obj) {
    // 和router.js中的方法一样。调用的时候传参来确定操作对象。
    // 可以把this.data中的某个值作为参数传入这样回调函数能够直接修改data进而进行渲染
    axios.post('http://111.229.81.92:8000/index/item/listApi')
    // {
    //     params: {
    //         name: null,
    //         rule: rule
    //     }
    // }
    .then(
        (response) => {
            obj = response;
            console.log(obj);
        })
    .catch(
        (error) => {
            console.log(error);
    })
}

var searchData = function(obj, key, desc, fid, uid) {
    // 查询某条数据，提供key作为参数
    axios.post('http://111.229.81.92:8000/index/item/listApi', {
            fname: key,
            fdesc: desc,
            fid: fid,
            uid: uid
    })
    .then(
        (response) => {
            console.log(response);
            obj = response;
    })
    .catch(
        (error) => {
            console.log(error);
    })
}

// 导出接口
export default {
    dispalyList,
    searchData
}