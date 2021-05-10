// 实现了页面跳转相关方法的封装

var toUser = function (obj) {
    // main.js中貌似没法直接对动态路由做login判断
    // 于时在跳转方案中实现了登陆状况的判断
    console.log("start_user")
    if (window.sessionStorage.getItem('login') == 'true') {
        console.log(window.sessionStorage.getItem('usr'))
        var path = './user/' + window.sessionStorage.getItem('uid')
        console.log("path =" + path)
        obj.$router.push(path)
    } else {
        console.log("未登录：" + window.sessionStorage.getItem('login'))
        console.log("start_login")
        obj.$router.push('./login')
        console.log("end_login")
    }
    console.log("end_user")
}

var toHome = function (obj) {
    console.log("start_home")
    obj.$router.push('./home')
    console.log("end_home")
}

var toUpload = function (obj) {
    console.log("start_upload")
    obj.$router.push('./upload')
    console.log("end_upload")
}

var toLogin = function (obj) {
    console.log("start_login")
    obj.$router.push('./login')
    console.log("end_login")
}

var toRegister = function (obj) {
    console.log("start_register")
    obj.$router.push('./register')
    console.log("end_register")
}

var toChangePwd = function (obj) {
    console.log("start_changepwd")
    obj.$router.push('./changePwd')
    console.log("end_changepwd")
}

// 导出接口
export default {
    toUser,
    toHome,
    toUpload,
    toLogin,
    toRegister,
    toChangePwd
}