import axios from 'axios'

var getList = function(obj) {
    let uid = ""
    if(window.sessionStorage.getItem('login') == 'true') {
        uid = window.sessionStorage.getItem('uid')
    }
    axios.post("http://111.229.81.92:8000/index/item/listApi", 
        JSON.stringify({
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
            var count = response.data[1].result_count
            obj.items.splice(count);
            for(var i=0; i<count; i++) {
                obj.items[i] = {};
                obj.items[i]['fname'] = response.data[1].data[i].fname;
                obj.items[i]['fid'] = response.data[1].data[i].fid;
                obj.items[i]['fimg'] = ""
                getImagebyIndex(obj.items, response.data[1].data[i].fimage, i);
                console.log("item " + i + " finished!");
                console.log("fimg = " + obj.items[i]['fimg'])
            }
        }else {
            console.log(response)
            alert("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

var searchData = function(obj, key, desc, fid, uid) {
    // 查询某条数据，提供key作为参数
    axios.post('http://111.229.81.92:8000/index/item/listApi', {
            fname: key,
            fdesc: desc,
            fid: fid,
            uid: uid
    })
    .then(
        (response) => {
            console.log(response);
            obj = response;
    })
    .catch(
        (error) => {
            console.log(error);
    })
}

var getInfo = function(obj, fid, uid) {
    axios.post("http://111.229.81.92:8000/index/item/listApi", 
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
    .then(
        (response) => {
            if(response.data[0]==200) {
                console.log("got info");
                // console.log(response.data[1].data[0]);
                // console.log(response.data[1].data[0].fname);
                // console.log(response.data[1].data[0].fdesc);
                obj["name"] = response.data[1].data[0].fname;
                obj["desc"] = response.data[1].data[0].fdesc;
                obj["img_url"] += response.data[1].data[0].fimage;
                // console.log(obj["name"]);
                // console.log(obj["desc"]);
                // console.log(response.data[1].data[0].fdesc);
                // getImage(obj["img"], response.data[1].data[0].fimage);
                // console.log("obj is " + obj);
            }else {
                alert("error")
            }
    })
    .catch(
        (error) => {
            console.log(error);
    })
}

var getImagebyIndex = function(obj, img, index) {
    var imgUrl = 'http://111.229.81.92:801/api/public/img/' + img
    axios.get(imgUrl, {
      responseType: 'arraybuffer',
    })
    .then(
      (response) => {
          console.log("image_success!" + imgUrl)
          return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
    })
    .then(data => {
      var temp = obj[index];
      temp.fimg = data;  
      obj.splice(index, 1, temp)
    //   console.log(data);
    })
    .catch(
      (error) => {
          console.log(error);
    })
  }

  var getImage = function(obj, img) {
    var imgUrl = 'http://111.229.81.92:801/api/public/img/' + img
    axios.get(imgUrl, {
      responseType: 'arraybuffer',
    })
    .then(
      (response) => {
          console.log("image_success!" + imgUrl)
          return 'data:image/png;base64,' + btoa(new Uint8Array(response.data).reduce((data, byte) => data + String.fromCharCode(byte), ''))
    })
    .then(data => {
        obj = data;
        console.log(obj);
    })
    .catch(
      (error) => {
          console.log(error);
    })
  }
// 导出接口
export default {
    getList,
    searchData,
    getInfo,
    getImage
}