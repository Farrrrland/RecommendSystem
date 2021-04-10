var sendEmail = function (obj) {
    var email_pdw = Math.random().toString().slice(-6);
    this.$axios.post("111.229.81.92:8000/index/User/emailApi",
        JSON.stringify({
            email_address:obj.email_address,
            email_pdw: email_pdw
        }),
        {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }
    )
        .then ((response) => {
            if (response.data.status=="200") {
                console.log("email sent!")
                window.sessionStorage.setItem("email_pdw", email_pdw)
                console.log("pdw:" + email_pdw)
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}

var userRegister = function (obj) {
    pwd = window.sessionStorage.getItem('email_pwd')
    if (obj.email_pwd == pwd) {
        
    }
    this.$axios.post("111.229.81.92:8000/index/User/registerApi",
        JSON.stringify({
            userName: obj.user_name,
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
}