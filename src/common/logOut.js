import router_func from './router'

let logOut = function (obj) {
    window.sessionStorage.clear()
    console.log("clear!")
    console.log(window.sessionStorage.getItem('login'))
    console.log(window.sessionStorage.getItem('uid'))
    router_func.toHome(obj)
}

export default {
    logOut
}