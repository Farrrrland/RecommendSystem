var sendUserInfo = function(obj) {
    this.$axios.post("/api/login", 
        JSON.stringify({
            userName: obj.user_name,
            passward: obj.passward
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
            console.log(window.sessionStorage.getItem('usr'))
            console.log(window.sessionStorage.getItem('login'))
            window.sessionStorage.setItem("usr", obj.user_name)
            window.sessionStorage.setItem("login", true)
            this.$router_func.toHome(obj)
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