//请求接口函数,返回的都是promise对象
import ajax from './ajax'
import jsonp from 'jsonp'//axios不能发jsonp请求
import {message} from 'antd'


//BASE='http://localhost:5000'
const BASE=''

//请求登录
export const reqLogin=(username,password)=>ajax.post(BASE+'/login',{username,password})

//发送jsonp请求得到天气信息
export const reqWeather=(city)=>{
    return new Promise((resolve,reject)=>{
        const url=`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        jsonp(url,{},(error,data)=>{
            if(!error && data.error===0){
                const{dayPictureUrl,weather}=data.results[0].weather_data[0]
                resolve({dayPictureUrl,weather})
            }else{
                message.error('获取天气信息失败')
            }
        })
    })
}




//获取分类列表
export const reqCategorys=()=>ajax(BASE+'/manage/category/list')


//添加分类
export const reqAddCategory=(categoryName)=>ajax.post(BASE+'/manage/category/add',{
    categoryName
})

//修改分类
export const reqUpdateCategory=({categoryId,categoryName})=>ajax.post(BASE+'/manage/category/update',{
    categoryId,
    categoryName
})

//根据分类id获取分类
export const reqCategory=(categoryId)=>ajax(BASE+'/manage/category/info',{
    params:{
        categoryId
    }
})

//获取商品分页列表
export const reqProducts=(pageNum,pageSize)=>ajax(BASE+'/manage/product/list',{
    params:{
        pageNum,
        pageSize,
    }
})

//根据Name/desc搜索产品分页列表
export const reqSearchProducts=({
    pageNum,
    pageSize,
    searchName,
    searchType//值为productName或productDesc
})=>ajax(BASE+'/manage/product/search',{
    //省略了method:GET
    params:{
        pageNum,
        pageSize,
        [searchType]:searchName,
    } 
})

//商品上/下架处理
export const reqUpdateStatus=(productId,status)=>ajax(BASE+'/manage/product/updateStatus',{
    method:'POST',
    data:{
        productId,
        status
    }
})