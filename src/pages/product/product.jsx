import React, { Component } from 'react'
import {
  Switch,
  Router,
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
          <Router path="/product" exact component={ProductHome}/>
          <Router path="/product/addupdate" component={ProductUpdate}/>
          <Router path="/product/detail" component={ProductDetail}/>
          <Redirect to="/admin/product/product"/>
      </Switch>
    )
  }
}
