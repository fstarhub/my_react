import React from 'react'

import './index.less'

/* 自定义开始链接实际是button的组件
1.{...props }接受所有子属性传递给子标签
children标签属性
字符串<LinkButton>xxx</LinkButton> 
标签对象<LinkButton><span></span></LinkButton> 
字符串<LinkButton><span></span><span></span></LinkButton>*/ 

export default function LinkButton(props){
    return <button className="link-button" {...props}/>
}