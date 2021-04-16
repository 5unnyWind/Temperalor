import React, { Component } from 'react';
// import PubSub from 'pubsub-js'
import './make.css'

class Make extends Component {

  state={
    tonal:'',
    red:0,
    orange:0,
    yellow:0,
    green:0,
    blue:0,
    purple:0
  }

  // 点击返回按钮
  back = () => {
    this.props.history.push('/home')
  }

  // 点击问题0的确定按钮
  clickQ0 = () => {
    const a0 = document.getElementsByName('a0')
    if (a0[0].checked) {
      // 暖色调分支
      document.querySelector('.q0').id = 'right'
      document.querySelector('.q4').id = 'right'
      document.querySelector('.q5').id = 'right'
      document.querySelector('.q6').id = 'right'
      document.querySelector('.q1').id = 'center'
      // 发布tonal色调
      // PubSub.publish('tonal', 'warm')
      this.setState({tonal:'warm'})
    } else if (a0[1].checked) {
      // 冷色调分支
      document.querySelector('.q0').id = 'right'
      document.querySelector('.q1').id = 'right'
      document.querySelector('.q2').id = 'right'
      document.querySelector('.q3').id = 'right'
      document.querySelector('.q4').id = 'center'
      // 发布色调
      // PubSub.publish('tonal', 'cold')
      this.setState({tonal:'cold'})
    } else {
      alert("请选择")
    }
  }


  // 点击问题1提交按钮
  clickQ1 = () => {
    const a1 = document.getElementsByName('a1')
    // 发布红色透明度信息
    if (a1[0].checked) {
      // PubSub.publish('red', 0.6)
      this.setState({red:0.6})
    } else if (a1[1].checked) {
      // PubSub.publish('red', 0.4)
      this.setState({red:0.4})

    } else if (a1[2].checked) {
      // PubSub.publish('red', 0.2)
      this.setState({red:0.2})
    } else {
      alert('请选择')
      return false
    }
    document.querySelector(".q1").id = "right"
    document.querySelector('.q2').id = "center"
  }
  // 点击问题2提交按钮
  clickQ2 = () => {
    const a2 = document.getElementsByName('a2')
    // 发布橙色透明度信息
    if (a2[0].checked) {
      // PubSub.publish('orange', 0.6)
      this.setState({orange:0.6})
    } else if (a2[1].checked) {
      // PubSub.publish('orange', 0.4)
      this.setState({orange:0.4})
    } else if (a2[2].checked) {
      // PubSub.publish('orange', 0.2)
      this.setState({orange:0.2})
    } else {
      alert('请选择')
      return false
    }
    document.querySelector(".q2").id = 'right'
    document.querySelector('.q3').id = "center"
  }
  // 点击问题3提交按钮
  clickQ3 = () => {
    const a3 = document.getElementsByName('a3')
    // 发布黄色透明度信息
    if (a3[0].checked) {
      // PubSub.publish('yellow', 0.6)
      this.setState({yellow:0.6})
    } else if (a3[1].checked) {
      // PubSub.publish('yellow', 0.4)
      this.setState({yellow:0.4})
    } else if (a3[2].checked) {
      // PubSub.publish('yellow', 0.2)
      this.setState({yellow:0.2})
    } else {
      alert('请选择')
      return false
    }
    document.querySelector('.q3').id = 'right'
    document.querySelector('.finish').id = 'fin'
  }
  // 点击问题4的提交按钮
  clickQ4 = () => {
    const a4 = document.getElementsByName('a4')
    // 发布绿色透明度信息
    if (a4[0].checked) {
      // PubSub.publish('green', 0.6)
      this.setState({green:0.6})
    } else if (a4[1].checked) {
      // PubSub.publish('green', 0.4)
      this.setState({green:0.4})
    } else if (a4[2].checked) {
      // PubSub.publish('green', 0.2)
      this.setState({green:0.2})
    } else {
      alert('请选择')
      return false
    }
    document.querySelector('.q4').id = 'right'
    document.querySelector('.q5').id = 'center'
  }
  // 点击按钮5的提交按钮
  clickQ5 = () => {
    const a5 = document.getElementsByName('a5')
    // 发布蓝色透明度信息
    if (a5[0].checked) {
      // PubSub.publish('blue', 0.6)
      this.setState({blue:0.6})
    } else if (a5[1].checked) {
      // PubSub.publish('blue', 0.4)
      this.setState({blue:0.4})
    } else if (a5[2].checked) {
      // PubSub.publish('blue', 0.2)
      this.setState({blue:0.2})
    } else {
      alert('请选择')
      return false
    }
    document.querySelector('.q5').id = 'right'
    document.querySelector('.q6').id = 'center'
  }
  // 点击按钮6的提交按钮
  clickQ6 = () => {
    const a6 = document.getElementsByName('a6')
    // 发布紫色透明度信息
    if (a6[0].checked) {
      // PubSub.publish('purple', 0.6)
      this.setState({purple:0.6})
    } else if (a6[1].checked) {
      // PubSub.publish('purple', 0.4)
      this.setState({purple:0.4})
    } else if (a6[2].checked) {
      // PubSub.publish('purple', 0.2)
      this.setState({purple:0.2})
    } else {
      alert('请选择')
      return false
    }
    document.querySelector('.q6').id = 'right'
    document.querySelector('.finish').id = 'fin'
  }
  // 点击生成色卡按钮
  finish = () => {
    this.props.history.push('/save',{...this.state})
  }

