import React from 'react';
import './Header.sass';
import QyLogo from '../../assets/qylogo.png';
import TopBg from '../../assets/top_bg.png';

export default function Header() {
  return (
    <div id="part1">
      <div className="part1-container">
        <div className="head-bar">
          <img src={QyLogo} alt="" className="qylogo" />
          <div className="nav-list">
            <div className="nav-item first">首页</div>
            <div className="nav-item second">了解我们</div>
            <div className="nav-item second">加入我们</div>
            <div className="nav-item third">合作沟通</div>
            <div className="nav-item third">开发者</div>
          </div>
          <button>用户服务</button>
        </div>
        <div className="head-content-container">
          <div className="content-title">用爱发电,创造可能</div>
          <div className="content-container">
            <p className="head-content">
              2017年春天，南邮小程序上显示出第一句“Hello,world”，
            </p>
            <p className="head-content">
              今天，我们有超过五万用户，超过一万日活，超过十万日访问量，超过千万次接口调用。
            </p>
            <p className="head-content">
              我们在和肖晨旭一起成长，一起进步，一起变得强大，
            </p>
            <p className="head-content">却从未忘却初心。</p>
            <p className="head-content last">两年，继续前进</p>
          </div>
          <div className="more">了解我们的更多 > </div>
        </div>
        <div className="top-bg">
          <img src={TopBg} alt="" />
        </div>
      </div>
    </div>
  );
}
