//封装发送Ajax请求的函数,向外暴露axios
//解决参数 json改urlencode格式
//统一处理请求异常

import axios from 'axios'
import qs from 'qs'
import {message} from 'antd'

//请求拦截器 interceptors  作用:post请求体格式为urlencode格式 name=wode&age=18
axios.interceptors.request.use(function (config){
    const {method,data}=config
    if(method.toLowerCase()==='post' && typeof data==='object'){
        config.data=qs.stringify(data)
    }
    return config
})

//添加拦截器,请求结果是response.data的值
//统一处理数据异常
axios.interceptors.response.use(function (response){
    return response.data
},function(error){
    message.error('请求出错'+error.message)
    return new Promise(()=>{})
})

export default axios