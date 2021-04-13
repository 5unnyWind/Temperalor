import React, { Component } from 'react'
import './login.css'
import axios from 'axios'
import PubSub from 'pubsub-js'
import TransformBtn from '../../components/TransformBtn/TransformBtn'


export default class Login extends Component {
  state = {
    className: ""
  }
  username = React.createRef()
  password = React.createRef()

  // 点击登录按钮
  login = () => {
    // 获取账号密码
    // const username = this.password.current.value
    // const password = this.password.current.value

    // 检验密码格式
    // if (username.length < 8) {
    //   console.log("密码长度需大于8位")
    //   return
    // }

    // 连接测试
    // axios.post("http://121.196.103.173:8080/user/login",
    //   {
    //     "username": username,
    //     "password": password
    //   }
    // ).then(res => {
    //   console.log(res)
    PubSub.publish("login", true)
    setTimeout(() => {
      // 清场
      this.setState({ className: "fade" })
      setTimeout(() => {
        // 不允许回退登陆界面，重新登录需要点退出登录
        this.props.history.replace("/home")
      }, 800)
    }, 4000)

    // }).catch(err => {
    //   console.error(err)
    // PubSub.publish("login",false)
    // })


    // 不允许回退登陆界面，重新登录需要点退出登录
    // this.props.history.replace("/home")
  }

  render() {
    const { className } = this.state
    return (
      <div className="loginPage">
        <div className={"bg" + " " + className}>
        </div>
        {/* 忘记密码 */}
        <div className={"forget" + " " + className}>忘记密码</div>

        {/* 登录 */}
        <div className="loginBox">
          {/* "登录"文字 */}
          <p className={"logintext" + " " + className}>登录</p>

          <div className={"user" + " " + className}>
            <p>账号</p>
            <input
              type="text"
              ref={this.username}
              placeholder="手机账号/电子邮箱地址" />
            {/* 输入框动画用的下划线 */}
            <label className="underline" ></label>
          </div>

          <div className={"pasw" + " " + className}>
            <p><span>密码</span><span className={"showPass" + " " + className}>显示</span></p>
            <input
              type="password"
              ref={this.password}
              placeholder="请填写密码" />
            <label className="underline"></label>

          </div>

          {/* 用户协议 */}
          <div className={"protocol" + " " + className}>
            <p>注册/登录即表示已阅读并同意</p>
            <p className={"protocolText" + " " + className}>《用户协议与隐私政策》</p>
          </div>

          {/* 确定登录/注册按钮,想变形 */}
          <div onClick={this.login}>
            <TransformBtn className="loginBtn" >
              登录 / 注册
            </TransformBtn>
          </div>

        </div>

        {/* 第三方登录 */}
        <div className={"otherLogin" + " " + className}>
          <img src="assets/otherLogin.png" alt="" />
        </div>
      </div>
    )
  }
}
