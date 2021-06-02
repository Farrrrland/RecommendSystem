import axios from 'axios'
// import router_func from '../common/router'
// var getRecommend = function (obj) {
//
// }
export var getUserInfo = function (obj) {
    axios.post("http://111.229.81.92:8000/index/user/profileApi",
        JSON.stringify({
            uid:obj.uid
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
                console.log(response.data)
                window.sessionStorage.setItem("usremail", response.data[0])
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