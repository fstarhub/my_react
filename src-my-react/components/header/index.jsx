import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {Modal} from 'antd'

import LinkButton from '../link-button'
import {reqWeather} from '../../api' 
import {formateDate} from '../../utils/dateUtils'
import menuList from '../../config/menuConfig'//不知道引用原因
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'


import './index.less'

class Header extends Component {

    state={
        currentTime:formateDate(Date.now()),
        dayPictureUrl:'',//图片url
        weather:'',//天气文本
    }

    //退出登录
    logout=()=>{
        Modal.confirm({
            title:'确认退出吗?',
            onOk:()=>{
                console.log('ok');
                //local中的用户
                storageUtils.removeUser()
                //内存中的用户
                memoryUtils.user={}
                //跳转登录界面
                this.props.history.replace('/login')
            },
            onCancel(){
                console.log('cancel')
            },
        })
    }

    //根据当前请求path得到对应title
    getTitle=()=>{
        let title=''
        const path=this.props.location.pathname
        menuList.forEach((item)=>{
            if(item.key===path){
                title=item.title
            }else if(item.children) {
                const cItem=item.children.find(cItem=>cItem.key===path)
                if(cItem){
                    title=cItem.title
                }
            }
        })
        return title
    }

    //获取天气显示
    getWeather=async()=>{
        //发请求
        const {dayPictureUrl,weather}=await reqWeather('北京')
        //更新状态
        this.setState({
            dayPictureUrl,
            weather
        })
    }

    componentDidMount(){
        //启动定时器
        this.intervalId=setInterval(()=>{
            this.setState({
                currentTime:formateDate(Date.now())
            })
        },1000);
        //发jsonp请求获取天气信息
        this.getWeather()
    }

    componentWillMount(){
        clearInterval(this.intervalId)
    }

    render() {

        const {currentTime,dayPictureUrl,weather}=this.state

        const user=memoryUtils.user
        const title=this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    欢迎,{user.username}&nbsp;
                    
                    <LinkButton onClick={this.logout}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title} </div>
                    <div className="header-bottom-right">
                        <span>{currentTime}</span>
                        <img src={dayPictureUrl} alt="weather"/>
                        <span>{weather}</span>
                    </div>
                </div>
            </div>
        )
    }
}

//高阶组件包装非路由组件,Header可操作路由的相关语法
export default withRouter(Header)