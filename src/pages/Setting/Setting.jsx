import React, { Component } from 'react'
import './setting.css'

export default class Setting extends Component {

  // 点击返回
  back=()=>{
    this.props.history.push("/home")
  }

  // 点击注销按钮
  logout=()=>{
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
          <p>SunnyWind</p>
        </div>

        {/* 信息列表 */}
        <ul className="moreInfo">
          <li>修改密码</li>
          <li>我的色卡</li>
          <li>消息通知</li>
          <li>通用</li>
          <li>隐私与安全</li>
        </ul>

        {/* 注销 */}
        <div className="logout" onClick={this.logout}>
          
        </div>
      </div>
    )
  }
}
