<style lang="less" scoped>
#aboutTitleCont {
  width: 100%;
  #container_title {
    width: 100%;
    background: #fff;
    .intro {
      width: 100%;
      height: 260px;
      box-sizing: border-box;
      position: relative;
      .icon {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 37px;
        left: 0;
        right: 0;
        margin: 0 auto;
        border-radius: 40px;
        text-align: center;
        background-color: rgba(255, 255, 255, .2);
        &:after {
          content: '';
          width: 65px;
          height: 65px;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto auto;
          border-radius: 35px;
          background-color: rgba(255, 255, 255, .2);
        }
        .iconfont{
          color: #fff;
          font-size: 60px;
          line-height: 80px;
        }
      }
      .name {
        color: #fff;
        font-size: 26px;
        width: 100%;
        text-align: center;
        letter-spacing: 2px;
        position: absolute;
        bottom: 90px;
        span {
          display: inline-block;
          position: relative;
          &:before {
            content: '';
            width: 20px;
            height: 2px;
            background: #fff;
            position: absolute;
            top: 0;
            left: -30px;
            bottom: 0;
            margin: auto 0;
          }
          &:after {
            content: '';
            width: 20px;
            height: 2px;
            background: #fff;
            position: absolute;
            top: 0;
            right: -30px;
            bottom: 0;
            margin: auto 0;
          }
        }
      }
    }
    img {
      width: 100%;
    }
  }
  .contact {
    width: 100;
    background: #fff;
    text-align: right;
    padding: 20px;
    margin: 30px 0 0 0;
    img {
      height: 93px;
    }
  }
}
</style>

<template>
  <div id="aboutTitleCont" v-if="headerInfo.color">
    <div id="container_title">
      <div class="intro">
        <div class="icon">
          <i class="iconfont" v-html="headerInfo.color"></i>
        </div>
        <div class="name">
          <span>{{ headerInfo.name}}</span>
        </div>
        <img src="../assets/images/navBg.png">
      </div>
    </div>
    <slot name="main"></slot>
    <div class="contact" v-if="autograph">
      <img src="../assets/images/contact.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-us-title',
  props: {
    headerInfo: {
      type: Object
    },
    autograph: {
      type: Boolean,
      default: true
    }
  }
}
</script>
