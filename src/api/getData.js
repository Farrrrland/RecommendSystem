var dispalyList = function(obj, rule) {
    // 和router.js中的方法一样。调用的时候传参来确定操作对象。
    // 可以把this.data中的某个值作为参数传入这样回调函数能够直接修改data进而进行渲染
    axis.get('/api/data'), {
        params: {
            name: null,
            rule: rule
        }
    }
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

var searchData = function(obj, key, rule) {
    // 查询某条数据，提供key作为参数
    axis.get('/api/data', {
        params: {
            name: key,
            rule: rule
        }
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