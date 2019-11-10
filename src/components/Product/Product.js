import React from 'react';
import './Product.sass';

import t2 from '../../assets/word/t2.png';
import iphone1 from '../../assets/iphone/1.png';
import iphone2 from '../../assets/iphone/2.png';
import iphone3 from '../../assets/iphone/3.png';
import iphone4 from '../../assets/iphone/4.png';
import iphone5 from '../../assets/iphone/5.png';

export default function Product({
  distanceObj: { afterScrollTop, clientWidth }
}) {
  let rightDistance2 = 9;
  let rightDistance3 = 0;
  if (clientWidth <= 920) {
    rightDistance3 = -8;
  } else if (clientWidth > 920 && afterScrollTop > 500) {
    const base = Math.max(
      0,
      1.5 * ((10 * (180 - (afterScrollTop - 500))) / 300)
    );
    rightDistance2 = base;
    rightDistance3 = base > 4.5 ? 2 * (9 - base) : 2 * base;
  }

  return (
    <div id="part2">
      <div className="product-title">
        <img src={t2} alt="" />
      </div>
      <div className="product-desc">
        <div className="product-desc-item">
          南邮小程序、校谈、期末报告单、社团招新系统、你头像真棒等等，
        </div>
        <div className="product-desc-item">
          我们既是这些产品的开发者，也是他们最忠实的用户，更是最能挑刺的人。
        </div>
        <div className="product-desc-item">
          做自己会用的产品，做自己也喜欢用的产品，
        </div>
        <div className="product-desc-item">用心，做让自己心满意足的事。</div>
        <div className="product-desc-more">了解我们的更多产品 ></div>
        <div className="product-show">
          <img
            className="product-show-item"
            src={iphone1}
            alt=""
            style={{ zIndex: 5 }}
          />
          <img
            className="product-show-item iphone2"
            style={{ zIndex: 4, marginTop: `${rightDistance2}rem` }}
            src={iphone2}
            alt=""
          />
          <img
            className="product-show-item"
            src={iphone3}
            alt=""
            style={{ zIndex: 3, marginTop: `${rightDistance3}rem` }}
          />
          <img
            className="product-show-item iphone4"
            src={iphone4}
            alt=""
            style={{ zIndex: 2 }}
          />
          <img
            className="product-show-item iphone5"
            src={iphone5}
            alt=""
            style={{ zIndex: 1, marginTop: `${rightDistance2}rem` }}
          />
        </div>
      </div>
    </div>
  );
}
