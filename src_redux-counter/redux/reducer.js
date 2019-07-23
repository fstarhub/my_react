//管理状态数据的函数

import {INCREMENT,DECREMENT} from './action-types'

export default function count(state=1,action){

  console.log('reducer',state,action)
  switch (action.type) {
    case INCREMENT:
      return state+action.haha

    case DECREMENT:
      return state-action.haha
  
    default:
      return state
  }
  
}