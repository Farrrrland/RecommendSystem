import axios from 'axios'

let userLogin =  function (obj, func) {
    axios.post("http://111.229.81.92:8000/index/user/loginApi",
        JSON.stringify({
            username: obj.user_name,
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
            if (response.data[0]==200) {
                func(1)
            }else{
                func(0)
            }
            // func(response)
        })
        .catch (
            (error) => {
                console.log(error);
            })

}

export default {
    userLogin
}