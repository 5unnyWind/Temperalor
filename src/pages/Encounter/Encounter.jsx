import React, { Component } from 'react'
import './encounter.css'
export default class Encounter extends Component {



  back = () => {
    this.props.history.push('/home')
  }
  render() {
    return (
      <div className='encounterPage'>
        <img
          src={
            (sessionStorage.getItem('postcardUrl') === (undefined || null)) ?
              'https://gfq-oss.oss-cn-shenzhen.aliyuncs.com/upload/%E9%82%82%E9%80%85%E6%B8%A9%E5%BA%A6/Image%203.png'
              : sessionStorage.getItem('postcardUrl')
          }
          alt="邂逅温度"
          id='encoun1' />
        <div className="back" id='b1' onClick={this.back}></div>
      </div>
    )
  }
}
