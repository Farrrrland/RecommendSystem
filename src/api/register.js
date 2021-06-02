import axios from 'axios'
import router_func from '../common/router'
export var sendEmail = function (obj) {
    obj.email_password = Math.random().toString().slice(-6);
    axios.post("http://111.229.81.92:8000/index/user/emailSendApi",
        JSON.stringify({
            email_address:obj.email_address,
            email_password: obj.email_password
        }),
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    )
        .then ((response) => {
            console.log(response.data)
            if (response.data.status=="200") {
                console.log("email sent!")
                console.log("true ver_code:" + obj.email_password)
                this.$alert('Verification code sent!', 'Message', {
                    confirmButtonText: 'OK',
                    callback: action => {
                        this.$message({
                            type: 'info',
                            message: `action: ${ action }`
                        });
                    }
                });
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}

export var userRegister = function (obj) {
    // var pwd = window.sessionStorage.getItem('email_pwd')
    if (obj.ver_code == obj.email_password) {
        console.log(obj.user_name)
        console.log(obj.password)
        axios.post("http://111.229.81.92:8000/index/user/registerApi",
            JSON.stringify({
                username: obj.user_name,
                password: obj.password,
                email: obj.email_address
            }),
            {
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            }
        )
            .then ((response) => {
                console.log(response)
                if (response.data[0]=="201") {
                    alert("注册成功")
                    console.log("usr status:")
                    window.sessionStorage.setItem("uid", response.data[1].uid)
                    window.sessionStorage.setItem("login", true)
                    window.sessionStorage.setItem("usremail", obj.email_address)
                    console.log(window.sessionStorage.getItem('uid'))
                    console.log(window.sessionStorage.getItem('login'))
                    router_func.toHome(obj)
                }
            })
            .catch (
                (error) => {
                    console.log(error);
                })
    }else {
        // this.$alert('Please enter the correct verification code!', 'Error', {
        //     confirmButtonText: 'OK',
        //     callback: action => {
        //         this.$message({
        //             type: 'info',
        //             message: `action: ${ action }`
        //         });
        //     }
        //
        // });
        console.log("wrong ver_code")
    }

}

export default {
    sendEmail,
    userRegister
}