import axios from 'axios'
import qs from 'qs'
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 
'application/json;charset=UTF-8';
axios.interceptors.request.use((config) => {
  if(config.method === 'post') {
    config.data=JSON.parse(JSON.stringify(config.data))
    console.log(config.data);
  }
  return config;
}, (error) => {
  return Promise.reject(error);
}); 

// 返回状态判断 
axios.interceptors.response.use((res) =>{ 
  if(!res.data){ 
      return Promise.reject(res);
  } return res;
}, (error) => {
  console.log(error);
})
export default axios