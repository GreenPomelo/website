import React from 'react';
import './Goal.sass';
import blue from '../../assets/blue.png';
import pink from '../../assets/pink.png';
import orange from '../../assets/orange.png';
import x from '../../assets/x.png';
import q from '../../assets/q.png';

export default function Goal({ distanceObj: { afterScrollTop } }) {
  const distance = ((afterScrollTop - 1700) / 600) * 20.5;
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
      <div className="goal-title">取悦自己,服务他人</div>
      <div className="goal-desc">
        <div className="goal-desc-item">
          我们不会没有任何目的性地去做一件事。我们的目的是什么？
        </div>
        <div className="goal-desc-item">
          看到每个同学都在使用南邮小程序，看到期末报告单在朋友圈里刷屏，
        </div>
        <div className="goal-desc-item">
          看到同学们在表白墙吐槽我们的功能不够完善，看到有人向朋友炫耀南邮人的小程序。
        </div>
        <div className="goal-desc-item">物质或许不是我们追求的目的，</div>
        <div className="goal-desc-item">
          用技术服务更多人来取悦自己的精神享受，更加值得回味。
        </div>
      </div>
      <div className="goal-more">了解青柚团队的共识 ></div>
      <div className="goal-card-set">
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${blue}')`
          }}
        >
          <div className="goal-card-text">技术服务用户</div>
          <div className="goal-card-sub-text">用户原则</div>
        </div>
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${pink}')`
          }}
        >
          <div className="goal-card-text">热爱驱动使命</div>
          <div className="goal-card-sub-text">团队共识</div>
        </div>
        <div
          className="goal-card"
          style={{
            backgroundImage: `url('${orange}')`
          }}
        >
          <div className="goal-card-text">实践促成进步</div>
          <div className="goal-card-sub-text">项目目的</div>
        </div>
      </div>
    </div>
  );
}
