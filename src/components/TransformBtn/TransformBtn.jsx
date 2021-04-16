import React, { Component } from 'react'
import { withRouter } from 'react-router'
import PubSub from 'pubsub-js'
import './transformBtn.css'

const delay = (ms) => {
  return new Promise((res) => {
    setTimeout(res, ms)
  })
}

class TransformBtn extends Component {
  state = {
    className: "",
    children: "",
    success: false
  }

  componentDidMount() {
    console.log(this.props)
    this.setState({ className: this.props.className })
    this.setState({ children: this.props.children })
  }

  // 点击按钮
  // handleClick = (e) => {
  //   // 接收登录是否成功的信息
  //   PubSub.subscribe("login", (_, s) => {
  //     this.setState({ success: s })
  //   })

  //   console.log(e.target.className)
  //   // 让按钮变形：加载形态
  //   this.setState({ className: "loding" })
  //   this.setState({ children: "" })
  //   setTimeout(() => {
  //     if (this.state.success) {
  //       // 让按钮变形：成功形态
  //       this.setState({ className: "success" })
  //       setTimeout(() => {
  //         // 不搞一镜到底了，最终形态
  //         this.setState({ className: "end" })
  //       }, 1200)
  //     } else {
  //       // 让按钮变形：失败形态
  //       this.setState({ className: "fail" })
  //     }
  //   }, 2500)
  //   // if (e.target.className==="loginBtn"){
  //   //   this.props.history.replace("/home")
  //   // }
  // }

    // 点击按钮
    _handleClick = async (e) => {
      // 接收登录是否成功的信息
      PubSub.subscribe("login", (_, s) => {
        this.setState({ success: s })
      })
  
      console.log(e.target.className)
      // 让按钮变形：加载形态
      this.setState({ className: "loding" })
      this.setState({ children: "" })

      await delay(2500)
      if (this.state.success) {
        // 让按钮变形：成功形态
        this.setState({ className: "success" })
        await delay(1200)
        // 不搞一镜到底了，最终形态
        this.setState({ className: "end" })
      } else {
        // 让按钮变形：失败形态
        this.setState({ className: "fail" })
      }
      // if (e.target.className==="loginBtn"){
      //   this.props.history.replace("/home")
      // }

    }

  render() {
    const { className, children } = this.state
    return (
      <div className={className} onClick={(res) => this._handleClick(res)}>
        {children}
        <span className="d1"></span>
        <span className="d2"></span>
        <span className="d3"></span>
        <svg>
          <polyline fill="none" stroke="#D3D3D3" strokeWidth="2" points="9,15 15,25 28,9" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }
}

export default withRouter(TransformBtn)
// 赋予一般组件路由api