  render() {
    return (
      <div className="makePage">
        {/* 所有的问题 */}
        <div className="questions">
          {/* 问题6面板 */}
          <div className="q6" id='left'>
            <p>&nbsp;</p>
            <p>Q3（紫）：</p>
            <p>【独处温度】今天的独处时间较多？
            （紫色表示：权威、尊敬、高贵、优雅、信仰、孤独）
            </p>
            <label>
              <input type="radio" name='a6' />
             30℃
            </label>
            <br />

            <label>
              <input type="radio" name='a6' />
            20℃
            </label>
            <br />

            <label >
              <input type="radio" name='a6' />
            10℃
            </label>

            <br />
            <button onClick={this.clickQ6} className='qabtn'>确定</button>

          </div>

          {/*  问题5面板 */}
          <div className="q5" id='left'>
            <p>&nbsp;</p>
            <p>Q2（绿）：</p>
            <p>【好奇温度】今天观察了自然环境有无变化？
            （绿色表示：健康、发展、平静、成长、生机、青春、公平、自然、理智）
            </p>
            <label>
              <input type="radio" name='a5' />
              30℃
            </label>
            <br />

            <label>
              <input type="radio" name='a5' />
            20℃
            </label>
            <br />

            <label >
              <input type="radio" name='a5' />
            10℃
            </label>

            <br />
            <button onClick={this.clickQ5} className='qabtn'>确定</button>

          </div>

          {/*  问题4面板 */}
          <div className="q4" id='left'>
            <p>&nbsp;</p>
            <p>Q1（蓝）：</p>
            <p>【自由温度】今天可以自己控制的时间相对自由 ？
            （蓝色表示：永恒、真理、自由、安宁、沉默、冷静 、计划周详、注重规则）
            </p>

            <label>
              <input type="radio" name='a4' />
              30℃
            </label>
            <br />

            <label>
              <input type="radio" name='a4' />
            20℃
            </label>
            <br />

            <label >
              <input type="radio" name='a4' />
            10℃
            </label>

            <br />
            <button onClick={this.clickQ4} className='qabtn'>确定</button>

          </div>

          {/* 问题3面板 */}
          <div className="q3" id='left'>
            <p>&nbsp;</p>
            <p>Q3:（黄）：</p>
            <p>【娱乐温度】今天娱乐活动较为丰富？
            （黄色表示：智慧、光荣、忠诚、希望、喜悦、光明、目标导向，永无止境）
            </p>
            <label>
              <input type="radio" name='a3' />
              30℃
            </label>
            <br />

            <label>
              <input type="radio" name='a3' />
            20℃
            </label>
            <br />

            <label >
              <input type="radio" name='a3' />
            10℃
            </label>

            <br />
            <button onClick={this.clickQ3} className='qabtn'>确定</button>

          </div>



          {/* 问题2面板 */}
          <div className="q2" id='left'>
            <p>&nbsp;</p>
            <p>Q2（橙）：</p>
            <p>【善意温度】今天有发生让自己心里暖暖的事？
            （橙色表示：使人感到温暖，热烈`活泼`快乐，能激发人朝气）
            </p>
            <label>
              <input type="radio" name='a2' />
              30℃
            </label>
            <br />

            <label>
              <input type="radio" name='a2' />
            20℃
            </label>
            <br />

            <label >
              <input type="radio" name='a2' />
            10℃
            </label>

            <br />
            <button onClick={this.clickQ2} className='qabtn'>确定</button>

          </div>

          {/* 问题1面板 */}
          <div className="q1" id='left'>
            <p>&nbsp;</p>
            <p>Q1（红）：
            </p>
            <p>【心动温度】今天有遇到心动的人/事物而激动开心？
            （红色表示：活跃、热情、勇敢、爱情、健康）
            </p>
            <p>&nbsp;</p>
            <label>
              <input type="radio" name='a1' />
              30℃
            </label>
            <br />
            <label>
              <input type="radio" name='a1' />
            20℃
            </label>
            <br />
            <label >
              <input type="radio" name='a1' />
            10℃
            </label>
            <br />
            <button onClick={this.clickQ1} className='qabtn'>确定 </button>
          </div>

          {/* 分支面板 */}
          <div className="q0" id='center'>
            <p>&nbsp;</p>
            <p>Q0:</p>
            <p>回想今天心情温度区间是？</p>

            <label>
              <input type="radio" name='a0' />
              20-30℃
            </label>
            <br />

            <label>
              <input type="radio" name='a0' />
            10-20℃
            </label>
            <br />
            <p>（后续问题温度代表程度）</p>
            <button onClick={this.clickQ0} className='qabtn'>确定</button>
          </div>

        </div>

        {/* 返回主页按钮 */}
        <div className="back makeBack" onClick={this.back}></div>
        {/* 完成按钮 */}
        <div className="finish" id='' onClick={this.finish}></div>
      </div>
    );
  }
}

export default Make;
