import React, { useState } from 'react';
import './Person.sass';
import { People } from './People';

export default function Person() {
  const [people, randomSort] = useState(People);

  const handleClick = () => {
    const afterSort = people.sort(() => (Math.random() > 0.5 ? -1 : 1));
    randomSort([...afterSort]);
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
              let className = '';
              if (index === 7) className = 'item-main';
              else if (
                index === 0 ||
                index === 3 ||
                index === 10 ||
                index === 11 ||
                index === 12 ||
                index === 16 ||
                index === 20
              ) {
                className = 'item opacity';
              } else className = 'item';

              return (
                <div className={className} key={id}>
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
