import React, { Component } from 'react';
import './bg.css'
// 全局背景
class BG extends Component {
  render() {
    return (
      <div className="BG">
        <div className="baseColor"></div>
        <img src="assets/bg.png" alt=""/>
      </div>
    );
  }
}

export default BG;
