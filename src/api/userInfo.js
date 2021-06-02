import axios from 'axios'
// import router_func from '../common/router'
// var getRecommend = function (obj) {
//
// }
export var getUserInfo = function () {
    axios.post("http://111.229.81.92:8000/index/user/profileApi",
        JSON.stringify({
            uid:window.sessionStorage.getItem('uid')
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
            if (response.data[0]=="200") {
                console.log(response.data[1])
                window.sessionStorage.setItem("usremail", response.data[1].data[0].email)
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}

export default {
    getUserInfo
}