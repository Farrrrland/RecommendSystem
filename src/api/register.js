import axios from 'axios'
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
                console.log(response.data)
                if (response.data.status=="200") {
                    window.sessionStorage.setItem("usr", obj.user_name)
                    window.sessionStorage.setItem("login", true)
                    console.log(window.sessionStorage.getItem('usr'))
                    console.log(window.sessionStorage.getItem('login'))
                    this.$router_func.toHome(obj)
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