import React, { Component } from 'react';
import './bg.css'
// 全局背景
class BG extends Component {
  render() {
    return (
      <div className="BG">
        <div className="pc">请使用手机或屏幕尺寸类似的设备以获得最佳体验，pc页面正在适配中...</div>
        <div className="baseColor"></div>
        <img src="assets/bg.png" alt="背景"/>
      </div>
    );
  }
}

export default BG;
