import axios from "axios";
axios.defaults.timeout = 5000; //响应时间
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';        //配置请求头
axios.defaults.baseURL = "";
axios.interceptors.request.use((config)=>{
  return config
})
//定义一个响应拦截器
axios.interceptors.response.use((config)=>{
  return config
})
export default axios
