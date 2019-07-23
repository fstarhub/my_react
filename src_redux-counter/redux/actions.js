

//创建action的工厂函数

import {INCREMENT,DECREMENT} from './action-types'
//增加的action
export const increment=(haha)=>({type:INCREMENT,haha})



//减少的action
export const decrement=(haha)=>({type:DECREMENT,haha})