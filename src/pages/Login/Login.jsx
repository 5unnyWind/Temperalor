import React, { Component } from 'react'
import './login.css'

export default class Login extends Component {
  render() {
    return (
      <div className="loginPage">
        {/* 忘记密码 */}
        <div className="forget">忘记密码</div>

        {/* 登录 */}
        <div className="loginBox">
          {/* "登录"文字 */}
          <p className="logintext">登录</p>

          <div className="user">
            <p>账号</p>
            <input type="text" placeholder="手机账号/电子邮箱地址"/>
          </div>

          <div className="pasw">
            <p><span>密码</span><span className="showPass">显示</span></p>
            <input type="password" placeholder="请填写密码"/>
          </div>

          {/* 用户协议 */}
          <div className="protocol">
            <p>注册/登录即表示已阅读并同意</p>
            <p className="protocolText">《用户协议与隐私政策》</p>
          </div>

          {/* 确定登录/注册按钮,想变形 */}
          <div className="loginBtn">登录 / 注册</div>

        </div>

        {/* 第三方登录 */}
        <div className="otherLogin">
          <img src="assets/otherLogin.png" alt=""/>
        </div>
      </div>
    )
  }
}
