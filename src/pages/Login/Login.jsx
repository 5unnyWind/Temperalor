import React, { Component } from 'react'
import TransformBtn from '../../components/TransformBtn/TransformBtn'
import './login.css'
// eslint-disable-next-line
import axios from 'axios'
import PubSub from 'pubsub-js'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Toast from '../../components/toast/toast'
axios.defaults.headers.post['Content-Type'] = 'application/json'


export default class Login extends Component {
  state = {
    className: ""
  }
  username = React.createRef()
  password = React.createRef()



  // 点击显示按钮
  showPass = () => {
    this.password.current.type = (this.password.current.type === 'password') ? 'text' : 'password'
    document.querySelector('.showPass').innerHTML = (document.querySelector('.showPass').innerHTML === '显示') ? '隐藏' : '显示'
  }

  //点击忘记密码
  forget=()=>{
    toast.dark('请qq联系2660796265找回密码')
  }


  // 点击用户协议
  protocol=()=>{
    toast.dark('')
  }


  // 点击qq登录
  qqlogin=()=>{
    toast.dark('qq登录暂未接入，第三方互通平台正在审核')
  }
  // 点击微信登录
  wxlogin=()=>{
    toast.dark('微信登录暂未接入，第三方互通平台正在审核')
  }

  // 正在输入
  inputting = () => {
    sessionStorage.setItem('ok', 'no')
    const username = this.username.current.value
    const password = this.password.current.value
    if (username.trim() === '') {
      return false
    } else
      if (password.trim().length < 8) {
        return false
      } else {
        sessionStorage.setItem('ok', 'yes')
      }
    sessionStorage.setItem('username', username)
    sessionStorage.setItem('password', password)
  }

  // 点击登录按钮
  login = () => {
    // 获取账号密码
    const username = this.username.current.value
    const password = this.password.current.value
    // 检验密码格式
    if (username.trim() === '') {
      toast.dark('请输入用户名')
      return false
    } else
      if (password.trim().length < 8) {
        toast.dark("密码长度需大于8位")
        return false
      }


    // 登录
    axios.post("http://121.196.103.173:8080/user/login",
      JSON.stringify(
        {
          "username": username,
          "password": password
        }
      )
    ).then(res => {
      // console.log(res.data)
      PubSub.publish("login", true)
      setTimeout(() => {
        // 清场
        this.setState({ className: "fade" })
        setTimeout(() => {
          // 不允许回退登陆界面，重新登录需要点退出登录
          this.props.history.replace("/home")
        }, 800)
      }, 4000)

    }).catch(err => {

      // 1003用户不存在，自动注册
      if (err.response.data.Status === 1003) {
        PubSub.publish("login", true)
        setTimeout(() => {
          // 清场
          this.setState({ className: "fade" })
          setTimeout(() => {
            // 不允许回退登陆界面，重新登录需要点退出登录
            this.props.history.replace("/home")
          }, 800)
        }, 4000)
        //用户不存在，自动注册
        setTimeout(() => {

          axios.post('http://121.196.103.173:8080/user/registration', JSON.stringify(
            {
              "username": username,
              "password": password,
              "confirm_password": password
            }
          )).then((res) => {

            toast.dark('已自动注册新账号')
            // //再次登录
            // setTimeout(() => {
            //   axios.post('http://121.196.103.173:8080/user/login', JSON.stringify(
            //     {
            //       "username": username,
            //       "password": password
            //     }
            //   )).then(res => {

            //   })
            // }, 1000);
          })
        }, 1000);



      }
      else {
        PubSub.publish("login", false)
      }

    })

  }

  render() {
    const { className } = this.state
    return (
      <div className="loginPage">
        {/* <div className={"bg" + " " + className}>
        </div> */}

        {/* 登录 */}
        <div className="loginBox">
          {/* "登录"文字 */}
          {/* eslint-disable-next-line */}
          <p className={"logintext" + " " + className}>登录</p>
          {/* eslint-disable-next-line */}
          <div className={"user" + " " + className}>
            <p>账号</p>
            <input
              type="text"
              ref={this.username}
              onChange={this.inputting}
              placeholder="请输入用户名" />
            {/* 输入框动画用的下划线 */}
            <label className="underline" ></label>
          </div>
          {/* eslint-disable-next-line */}
          <div className={"pasw" + " " + className}>
            {/* eslint-disable-next-line */}
            <p><span >密码</span>
              <span
                className={"showPass " + className}
                onClick={this.showPass}>显示
              </span>
            </p>

            <input
              type="password"
              ref={this.password}
              onChange={this.inputting}
              placeholder="请填写密码" />
            <label className="underline"></label>

          </div>

          {/* 用户协议 */}
          {/* eslint-disable-next-line */}
          <div className={"protocol" + " " + className}>
            <p>注册/登录即表示已阅读并同意</p>
            {/* eslint-disable-next-line */}
            <p
            onClick={this.protocol} 
            className={"protocolText " + className}>《用户协议与隐私政策》</p>
          </div>


          {/* 忘记密码 */}
          
          <div
          onClick={this.forget} 
          className={"forget " + className}>忘记密码?</div>


          {/* 确定登录/注册按钮,想变形 */}
          <div onClick={this.login}>
            <TransformBtn className="loginBtn" >
              登录 / 注册
            </TransformBtn>
          </div>

        </div>

        {/* 第三方登录 */}
        {/* eslint-disable-next-line */}
        <div className={"otherLogin" + " " + className}>
          <div>
            <label></label>
            <span> 第 三 方 账 号 登 录 </span>
            <label></label>
          </div>
          <div
          onClick={this.qqlogin} 
          className="qq" ></div>

          <div
          onClick={this.wxlogin} 
          className="wechat"></div>

        </div>


      </div>
    )
  }
}
