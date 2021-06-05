// 实现了页面跳转相关方法的封装

var toUser = function (obj) {
    // main.js中貌似没法直接对动态路由做login判断
    // 于时在跳转方案中实现了登陆状况的判断
    if (window.sessionStorage.getItem('login') == 'true') {
        console.log(window.sessionStorage.getItem('uid'))
        var path = './user/' + window.sessionStorage.getItem('uid')
        obj.$router.push(path)
    } else {
        console.log("未登录：" + window.sessionStorage.getItem('login'))
        obj.$router.push('./login')
    }
}

var toHome = function (obj) {
    obj.$router.push('./home')
}

var toUpload = function (obj) {
    obj.$router.push('./upload')
}

var toLogin = function (obj) {
    obj.$router.push('./login')
}

var toRegister = function (obj) {
    obj.$router.push('./register')
}

var toRecommend = function (obj) {
    obj.$router.push('./recommend')
}

var toCollection = function (obj) {
    obj.$router.push('./collection')
}

var toChangePwd = function (obj) {
    obj.$router.push('./changePwd')
}

var toInfo = function (obj, fid) {
    var path = './info/' + fid
    obj.$router.push(path)
}

var goBack = function (obj) {
    obj.$router.back(-1);
}

var backtoLogin = function (obj) {
    obj.$router.push('../login')
}

// 导出接口
export default {
    toUser,
    toHome,
    toUpload,
    toLogin,
    toRegister,
    toChangePwd,
    toCollection,
    toRecommend,
    toInfo,
    goBack,
    backtoLogin
}