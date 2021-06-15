let changePassword = function(obj, func) {
    // url待定
    console.log("change pwd function here")
    axios.post("http://111.229.81.92:8000/index/user/passwordChangeApi",
        JSON.stringify({
            uid: obj.uid,
            oldpassword: obj.old_password,
            password: obj.new_password
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
                console.log("pwd changed!")
                // console.log(response)
                func(1)
            } else {
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
    changePassword
}