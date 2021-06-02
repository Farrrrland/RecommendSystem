import axios from 'axios'
import $router_func from '../common/router'

var checkInfo = function (obj, fid) {
    let uid = ""
    if(window.sessionStorage.getItem('login') == 'true') {
        uid = window.sessionStorage.getItem('uid')
        axios.post("http://111.229.81.92:8000/index/favourite/listApi", 
        JSON.stringify({
            fid: fid,
            uid: uid
        }),
        {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
        })
        .then ((response) => {
            console.log(response);
            if (response.data[0]==200) {
                let cnt = response.data[1].result_count;
                console.log(cnt);
                if(cnt == 0) {
                    addLike(fid, uid);
                }
                else {
                    alert("您已收藏过该条目")
                }
            }else {
                alert("unknown error")
            }
        })
        .catch (
            (error) => {
                console.log(error);
        })
    }
    else {
        let alt = confirm("请先登录");
        if(alt) {
            $router_func.backtoLogin(obj)
        }
    }
    
}

var addLike = function (fid, uid) {
    axios.post("http://111.229.81.92:8000/index/favourite/insertApi", 
        JSON.stringify({
            fid: fid,
            uid: uid
        }),
        {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
        }
    )
    .then ((response) => {
        console.log(response);
        if (response.data[0]==201) {
            console.log("success, status: " + response.data[1].operation);
        }else if (response.data[0]==400) {
            console.log("error: " + response.data[1]['msg']);
        }else {
            alert("unknown error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

export default {
    checkInfo
}