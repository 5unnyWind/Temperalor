import axios from 'axios'
import React, { Component } from 'react'
import { toast } from 'react-toastify'
import './setting.css'


export default class Setting extends Component {



  // 点击返回
  back = () => {
    this.props.history.push("/home")
  }



  // 点击修改密码
  changePassword = () => {
    let originPassword = prompt('请输入原密码')
    if (originPassword===null){return false}
    let newPassword = prompt('请输入新密码')
    if (newPassword===null){return false}
    let  newPasswordAgain = prompt('请再次输入新密码')
    if (newPasswordAgain===null){return false}

    if (newPassword === newPasswordAgain) {
      if (originPassword === sessionStorage.getItem('password')) {
        axios(
          {
            method: 'put',
            url: 'http://121.196.103.173:8080/user/transformation',
            // responseType: 'blob',
            headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('Token') },
            data: 
            // JSON.stringify(
              {
                "user": {
                  "username": sessionStorage.getItem('username'),
                  "password": sessionStorage.getItem('encryption')
                },
                "password": originPassword,
                "new_pw": newPassword,
                "confirm_new_pw": newPasswordAgain
              }
            // )
          }

        ).then(res => {
          console.log(res.data)
          if (res.data.Msg === "成功辣") {
            toast.dark(res.data.Msg + ' 请重新登录')
            sessionStorage.clear()
            this.props.history.replace('/login')
          }
        }).catch(err => {
          console.log(err.response)
          toast.dark(err.response.data.Msg)
        })
      } else {
        toast.dark('原密码错误')
      }
    } else {
      toast.dark('两次输入的密码不一致')
    }
  }


    // 点击我的色卡
    myseka=()=>{
      toast.dark('你还未制作色卡')
    }
  
    // 点击消息通知
    notification=()=>{
      toast.dark('未来Android app 功能')
    }

    // 点击通用
    common=()=>{
      toast.dark('未来Android app 功能')
    }

    // 点击隐私和安全
    privacy=()=>{
      toast.dark('未来Android app 功能')
    }


  // 点击注销按钮
  logout = () => {
    // sessionStorage.removeItem('username')
    // sessionStorage.removeItem('password')
    // sessionStorage.setItem('ok', false)
    sessionStorage.clear()
    this.props.history.replace("/login")
  }

  render() {
    return (
      <div>
        {/* 背景 */}
        {/* <div className="setBg"></div> */}



        {/* 返回按钮 */}
        <div className="back" onClick={this.back}></div>

        {/* "个人中心" */}
        <div className="my">

        </div>

        {/* 用户名/头像 */}
        <div className="info">
          <p>用户名</p>
          <p>{sessionStorage.getItem('username')}</p>
        </div>

        {/* 选项列表 */}
        <ul className="moreInfo">
          <li onClick={this.changePassword}>修改密码</li>
          <li onClick={this.myseka}>我的色卡</li>
          <li onClick={this.notification} >消息通知</li>
          <li onClick={this.common}>通用</li>
          <li onClick={this.privacy}>隐私与安全</li>
        </ul>

        {/* 注销 */}
        <div className="logout" onClick={this.logout}>

        </div>
      </div>
    )
  }
}
