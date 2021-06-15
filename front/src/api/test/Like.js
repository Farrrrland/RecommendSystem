import axios from 'axios'

let addToLike = function (obj, func) {
    axios.post("http://111.229.81.92:8000/index/favourite/insertApi",
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
            // console.log(response);
            if (response.data[0]==201) {
                func(1)
            }else{
                func(0)
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}

export default {
    addToLike
}