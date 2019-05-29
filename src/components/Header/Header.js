import React from 'react';
import './Header.sass';
import QyLogo from '../../assets/qylogo.png';
import TopBg from '../../assets/top_bg.png';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rightDistance: -600,
      scrollTop: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    let afterscrollTop = document.documentElement.scrollTop;
    let delta = afterscrollTop - this.state.scrollTop;
    //  超过第一部分后直接将图片居中
    if (afterscrollTop >= 798) {
      this.setState({
        rightDistance: 0,
        scrollTop: 798
      });
      return;
    }
    //  到达顶部直接将图片设置到右边
    if (afterscrollTop === 0) {
      this.setState({
        rightDistance: -600,
        scrollTop: 0
      });
      return;
    }

    if (delta > 0) {
      this.setState({
        rightDistance: Math.min(
          Math.floor((1 - afterscrollTop / 798) * -600),
          0
        ),
        scrollTop: afterscrollTop
      });
    } else if (delta < 0) {
      this.setState({
        rightDistance: Math.max(
          Math.floor((1 - afterscrollTop / 798) * -600),
          -600
        ),
        scrollTop: afterscrollTop
      });
    }
  }
  render() {
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
          <div
            className="top-bg"
            style={{ right: this.state.rightDistance + 'px' }}
          >
            <img src={TopBg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
