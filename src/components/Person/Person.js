import React, { useState } from 'react';
import './Person.sass';
import { People } from './People';

export default function Person({ distanceObj: { afterScrollTop } }) {
  const [people, randomSort] = useState(People);
  let offset = [
    [150, 120, 180, 150, 210, 150],
    [150, 0, 150, 150, 150],
    [100, 80, 120, 100],
    [120, 120, 120, 120, 120, 120]
  ];

  const initPosCopy = [
    [150, 120, 180, 150, 210, 150],
    [150, 0, 150, 150, 150],
    [100, 80, 120, 100],
    [120, 120, 120, 120, 120, 120]
  ];

  if (afterScrollTop >= 1450) {
    if (!offset.every(item => item.every(num => num === 0))) {
      offset = offset.map(item => item.fill(0));
    }
  } else if (afterScrollTop >= 622 && afterScrollTop < 1450) {
    offset = offset.map((item, offsetIndex) =>
      item.map((num, index) =>
        Math.max(
          (1 - (afterScrollTop - 622) / 799) * initPosCopy[offsetIndex][index],
          0
        )
      )
    );
  }

  const handleClick = () => {
    const afterSort = people.sort(() => 0.5 - Math.random());
    randomSort([...afterSort]);
  };

  const setStyle = index => {
    let style = {};
    const setDetail = (row, innerIndex) => ({
      transform: `translateY(${offset[row][innerIndex]}px)`
    });

    if (index <= 5) {
      style = setDetail(0, index);
    } else if (index <= 10) {
      style = setDetail(1, index - 6);
    } else if (index <= 14) {
      style = setDetail(2, index - 11);
    } else if (index <= 20) {
      style = setDetail(3, index - 15);
    }

    return style;
  };

  const setClassName = index => {
    let className = '';
    switch (index) {
      case 0:
      case 3:
      case 10:
      case 11:
      case 12:
      case 16:
      case 20:
        className = 'item opacity';
        break;
      case 7:
        className = 'item-main';
        break;
      default:
        className = 'item';
        break;
    }
    return className;
  };

  return (
    <div id="part3">
      <div className="part3-container">
        <div className="left-container">
          <div className="title">成长是一场团战</div>
          <div className="content">
            <p>
              从一开始的几人团队到现在四十多位同学的工作室，青柚工作室吸引并包容越来越多志同道合的朋友们加入。
            </p>
            <p>
              在这个团队里，大家讨论、交流、学习、进步、共事...写写你感兴趣的项目，为期末报告单设计UI，策划你虚幻的用户交流活动，平时再水水群、聊聊天，如果恰好赶上了秋招还能蹭上学长学姐们一顿又一顿的offer饭。
            </p>
            <p>成长其实是一局团战，得和得力的队友一起打！</p>
          </div>
          <div className="people-num">
            <div className="num-item">
              <div className="num">
                50<span>人</span>
              </div>
              <div className="tag">工作室成员数</div>
            </div>
            <div className="num-item">
              <div className="num">
                18<span>人</span>
              </div>
              <div className="tag">毕业成员数</div>
            </div>
          </div>
          <button className="join">加入青柚</button>
        </div>
        <div className="right-container">
          <div className="photo-wall">
            {people.map((person, index) => {
              if (index >= 21) return '';
              const { id, img } = person;
              return (
                <div
                  className={setClassName(index)}
                  key={id}
                  style={setStyle(index)}
                >
                  <img src={img} alt="" />
                </div>
              );
            })}
          </div>
          <div className="random" onClick={handleClick}>
            随机换一换
          </div>
        </div>
      </div>
    </div>
  );
}
