import React, { Component } from 'react'
import './encounter.css'
export default class Encounter extends Component {


  back=()=>{
    this.props.history.push('/home')
  }
  render() {
    return (
      <div className='encounterPage'>
        <img src="assets/Image 1.png" alt="邂逅温度" id='encoun1'/>
        <div className="back" id='b1' onClick={this.back}></div>
      </div>
    )
  }
}
