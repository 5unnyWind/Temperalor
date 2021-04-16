import React, { Component } from 'react';
import PubSub from 'pubsub-js'
import './save.css'
class Save extends Component {
  state={
    year:'',
    month:'',
    day:''
  }

  componentDidMount(){
      document.querySelector('.date').innerText=sessionStorage.getItem('dateStr')
   }


  //点击自定义记录今天
  addText = () => {
    // 使海报翻转到背面
    document.querySelector('.poster').id = 'flip'
    document.querySelector('.backPoster').id = 'active'

    //  换按钮
    document.querySelector('.rec').id = 'fade1'
    document.querySelector('.save').id = 'fade2'
    document.querySelector('.produce').id='apear'
    setTimeout(() => {
      document.querySelector('.rec').remove()
      document.querySelector('.save').remove()
    }, 500);
  }

  // 点击“生成海报”按钮
  produce=()=>{
    const story= document.querySelector('#story').value
    if(story===''){
      alert('还没输入内容哦')
      return false
    }else{
      PubSub.publish('story',story)
    }


    //开始渲染最终海报
    document.querySelector('.backPoster').id='fade'
    document.querySelector('.produce').id='fade'
    setTimeout(() => {
      document.querySelector('.backPoster').remove()
      document.querySelector('.produce').remove()
    }, 500);
    document.querySelector('.poster').id='final'

    // 往海报上加子节点放文字
    const storybox= document.createElement('div')
    storybox.id='storybox'
    storybox.innerText=story
    document.querySelector('.poster').appendChild(storybox)



    // 返回主页按钮出现
    document.querySelector('.back').id='finalapear'
  }

  // 点击按钮保存并返回主页
  save = () => {
    this.props.history.push('/home')
    // axios保存色卡数据到云端
  }
  // 返回主页
  back=()=>{
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
    let seka1 = 'rgba(216,101,101,' + red + ')'
    let seka2 = 'rgba(255,179,131,' + orange + ')'
    let seka3 = 'rgba(249,224,127,' + yellow + ')'
    let posterbg = '#d3b89b'
    if (tonal === 'cold') {
      seka1 = 'rgba(207,229,207,' + green + ')'
      seka2 = 'rgba(103,171,214,' + blue + ')'
      seka3 = 'rgba(140,139,170,' + purple + ')'
      posterbg = '#628FB8'
    }

    return (
      
      <div>
        {/* 海报 */}
        <div className='posterPage'>
          

          <div
            className="poster"
            id=''
            style={{ backgroundColor: posterbg }}>

            <div className="sekabox">
              <p id='todayTem'>今日情绪温度</p>
              <p className="colorCode">#E2B98C</p>
              {/* 传统艺能：拼串 */}
              <div className="seka" style={{ backgroundColor: seka1 }}></div>
              <div className="seka2" style={{ backgroundColor: seka2 }}></div>
              <div className="seka3" style={{ backgroundColor: seka3 }}></div>

            </div>
            {/* 二维码 */}
            <div className="qrcode">
              <img src="assets/qrcode.png" alt="" />
            </div>

            {/* ♥ */}
            <div className="heart"></div>

            {/* 日期 */}
            <div className="date"></div>

            {/* logo */}
            <div className="logo"></div>

            <label className='line1'></label>
            <label className='line2'></label>


            
          </div>

          {/* 海报背面 */}
          <div className="backPoster"
          // style={{backgroundColor:posterbg}}
          >

            {/* 分享故事的输入框 */}
            <textarea 
            name="" 
            id="story" 
            cols="30" 
            rows="10" 
            
            placeholder="记录你今天想分享的故事"></textarea>
          </div>


          {/* 记录按钮 */}
          <div className="rec" onClick={this.addText}></div>


          {/* 保存按钮 */}
          <div className="save" onClick={this.save}></div>

          {/* 生成海报按钮 */}
          <div 
          className="produce" 

          onClick={this.produce}></div>
        </div>


        <div className="back" id='finalBack' onClick={this.back}></div>
      </div>

    );

  }
}

export default Save;
