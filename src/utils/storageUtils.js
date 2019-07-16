//操作local数据的工具模块

 import store from 'store'
const USER_KEY ='user_key'

export default {

    //保存user
    saveUser(user){
        store.ser(USER_KEY,user)
    },

    //返回user对象,如果没有返回{}
    getUser(){
        return store.get(USER_KEY) || {}
    },

    //删除保存的user
    removeUser(){
        store.remove(USER_KEY)
    }
}