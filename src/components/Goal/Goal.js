import React from 'react';
import './Goal.sass';
import blue from '../../assets/blue.png';
import pink from '../../assets/pink.png';
import orange from '../../assets/orange.png';
import x from '../../assets/x.png';
import q from '../../assets/q.png';
import git from '../../assets/git.png';
import w4 from '../../assets/word/w4.png';
import w1 from '../../assets/word/w1.png';
import w2 from '../../assets/word/w2.png';
import w3 from '../../assets/word/w3.png';

export default function Goal({ distanceObj: { afterScrollTop, clientWidth } }) {
  let distance = 0;
  if (clientWidth > 920) {
    distance = ((afterScrollTop - 1700) / 600) * 20.5;
  }
  return (
    <div id="part4">
      <img
        className="mascot"
        style={{ transform: `translate(-35vw,-${distance}rem)` }}
        src={x}
        alt=""
      />
      <img
        className="mascot"
        style={{ transform: `translate(35vw,-${distance}rem)` }}
        src={q}
        alt=""
      />
      <div className="goal-title" />
      <div className="goal-desc">
        <div className="goal-desc-item">青柚人的目的是什么?</div>
        <div className="goal-desc-item">
          看到南邮小程序99.99%的覆盖率，看到期末报告单在朋友圈里刷屏，
        </div>
        <div className="goal-desc-item">
          看到同学们在表白墙吐槽我们的功能不够完善，看到有人向朋友炫耀南邮的信息化。
        </div>
        <div className="goal-desc-item">我们不愿主动追求物质上的奖励，</div>
        <div className="goal-desc-item">
          仅希望用技术服务更多人，用以取悦自己。
        </div>
      </div>
      <div className="goal-more">了解青柚团队的共识 ></div>
      <div className="goal-card-set">
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${blue}') `,
            backgroundColor: '#7EC7FF'
          }}
        >
          <img className="goal-card-text-image" src={w1} alt="技术服务用户" />
          <div className="goal-card-sub-text">用户原则</div>
        </div>
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${pink}') `,
            backgroundColor: '#FFACB0'
          }}
        >
          <img className="goal-card-text-image" src={w2} alt="热爱驱动使命" />
          <div className="goal-card-sub-text">团队共识</div>
        </div>
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${orange}')`,
            backgroundColor: '#FFBE54'
          }}
        >
          <img className="goal-card-text-image" src={w3} alt="实践促成进步" />
          <div className="goal-card-sub-text">项目目的</div>
        </div>
      </div>
      <div className="goal-divide-line" />
      <div className="goal-open-source">
        <div className="goal-open-source-text-div">
          <img className="goal-open-source-text-div-title" src={w4} alt="" />
          <div className="goal-open-source-text-div-contents">
            <div className="goal-open-source-text-div-content1">
              开放和共享是一种学习。
            </div>
            <div
              className="goal-open-source-text-div-content2"
              onClick={() => {
                window.location.href = `https://github.com/GreenPomelo`;
              }}
            >
              访问青柚的 GitHub 仓库 >
            </div>
          </div>
        </div>
        <img className="goal-open-source-git" src={git} alt="" />
      </div>
    </div>
  );
}
