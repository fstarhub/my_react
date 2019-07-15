import React, {Component} from 'react'
import {message} from 'antd'
import {HashRouter,Switch, Route} from 'react-router-dom'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
应用根组件
 */
class App extends Component {

  handleClick=()=>{
    message.success('成功了...')
  }
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
        </Switch>
      </HashRouter>
    )
  }
}

export default App