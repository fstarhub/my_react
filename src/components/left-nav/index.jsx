import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Menu, Icon} from 'antd'

import logo from '../../assets/images/logo.png'
import './index.less'

const {SubMenu}=Menu
//左侧导航组件
export default class LeftNav extends Component {
    render() {
      return (
        <div className='left-nav'>
          <Link className='left-nav-link' to='/admin/home'>
              <img src={logo} alt="logo"/>
              <h1>硅谷后台</h1>
          </Link>

            <Menu
          defaultSelectedKeys={['/admin/home']}
          mode="inline"
          theme="dark"
            >
          <Menu.Item key="admin/home">
          <Link to="/admin/home">
          <Icon type="home" />
          <span>首页</span>
          </Link>
        </Menu.Item>
        <SubMenu
        key="admin/products"
        title={
          <span>
            <Icon type="mail" />
            <span>商品</span>
          </span>
        }
      >
        <Menu.Item key="admin/category">
          <Link to="/admin/category">
            <Icon type="folder-open" />
            <span>品类管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="admin/product">
          <Link to="/admin/product">
            <Icon type="filter" />
            <span>商品管理</span>
          </Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
            
        </div>
      )
  }
}
