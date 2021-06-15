import axios from 'axios'

var deleteRecommend = function (fid) {
    axios.post("http://111.229.81.92:8000/index/item/deleteApi", 
        JSON.stringify({
            fid: fid
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
            // window.$message.success("delete succeeded!")
            window.location.reload()
            
        } else if (response.data[0]==400) {
            console.log("delete failed:")
            console.log(response)
            alert("delete failed")
        }
        else {
            console.log(response)
            alert("error")
        }
    })
    .catch (
        (error) => {
            alert(error);
    })
}

var deleteCollection = function (fid, uid) {
    axios.post("http://111.229.81.92:8000/index/favourite/deleteApi", 
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
        if (response.data[0]==200) {
            console.log("delete succeeded!")
            window.location.reload()
            
        } else if (response.data[0]==400) {
            console.log("delete failed:")
            console.log(response)
            alert("delete failed")
        }
        else {
            console.log(response)
            alert("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}
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
                console.log(response)
                func(0)
            }
        })
        .catch (
            (error) => {
                console.log(error);
            })
}

export default {
    deleteRecommend,
    deleteCollection,
    deleteLike
}