import React, { Component } from 'react'
import Calendar from '../../components/Calendar/Calendar'

import './home.css'

export default class Home extends Component {
  // 点击左上角设置按钮
  set = () => {
    this.props.history.push("/setting")
  }
  // 点击右下角按钮，邂逅温度
  encounter=()=>{
    this.props.history.push("/encounter")
  }
  // 点击左下角按钮，制作色卡
  make=()=>{
    this.props.history.push("/make")
  }

  render() {
    return (
      <div>

        {/* 背景 */}
        <div className="homeBg"></div>


        {/* 设置按钮 */}
        <div className="setBtn" onClick={this.set}></div>


        {/* 头部 */}
        <div className="head"></div>


        {/* 中部日历 */}
        <div className="calendar">
          <Calendar/>
        </div>


        {/* 底部按钮 */}
        <div className="twoBtns">

          {/* 左下按钮 */}
          <button className="lbBtn" onClick={this.make}>
            {/* 邂逅温度 */}
          </button>

          {/* 右下按钮 */}
          <button className="rbBtn" onClick={this.encounter}>
            {/* 制作色卡 */}
          </button>
        </div>

      </div>
    )
  }
}
