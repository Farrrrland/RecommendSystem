import axios from 'axios'

var getList = function(obj) {
    let uid = 0
    if(window.sessionStorage.getItem('login') == 'true') {
        uid = window.sessionStorage.getItem('uid')
    }
    axios.post("http://111.229.81.92:8000/index/item/recommendApi", 
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
                console.log("item " + i + " has fid " + obj.items[i]['fid']);
            }
        }else {
            console.log(response)
            console.log("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

var getCollection = function(obj) {
    let uid = 0
    if(window.sessionStorage.getItem('login') == 'true') {
        uid = window.sessionStorage.getItem('uid')
    }
    axios.post("http://111.229.81.92:8000/index/favourite/listApi", 
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
            console.log("response is as follows")
            console.log(response)
            var count = response.data[1].result_count
            obj.items.splice(count);
            for(var i=0; i<count; i++) {
                obj.items[i] = {};
                obj.items[i]['fname'] = response.data[1].data[i].fname;
                obj.items[i]['fid'] = response.data[1].data[i].fid;
                obj.items[i]['fimg'] = ""
                getImagebyIndex(obj.items, response.data[1].data[i].fimage, i);
                console.log("item " + i + " has fid " + obj.items[i]['fid']);
            }
        }else {
            console.log(response)
            console.log("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

var getRecommend = function(obj) {
    let uid = 0
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
            console.log("res as follows")
            console.log(response)
            var count = response.data[1].result_count
            obj.items.splice(count);
            for(var i=0; i<count; i++) {
                obj.items[i] = {};
                obj.items[i]['fname'] = response.data[1].data[i].fname;
                obj.items[i]['fid'] = response.data[1].data[i].fid;
                obj.items[i]['fimg'] = ""
                getImagebyIndex(obj.items, response.data[1].data[i].fimage, i);
                console.log("item " + i + " has fid " + obj.items[i]['fid']);
            }
        }else {
            console.log(response)
            console.log("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

var searchData = function(obj, key) {
    // let uid = 0
    // if(window.sessionStorage.getItem('login') == 'true') {
    //     uid = window.sessionStorage.getItem('uid')
    // }
    axios.post("http://111.229.81.92:8000/index/item/listApi", 
        JSON.stringify({
            fname: key,
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
            if(count == 0) {
                obj.$message.error("未找到符合条件的食物，请检查您的输入")
            }
            else {
                obj.items.splice(count);
                for(var i=0; i<count; i++) {
                    obj.items[i] = {};
                    obj.items[i]['fname'] = response.data[1].data[i].fname;
                    obj.items[i]['fid'] = response.data[1].data[i].fid;
                    obj.items[i]['fimg'] = ""
                    getImagebyIndex(obj.items, response.data[1].data[i].fimage, i);
                    console.log("Search item " + i + " has fid " + obj.items[i]['fid']);
                }
                obj.$message.success("符合条件的选项已在屏幕下方列出")
            }
        }else {
            console.log(response)
            console.log("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}

var getInfo = function(obj, fid) {
    axios.post("http://111.229.81.92:8000/index/item/listApi", 
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
                console.log("error")
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
    console.log("img is" + img);
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
        // console.log(obj);
    })
    .catch(
      (error) => {
          console.log(error);
    })
  }

  var getInfoandImg = function(obj, fid) {
    axios.post("http://111.229.81.92:8000/index/item/listApi", 
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
    .then(
        (response) => {
            if(response.data[0]==200) {
                console.log("got info");
                obj["name"] = response.data[1].data[0].fname;
                obj["desc"] = response.data[1].data[0].fdesc;
                getImage(obj.base64, response.data[1].data[0].fimage);
            }else {
                console.log("error")
            }
    })
    .catch(
        (error) => {
            console.log(error);
    })
}

var getRecNum = function(obj) {
    let uid = 0
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
            console.log("response = ")
            console.log(response)
            obj.rec_num = response.data[1].result_count
            console.log("num = " + obj.rec_num)
        }else {
            console.log(response)
            console.log("error")
        }
    })
    .catch (
        (error) => {
            console.log(error);
    })
}
// 导出接口
export default {
    getList,
    searchData,
    getInfo,
    getImage,
    getCollection,
    getRecommend,
    getInfoandImg,
    getRecNum
}