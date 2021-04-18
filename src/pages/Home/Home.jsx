import axios from 'axios'
import React, { Component } from 'react'
import Calendar from '../../components/Calendar/Calendar'

import './home.css'

export default class Home extends Component {


  componentDidMount() {

    axios.post('http://121.196.103.173:8080/user/login', JSON.stringify(
      {
        "username": sessionStorage.getItem('username'),
        "password": sessionStorage.getItem('password')
      }
    )).then(async res => {

      // 存Token
      sessionStorage.setItem('Token', res.data.Token)
      // 存密文密码
      sessionStorage.setItem('encryption', res.data.Data.password)

      await axios({
        method: 'post',
        url: 'http://121.196.103.173:8080/temp/token',
        // responseType: 'blob',
        headers: { 'Authorization': 'Bearer ' + sessionStorage.getItem('Token') }
      }).then(res => {
        //  console.log(res)
        //存oss所需数据
        sessionStorage.setItem("access_key_id", res.data.access_key_id)
        sessionStorage.setItem("access_key_secret", res.data.access_key_secret)
        sessionStorage.setItem("security_token", res.data.security_token)
      }).catch(err => {
        console.log(err)
      })


    }).catch(err => {
      console.log(err)
    })
  }


  // 点击左上角设置按钮
  set = () => {
    this.props.history.push("/setting")
  }
  // 点击右下角按钮，邂逅温度
  encounter = () => {
    this.props.history.push("/encounter")
    //随机获取他人分享的图片
    axios.get('http://121.196.103.173:8080/temp/rand_picture')
      .then(res => {
        // console.log(res.data.Data)
        sessionStorage.setItem('postcardUrl', res.data.Data)
      })
  }
  // 点击左下角按钮，制作色卡
  make = () => {
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
          <Calendar />
        </div>


        {/* 底部按钮 */}
        <div className="twoBtns">

          {/* 左下按钮 */}
          <button className="lbBtn" onClick={this.make}>
            {/* 生成色卡 */}
          </button>

          {/* 左下按钮 */}
          <button className="rbBtn" onClick={this.encounter}>
            {/* 邂逅温度 */}
          </button>
        </div>

      </div>
    )
  }
}
