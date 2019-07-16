import React, { Component } from 'react'
import { Form, Icon, Input, Button,message} from 'antd';

import {reqLogin} from '../../api'
import './login.less'
import logo from '../../assets/images/logo.png'

class Login extends Component {

        handleSubmit = e => {
            //阻止默认事件(表单提交)
            e.preventDefault();
            alert('即将发送ajax请求')

            //表单所有数据统一验证
            this.props.form.validateFields(async (err,{username,password})=>{
              if(!err){
                  const result=await reqLogin(username,password)
                  if(result.status===0){
                      this.props.history.replace('/admin')
                      message.success('登录成功了')
                  }else{
                      message.error(result.msg)
                  }
              }else{
                  //(''验证失败)
              }
                
            })
        }

        //密码自定义验证
        validatePwd=(rule,value,callback)=>{
            value=value.trim()
            if(!value){
                callback('密码必须输入')
            }else if(value.length<4){
                callback('密码不能小于4')
            }else if(value.length>12){
                callback('密码不能大于12')
            }else if(!/^[a-zA-Z0-9]+$/.test(value)){
                callback('密码必须死英文,数字或下划线组成')
            }else{
                callback()//验证通过
            }
        }


    render() {
        const {getFieldDecorator}=this.props.form

        return (
            <div className="login">
                <div className="login-header">
                    <img src={logo} alt="硅谷logo"/>
                    <h1>后台管理系统</h1>
                </div>
                <div className="login-content">
                    <h1>用户登录</h1>
                    <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
        {
                getFieldDecorator('username', { // 配置对象: 属性名是一些特定的名称
                  initialValue: '', // 初始值
                  rules: [ // 声明式验证: 使用插件已定义好的规则进行验证
                    // 1).必须输入
                    // 2). 必须大于等于4位
                    // 3). 必须小于等于12位
                    // 4). 必须是英文、数字或下划线组成
                    { required: true, whitespace: true, message: '用户名是必须' },
                    { min: 4, message: '用户名不能小于4位'},
                    { max: 12, message: '用户名不能大于12位'},
                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成'}
                  ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )
              }
        </Form.Item>
        <Form.Item>
        {
                getFieldDecorator('password', {
                  initialValue: '', // 初始值
                  rules: [
                    { validator: this.validatePwd}
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )
              }
        </Form.Item>
        <Form.Item>
         
          <Button type="primary" htmlType="submit" className="login-form-button">登录</Button>
          
        </Form.Item>
      </Form>
                    </div>
            </div>
        )
    }
}


const WrapperForm = Form.create()(Login)
export default WrapperForm 