//请求接口函数,返回的都是promise对象
import ajax from './ajax'
//BASE='http://localhost:5000'
const BASE=''

export const reqLogin=(username,password)=>ajax.post(BASE+'/login',{username,password})