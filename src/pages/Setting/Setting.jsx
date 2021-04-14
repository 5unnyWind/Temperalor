import React, { Component } from 'react'
import './setting.css'

export default class Setting extends Component {

  // 点击返回
  back=()=>{
    this.props.history.push("/home")
  }

  // 点击注销按钮
  logout=()=>{
    this.props.history.push("/login")
  }

  render() {
    return (
      <div>
        {/* 背景 */}
        <div className="setBg"></div>

        {/* 返回按钮 */}
        <div className="back" onClick={this.back}></div>


        {/* 用户名/头像 */}
        <div className="info">
          
        </div>

        {/* 信息列表 */}
        <ul className="moreInfo">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        {/* 注销 */}
        <div className="logout" onClick={this.logout}>
          退出登录
        </div>
      </div>
    )
  }
}
