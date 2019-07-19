import React, { Component } from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import ProductHome from './home'
import ProductUpdate from './add-update'
import ProductDetail from './detail'

//商品管理
export default class Product extends Component {
  render() {
    return (
      <Switch>
          <Route path="/admin/product/product" exact component={ProductHome}/>
          <Route path="/admin/product/addupdate" component={ProductUpdate}/>
          <Route path="/admin/product/detail" component={ProductDetail}/>
          <Redirect to="/admin/product/product"/>
      </Switch>
    )
  }
}
