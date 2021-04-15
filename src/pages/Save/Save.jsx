import React, { Component } from 'react';
// import PubSub from 'pubsub-js'
import './save.css'
class Save extends Component {
  // state={
  //   tonal:'',
  //   red:0,
  //   orange:0
  // }

  // 点击按钮保存并返回主页
  save = () => {
    this.props.history.push('/home')

  }

  render() {
    // 获取色调和各个颜色透明度
    const { tonal, red, orange, yellow, green, blue, purple } = this.props.location.state
    console.log(tonal, red, orange, yellow, green, blue, purple)

    // 开始传统艺能：拼串
    // if (tonal === 'warm') {
    //   const redSeka = 'rgba(216,101,101' + ',' + red + ')'
    //   const orangeSeka = 'rgba(255,179,131' + ',' + orange + ')'
    //   const yellowSeka = 'rgba(249,224,127' + ',' + yellow + ')'
    // }else if(tonal==='cold'){
    //   const greenSeka='rgba(207,229,207' + ',' + green + ')'
    //   const blueSeka='rgba(103,171,214' + ',' + blue + ')'
    //   const purpleSeka='rgba(140,139,170' + ',' + purple + ')'
    // }
    //在if里面的定义不能用？？？
    let seka1 = 'rgba(216,101,101' + ',' + red + ')'
    let seka2='rgba(255,179,131' + ',' + orange + ')'
    let seka3='rgba(249,224,127' + ',' + yellow + ')'
    let posterbg='#d3b89b'
    if (tonal==='cold'){
      seka1 ='rgba(207,229,207' + ',' + green + ')'
      seka2='rgba(103,171,214' + ',' + blue + ')'
      seka3='rgba(140,139,170' + ',' + purple + ')'
      posterbg='#628FB8'
    }

    return (
      <div className='posterPage'>
        {/* 海报 */}
        <div className="poster" style={{backgroundColor:posterbg}}>

          <div className="sekabox">
            <p className="colorCode">#4D8DD5</p>
            {/* 传统艺能：拼串 */}
            <div className="seka" style={{backgroundColor:seka1}}></div>
            <div className="seka2" style={{backgroundColor:seka2}}></div>
            <div className="seka3" style={{backgroundColor:seka3}}></div>
            {/*  */}
          </div>

          <div className="qrcode">
            <img src="assets/qrcode.png" alt="" />
          </div>
          <div className="date"></div>
          <div className="log"></div>
        </div>

        {/* 记录按钮 */}
        <div className="rec"></div>
        {/* 保存按钮 */}
        <div className="save" onClick={this.save}></div>
      </div>
    );

  }
}

export default Save;
