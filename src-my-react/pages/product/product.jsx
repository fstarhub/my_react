import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import ProductHome from './home'
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'

//商品管理
export default class Product extends Component {
  render() {
    return (
      <Switch>
          <Route path="/admin/product" exact component={ProductHome}/>
          <Route path="/admin/product/addupdate" component={ProductAddUpdate}/>
          <Route path="/admin/product/detail" component={ProductDetail}/>
          <Redirect to="/admin/product"/>
      </Switch>
    )
  }
}
