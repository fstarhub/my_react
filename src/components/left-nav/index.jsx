import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'

import menuList from '../../config/menuConfig'
import logo from '../../assets/images/logo.png'
import './index.less'

const {SubMenu}=Menu
//左侧导航组件
class LeftNav extends Component {

  /*
  使用数据的reduce()+递归的方法产生指定的菜单数据列表<menu>
  */

  getMenuNodes2=(menuList)=>{
    //获取路径path
    const path = this.props.location.pathname

    return menuList.reduce((pre,item)=>{
      //添加<Menu.Item>
      if(!item.children){
        pre.push((
          <Menu.Item key={item.key}>
          <Link to={item.key}>
            <Icon type={item.icon} />
            <span>{item.title}</span>
          </Link>
          </Menu.Item>
        ))
      }else{
        //添加<SunMenu>
        const cItem=item.children.find(cItem=>path.indexOf(cItem.key)===0)
        if(cItem){
          this.openKey=item.key
        }
        pre.push((
          <SubMenu
          key={item.key}
          title={
            <span>
              <Icon type={item.icon}/>
              <span>{item.title}</span>
            </span>
          }
          >
            {this.getMenuNodes2(item.children)}
          </SubMenu>
        ))
      }
      return pre
    },[])

  }


  componentWillMount(){
    this.menuNodes=this.getMenuNodes2(menuList)
  }

    render() {

      //当前请求路径作为菜单选项中的key
      const selectKey=this.props.location.pathname
      return (
        <div className='left-nav'>
          <Link className='left-nav-link' to='/admin/home'>
              <img src={logo} alt="logo"/>
              <h1>硅谷后台</h1>
          </Link>

            <Menu
              selectedKeys={[selectKey]}
              defaultOpenKeys={[this.openKey]}
              mode="inline"
              theme="dark"
            >
              {this.menuNodes}
          </Menu>
            
        </div>
      )
  }
}

export default withRouter(LeftNav)