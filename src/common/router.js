// 实现了页面跳转相关方法的封装

var toUser = function (obj) {
    console.log("start_user")
    obj.$router.push('./user')
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