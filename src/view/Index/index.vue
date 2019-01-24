<style lang="less" scoped>
.swiper {
  font-size: 0;
  width: 100%;
  height: 350px;
  background: #dc7878;
  .tips {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1200px;
    position: relative;
    .box {
      width: 248px;
      height: 250px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      .title {
        color: #fff;
        font-size: 16px;
        letter-spacing: 1px;
        margin: 45px 0 0 0;
      }
      .fee {
        color: #fade6c;
        font-size: 26px;
        margin: 30px 0 50px 0;
      }
      .invest {
        color: rgba(255, 255, 255, 0.8);
        font-size: 16px;
        letter-spacing: 2px;
        cursor: pointer;
        width: 120px;
        height: 32px;
        line-height: 32px;
        border-radius: 6px;
        margin: 0 auto;
        background: #f85347;
      }
    }
  }
}
.profit {
  font-size: 0;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  background: #fff;
  ul {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    li {
      flex: 1;
      padding: 0 0 0 35px;
      text-align: left;
      box-sizing: border-box;
      .title {
        color: #7a7a7a;
        font-size: 14px;
        margin: 20px 0 10px 0;
      }
      .value {
        color: #f85347;
        font-size: 20px;
        margin: 0 0 20px 0;
      }
    }
  }
}
.identify {
  font-size: 100%;
  width: 100%;
  background: #fff;
  ul {
    width: 1200px;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
    display: flex;
    li {
      flex: 1;
      height: 120px;
      text-align: left;
      position: relative;
      box-sizing: border-box;
      img {
        position: absolute;
        top: 0;
        left: 35px;
        bottom: 0;
        margin: auto 0;
        &.size_1 {
          width: 52px;
          height: 54px;
        }
        &.size_2 {
          width: 56px;
          height: 56px;
        }
        &.size_3 {
          width: 54px;
          height: 49px;
        }
      }
      .main {
        margin: 30px 0 0 110px;
        .title {
          color: #323436;
          font-size: 20px;
          margin: 0 0 8px 0;
        }
        .intro {
          color: #7a7a7a;
          font-size: 14px;
          span {
            display: inline-block;
            line-height: 18px;
          }
        }
      }
    }
  }
}
.notice{
  font-size: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: #fff;
  .main{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    display: flex;
    .tips{
      flex: 1;
      color: #323436;
      font-size: 14px;
      i{
        margin: 0 5px 0 0;
        &.iconcolor {
          color: #899ff0;
        }
      }
      span{
        color: #7a7a7e;
        font-size: 12px;
      }
    }
    .more{
      color: #7a7a7e;
      font-size: 14px;
      cursor: pointer;
      i{
        margin: 0 0 0 2px;
      }
      &:hover{
        color: #f85347;
      }
    }
  }
}
.recomment{
  width: 100%;
  height: 295px;
  max-width: 1200px;
  margin: 30px auto;
  background: #fff;
}
</style>

<template>
  <Common>
    <div slot="content">
      <div class="swiper">
        <div class="main"></div>
        <div class="tips">
          <div class="box">
            <div class="title">
              <span>历史年化利率</span>
            </div>
            <div class="fee">
              <span>7.20%~10.00%</span>
            </div>
            <div class="invest">
              <span>我要投资</span>
            </div>
          </div>
        </div>
      </div>
      <div class="profit">
        <ul>
          <li>
            <div class="title">
              <span>累计交易金额</span>
            </div>
            <div class="value">
              <span>1,867,451,654元</span>
            </div>
          </li>
          <li>
            <div class="title">
              <span>投资人已赚取收益</span>
            </div>
            <div class="value">
              <span>1867451654元</span>
            </div>
          </li>
          <li>
            <div class="title">
              <span>投资人已收回本息</span>
            </div>
            <div class="value">
              <span>1867451654元</span>
            </div>
          </li>
          <li>
            <div class="title">
              <span>投资人待收回本息</span>
            </div>
            <div class="value">
              <span>1867451654元</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="identify">
        <ul>
          <li>
            <img class="size_1" src="../../assets/images/index/home_contact_icon_1.png">
            <div class="main">
              <div class="title">
                <span>银行存管</span>
              </div>
              <div class="intro">
                <span>用户资金与平台隔离</span>
                <span>资金流转透明规范</span>
              </div>
            </div>
          </li>
          <li>
            <img class="size_2" src="../../assets/images/index/home_contact_icon_2.png">
            <div class="main">
              <div class="title">
                <span>电子签章</span>
              </div>
              <div class="intro">
                <span>第三方加密数据</span>
                <span>保障投资人的法律权益</span>
              </div>
            </div>
          </li>
          <li>
            <img class="size_2" src="../../assets/images/index/home_contact_icon_3.png">
            <div class="main">
              <div class="title">
                <span>三级等保</span>
              </div>
              <div class="intro">
                <span>国家信息安全登记保护</span>
                <span>银行级安全认证</span>
              </div>
            </div>
          </li>
          <li>
            <img class="size_3" src="../../assets/images/index/home_contact_icon_4.png">
            <div class="main">
              <div class="title">
                <span>会员单位</span>
              </div>
              <div class="intro">
                <span>广州互金协会会员单位</span>
                <span>广东互金协会会员单位</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="notice">
        <div class="main">
          <div class="tips">
            <i class="iconfont iconcolor">&#xe7b5;</i>
            20181502系统更新公告
            <span>2018-10-15</span>
          </div>
          <div class="more">
            查看更多
            <i class="iconfont">&#xe637;</i>
          </div>
        </div>
      </div>
      <div class="recomment">

      </div>
    </div>
  </Common>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {}
  }
}
</script>
