import React, { Component } from 'react'
import {Upload,Icon,Modal} from 'antd'

function getBase64(file){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.readAsDateUrl(file);
    reader.onload=()=>resolve(reader.result);
    reader.onerror=error=>reject(error);
  });
}

export default class PicturesWall extends Component {

  state={
    previewVisible:false,//标识是否显示大图预览
    previewImage:'',//大图的URL或者base64值
    fileList:[
      {
        //文件对象信息
        uid:'-1',//唯一标识
        name:"...png",//文件名
        status:'done',//状态有uploading done error removed
        url:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      }
    ]
  };

  handlwCancel=()=>this.setState({previewVisible:false});

  //大图的预览回调
  //file:当前选择的图片对应的file
  handlePreview= async file=>{
    if(!file.url && !file.preview){
      //如果file没有图片
      file.preview=await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage:file.url || file.preview,
      previewVisible:true,
    })
  }

  //file状态发生改变的监听回调
  //file当前操作(上传/删除)的file
  handleChange=({file,fileList})=>{
    //file与fileList最后一个file代表同个图片的不同对象

    //上传成功
    if(file.status==='done'){
      //数组最后一个file保存到file变量
      file=fileList[fileList.length-1]
      //去图片文件名和URL
      const {name,url}=file.response.data
      //保存file对象
      file.name=name
      file.url=url
    }
    this.setState({fileList})
  }
  render() {

    const {previewVisible,previewImage,fileList}=this.state
    const uploadButton=(
      <div>
        <Icon type="plus"/>
        <div className="ant-upload-text">Upload</div>
      </div>
    )
    return (
      <div>
        <Upload
        action="/manage/img/upload"//上传图片的URL
        name="image"//图片文件对应的参数名
        listType="picture"//显示风格
        fileList={fileList}//已上传的所有的图片文件信息对象的数组
        onPreview={this.handlePreview}
        onChange={this.handleChange}
        >
          {fileList.length>3?null:uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{width:'100%'}} src={previewImage}/>
        </Modal>
      </div>
    )
  }
}
