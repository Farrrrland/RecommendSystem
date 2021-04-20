import axios from 'axios'
import router_func from '../common/router'

export var changePwd = function(obj) {
    // url待定
    console.log("change pwd function here")
    axios.post("http://111.229.81.92:8000/index/user/passwordChangeApi",
        JSON.stringify({
            uid: window.sessionStorage.getItem('uid'),
            oldpassword: obj.old_password,
            password: obj.new_password
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
            alert("修改密码成功，请重新登陆！")
            console.log("pwd changed!")
            // console.log(response)
            router_func.toLogin(obj)
        } else {
            console.log(response)
            alert("原密码错误")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

export default {
    changePwd
}