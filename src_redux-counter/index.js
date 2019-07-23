import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import store from './redux/store'

ReactDOM.render(<App store={store}/>,document.getElementById('root'))
//绑定store内部状态数据监听
store.subscribe(()=>{//重新熏染标签
  ReactDOM.render(<App store={store}/>,document.getElementById('root'))
})