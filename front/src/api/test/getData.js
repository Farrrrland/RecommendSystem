import axios from 'axios'

var getLike = function(obj, func) {
    axios.post("http://111.229.81.92:8000/index/favourite/listApi", 
        JSON.stringify({
            uid: obj.uid,
            fid: obj.fid
        }),
        {
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
            }
        }
    )
        .then ((response) => {
            func(response.data[0])
        })
        .catch (
            (error) => {
                console.log(error);
        })
}

// 导出接口
export default {
    getLike
}