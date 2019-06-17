import React from 'react';
import './Footer.sass';
import QyLogo from '../../assets/qylogo_w.png';
import QrCode from '../../assets/qrcode.png';

export default function Footer() {
  return (
    <div id="part5">
      <div className="part5-container">
        <div className="top-part">
          <div className="upper">
            <div className="left-container">
              <div className="logo-part">
                <div className="logo">
                  <img src={QyLogo} alt="" />
                </div>
                <div className="slogan">用热爱创造无限可能</div>
              </div>
              <div className="info-part">
                <div className="about info">
                  <li className="title">关于</li>
                  <li className="item">了解团队</li>
                  <li className="item">团队产品</li>
                  <li className="item">团队共识</li>
                </div>
                <div className="join info">
                  <li className="title">加入</li>
                  <li className="item">加入我们</li>
                  <li className="item">QingyouRen</li>
                </div>
                <div className="communicate info">
                  <li className="title">沟通</li>
                  <li className="item">合作沟通</li>
                  <li className="item">渠道</li>
                </div>
                <div className="developer info">
                  <li className="title">开发者</li>
                  <li className="item">
                    <a href="https://github.com/GreenPomelo">开源仓库</a>
                  </li>
                  <li className="item">
                    <a href="https://oauth.qingyou.ren/">青柚认证系统</a>
                  </li>
                </div>
                <div className="user info">
                  <li className="title">用户</li>
                  <li className="item">用户反馈</li>
                  <li className="item">交流体验</li>
                  <li className="item">
                    <a href="https://www.yuque.com/qingyou/ndwpvv">
                      青柚公开课
                    </a>
                  </li>
                  <li className="item">用户隐私</li>
                </div>
              </div>
            </div>
            <div className="right-container">
              <div className="qr-code">
                <img src={QrCode} alt="" />
              </div>
              <div className="intro">青柚工作室官方QQ</div>
            </div>
          </div>
          <div className="contact">
            <p>联系我们：qingyou@njupt.edu.cn</p>
            <p>欢迎前往大学生活动中心111，与我们线下交流。</p>
          </div>
        </div>
        <div className="bottom-part">
          <div className="copy-right">
            Copyright © 2019 Qingyou Studio. 保留所有权利。
          </div>
        </div>
      </div>
    </div>
  );
}
