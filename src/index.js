//入口js
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './containers/App'
import store from './redux/store'

ReactDOM.render((
  //Provider将接收到的store对象提供给所有容器组件
  <Provider store={store}>
    <App/>
  </Provider>
),document.getElementById('root'))