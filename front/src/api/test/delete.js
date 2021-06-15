import axios from 'axios'

var deleteLike = function (obj, func) {
    axios.post("http://111.229.81.92:8000/index/favourite/deleteApi",
        JSON.stringify({
            fid: obj.fid,
            uid: obj.uid
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
                func(1)
            } else{
                // console.log(response)
                func(0)
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}

export default {
    deleteLike
}