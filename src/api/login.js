import axios from 'axios'
import router_func from '../common/router'
var sendUserInfo = function(obj) {
    axios.post("http://111.229.81.92:8000/index/user/loginApi", 
        JSON.stringify({
            username: obj.user_name,
            password: obj.password
        }),
        {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
        }
    )
    .then ((response) => {
        if (response.data[0]==200) {
            console.log("login success!")
            console.log(response)
            window.sessionStorage.setItem("uid", response.data[1].uid)
            window.sessionStorage.setItem("login", true)
            window.sessionStorage.setItem("usrname", obj.user_name)
            console.log(window.sessionStorage.getItem('uid'))
            console.log(window.sessionStorage.getItem('usrname'))
            console.log(window.sessionStorage.getItem('login'))
            router_func.toHome(obj)
        }else {
            console.log(response)
            obj.$message.error("用户不存在或密码错误")
            obj.user_name = ""
            obj.password = ""
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

export function userLogin(obj) {
    axios.post("http://111.229.81.92:8000/index/user/loginApi",
        JSON.stringify({
            username: obj.user_name,
            password: obj.password
        }),
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    )
        .then ((response) => {
            if (response.data[0]==200) {
                return 1
            }else {
                return 0
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}



export default {
    sendUserInfo
}