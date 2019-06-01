import React, { useEffect, useState } from 'react';
import './Header.sass';
import QyLogo from '../../assets/qylogo.png';

export default function Header() {
  const [rightDistance, setDistance] = useState(
    document.body.clientWidth <= 920 ? 25 : 40
  );

  useEffect(() => {
    window.addEventListener('scroll', setPosition);
    window.addEventListener('load', setPosition);
    return () => {
      window.removeEventListener('scroll', setPosition);
      window.removeEventListener('load', setPosition);
    };
  });

  const setPosition = () => {
    const afterScrollTop = document.documentElement.scrollTop;
    const { clientWidth } = document.body;

    //  宽度小于920后图片固定
    if (clientWidth <= 920) {
      if (rightDistance === 25) return;
      setDistance(25);
      return;
    }
    //  超过第一部分后直接将图片居中
    if (afterScrollTop >= 798) {
      if (rightDistance === 0) return;
      setDistance(0);
      return;
    }
    //  到达顶部直接将图片设置到右边
    if (afterScrollTop === 0) {
      setDistance(40);
      return;
    }

    setDistance(Math.max((1 - afterScrollTop / 798) * 40, 0));
  };

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
              2017年春天，南邮小程序上显示出第一句"Hello, world"，
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
        <div
          className="top-bg"
          style={{
            transform: `translateX(${rightDistance}vw)`
          }}
        />
      </div>
    </div>
  );
}
