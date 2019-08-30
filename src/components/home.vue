<template>
  <div class="part1-container">
    <div class="top">
      <div class="studio-icon">
        <img src="../assets/logo/qingyoulogo.svg">
      </div>
      <button @click="navToOauth">
        Oauth认证
      </button>
    </div>
    <div class="part1">
      <div class="introduction">
        <div class="introduction-text">
          <h1>
            用爱发电
            <br>创造可能
          </h1>
          <br>
          <p>
            青柚工作室成立于 2017 年 10 月，现已有超过 30 位成员分别负责技术、设计、运营推广等工作。截止到现在，青柚工作室已经开发“南京邮电大学”、
            “校谈”等微信小程序。其中，“南邮小程序”现已有超过 5.5 万用户，日均活跃量超过 1 万 3 千人次。
          </p>
          <p>出于对技术的热爱和对设计的追求，青柚工作室成员本着为南邮学生服务的出发点，创造解决生活学习中存在痛点的可能，开发产品，服务同学，提升技术能力。青柚，我们在创造可能。</p>
        </div>
      </div>
    </div>
    <div class="plane-container">
      <div
        :style="{display:oppositePlaneDisplayStatus ? 'none' : 'block'}"
        class="plane-first"
      />
      <div
        :style="{display:oppositePlaneDisplayStatus ? 'none' : 'block'}"
        class="plane-second"
      />
      <div
        :style="{display:oppositePlaneDisplayStatus ? 'none' : 'block'}"
        class="plane-third"
      />
      <div
        :style="{display:oppositePlaneDisplayStatus ? 'block' : 'none'}"
        class="plane-first-opposite"
      />
      <div
        :style="{display:oppositePlaneDisplayStatus ? 'block' : 'none'}"
        class="plane-second-opposite"
      />
      <div
        :style="{display:oppositePlaneDisplayStatus ? 'block' : 'none'}"
        class="plane-third-opposite"
      />
    </div>
  </div>
</template>


<script>
export default {
  name: `Home`,
  data() {
    return {
      oppositePlaneDisplayStatus: false
    };
  },
  mounted() {
    setInterval(() => {
      this.oppositePlaneDisplayStatus = !this.oppositePlaneDisplayStatus;
    }, 4500);
  },
  methods: {
    navToOauth() {
      window.location.href = `https://qingyou.njupt.edu.cn/oauth`;
    }
  }
};
</script>


<style lang="sass" scoped>
*
  margin: 0
  padding: 0
.part1-container
  background-image: url("../assets/background/wave-line_1.svg")
  background-repeat: no-repeat
  background-size: cover
  position: relative
  margin-bottom: 12.5rem
  @media(max-width: 660px)
    margin-bottom: 5rem
  .plane-container
    @media(max-width: 660px)
      display: none
    .plane-first
      position: absolute
      width: 4.25rem
      height: 3.6875rem
      top: 70.46%
      left: 7.92vw
      background-image: url("https://static.airbob.org/homepage/jet-1.png")
      background-size: cover
      background-repeat: no-repeat
      animation: planeFirstAnimation 4.5s linear
    .plane-second
      position: absolute
      width: 6.3125rem
      height: 3.1875rem
      top: 47.85%
      left: 38.15vw
      background-image: url("https://static.airbob.org/homepage/jet-2.png")
      background-size: cover
      background-repeat: no-repeat
      animation: planeSecondAnimation 4.5s linear 
    .plane-third
      position: absolute
      width: 6.3125rem
      height: 2.9375rem
      top: 27.91%
      left: 47.19vw
      background-image: url("https://static.airbob.org/homepage/jet-3.png")
      background-size: cover
      background-repeat: no-repeat
      animation: planeThirdAnimation 4.5s linear
    .plane-first-opposite
      position: absolute
      width: 4.25rem
      height: 3.6875rem
      top: 70.46%
      right: 0
      display: none
      background-image: url("https://static.airbob.org/homepage/jet-1.png")
      background-size: cover
      background-repeat: no-repeat
      animation: planeFirstOppositeAnimation 4.5s linear
    .plane-second-opposite
      position: absolute
      width: 6.3125rem
      height: 3.1875rem
      top: 47.85%
      right: 0
      display: none
      background-image: url("https://static.airbob.org/homepage/jet-2.png")
      background-size: cover
      background-repeat: no-repeat
      animation: planeSecondOppositeAnimation 4.5s linear
    .plane-third-opposite
      position: absolute
      width: 6.3125rem
      height: 2.9375rem
      top: 27.91%
      right: 0
      display: none
      background-image: url("https://static.airbob.org/homepage/jet-3.png")
      background-size: cover
      background-repeat: no-repeat
      animation: planeThirdOppositeAnimation 4.5s linear
@keyframes planeFirstAnimation
  100%
    transform: translate(-320px,-160px)
@keyframes planeSecondAnimation
  100%
    transform: translate(-850px,250px)
@keyframes planeThirdAnimation
  100%
    transform: translate(-1000px,150px)
@keyframes planeFirstOppositeAnimation
  100%
    transform: translate(-200px,-650px)
@keyframes planeSecondOppositeAnimation
  100%
    transform: translate(-56vw,70vh)
@keyframes planeThirdOppositeAnimation
  100%
    transform: translate(-106vw,250px)
.top
  width: 70%
  margin: 0 auto
  border-top: none
  height: 5.125rem
  margin-bottom: 5.125rem
  border-radius: 0 0 0.9375rem 0.9375rem
  display: flex
  justify-content: space-between
  align-items: center
  @media(max-width: 660px)
    width: 80%
    margin-bottom: 1.875rem
  .studio-icon
    margin-left: 2.25rem
  button
    font-size: 0.875rem
    width: 8.75rem
    height: 2.5rem
    margin-right: 1.3125rem
    color: white
    outline: none
    border: none
    border-radius: 2.5rem
    text-decoration: none
    background: linear-gradient(to right, #8bd21f, #d8d23e)
    box-shadow: 0.125rem 0.25rem 0.3125rem #f3f6ac
    cursor: pointer
    &:active
      transform: translateY(0.1875rem)
      box-shadow: 0.125rem 0.125rem 0.3125rem #f3f6ac

.introduction
  width: 70%
  margin: 0rem auto
  display: flex
  align-items: flex-end
  justify-content: flex-start
  background-repeat: no-repeat
  background-image: url("https://static.airbob.org/homepage/home.png")
  background-size: 53%
  background-position: 100% 88%
  @media(max-width: 1024px)
    justify-content: center
    background: none
  .xiao-and-qin
    width: 34.75rem
    height: 24.6875rem
  .introduction-img
    width: 34.75rem
    height: 24.6875rem
    @media(max-width: 660px)
      display: none
  .introduction-text
    width: 23.8125rem
    margin-top: 5rem
    h1
      font-size: 3.5rem
      color: #22b574
      @media(max-width: 1024px)
        text-align: center
    p
      text-align: justify
      font-size: 1.25rem
      color: #222222

@media only screen and (max-width: 804px)
  .top
    .studio-icon
      width: 7rem
      margin-left: 1rem
      img
        width: 6rem
    button
      width: 8rem
      margin-right: 0.7rem
  .introduction
    flex-direction: column
    align-items: center
    .introduction-img
      width: 100%
    .introduction-text
      width: 100%
      margin: 0rem auto
  .introduction-text h1
    text-align: center
</style>
