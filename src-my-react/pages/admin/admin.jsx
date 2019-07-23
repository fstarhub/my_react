import React, { Component } from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import {Layout} from 'antd'

import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Footer, Sider, Content } = Layout

export default class Admin extends Component {
    render() {

        const user=memoryUtils.user
        if(!user._id){
            return <Redirect to="/login"/>//内存中如果没有后台返回的id,重定向到登录页面
        }

        return (
            <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Header/>
          <Content style={{ background: 'pink' }}>
            <Switch>
              <Route path="/admin/home" component={Home}/>
              <Route path='/admin/category' component={Category} />
              <Route path='/admin/product' component={Product} />
              <Route path='/admin/role' component={Role} />
              <Route path='/admin/user' component={User} />
              <Route path='/admin/charts/bar' component={Bar} />
              <Route path='/admin/charts/line' component={Line} />
              <Route path='/admin/charts/pie' component={Pie} />
              <Redirect to="/admin/home"/>
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.5)'}}>
            推荐使用谷歌浏览器，可以获得更佳页面操作体验
          </Footer>
        </Layout>
      </Layout>
        )
    }
}
