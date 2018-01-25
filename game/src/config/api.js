import axios from 'axios'
const HOST = 'localhost'

export default {
  req(url, method = 'POST', params, success, failure, logicErr){
    axios({
      method: method,
      url: url,
      data: JSON.stringify(params),
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true,
      crossDomain: true
    }).then(res => {
      if (success) {
        success(res.data)
      } else {
        console.wran('r_:axios的接受成功suc回调函数未定义')
      }
    }).catch((err) => {
      failure(err)
    })
  }
}
