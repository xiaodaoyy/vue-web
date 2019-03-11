<style lang="less" scoped>
#app {
  font-size: 0;
  width: 100%;
  background: #f2f2f2;
  .header {
    width: 100%;
    height: 36px;
    line-height: 36px;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    .tele {
      flex: 1;
      text-align: left;
      img {
        vertical-align: middle;
      }
      span {
        color: #666;
        font-size: 12px;
        margin: 0 0 0 5px;
        vertical-align: middle;
      }
    }
    .nav {
      flex: 2;
      text-align: right;
      ul {
        width: 100%;
        height: 36px;
        margin: 0;
        padding: 0;
        li {
          color: #666;
          font-size: 12px;
          margin: 0 0 0 30px;
          list-style: none;
          cursor: pointer;
          display: inline-block;
        }
      }
    }
  }
  .banner {
    width: 100%;
    height: 60px;
    background: #fff;
    .content {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      .logo {
        width: 139px;
        img {
          display: inline-block;
          width: 100%;
          height: 30px;
          margin: 15px 0;
        }
      }
      .nav {
        flex: 1;
        text-align: right;
        line-height: 60px;
        ul {
          width: 100%;
          li {
            color: #333;
            font-size: 16px;
            margin: 0 40px 0 0;
            list-style: none;
            cursor: pointer;
            display: inline-block;
            &:hover {
              color: #f85347;
            }
            &.on {
              color: #f85347;
            }
          }
        }
      }
      .account {
        color: #333;
        font-size: 14px;
        width: 100px;
        height: 30px;
        line-height: 28px;
        margin: 15px 0 0 40px;
        border: 1px solid #eee;
        box-sizing: border-box;
        border-radius: 4px;
        text-align: center;
        img {
          display: inline-block;
          width: 15px;
          height: 15px;
          margin: 0 3px 0 0;
          vertical-align: middle;
        }
        span {
          vertical-align: middle;
        }
      }
    }
  }
  .footer {
    width: 100%;
    padding: 30px 0;
    background: #fff;
    .content {
      width: 1200px;
      margin: 0 auto;
      border-bottom: 1px solid #eee;
      display: flex;
      .list {
        width: 160px;
        text-align: left;
        vertical-align: top;
        .title {
          color: #323436;
          font-size: 16px;
          margin: 0 0 30px 0;
        }
        ul {
          width: 100%;
          margin: 0;
          padding: 0;
          li {
            color: #7a7a7e;
            font-size: 14px;
            margin: 0 0 18px 0;
            list-style: none;
            cursor: pointer;
            &:hover {
              color: #323436;
            }
          }
        }
      }
      .wx,
      .app {
        width: 100px;
        margin: 0 50px 0 0;
        vertical-align: top;
        img {
          width: 100px;
        }
        p {
          color: #7a7a7e;
          font-size: 14px;
          margin: 5px 0 0 0;
          padding: 0;
        }
      }
      .tele {
        flex: 1;
        text-align: right;
        .telephone {
          color: #323436;
          font-size: 36px;
        }
        .serverTime {
          color: #7a7a7e;
          font-size: 12px;
          margin: 5px 0 0 0;
        }
      }
    }
    .content1 {
      width: 1200px;
      margin: 30px auto 0;
      text-align: left;
      ul {
        width: 100%;
        margin: 0;
        padding: 0;
        li {
          width: 100px;
          height: 40px;
          list-style: none;
          margin: 0 30px 30px 0;
          display: inline-block;
          vertical-align: top;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }
      p {
        color: #7a7a7e;
        font-size: 12px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .bottom {
    color: #7a7a7e;
    font-size: 12px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}
</style>

<template>
  <div id="app">
    <div class="header">
      <div class="tele">
        <img src="../../assets/images/icon_tele.png" alt>
        <span>客服电话: 400-0611-771 (法定工作日9:00-18:00)</span>
      </div>
      <div class="nav">
        <ul>
          <li>登录</li>
          <li>
            <span>18226626731</span>
            <span>[退出]</span>
          </li>
          <li>风险管理</li>
          <li>投资者教育</li>
          <li>风险提示</li>
        </ul>
      </div>
    </div>
    <div class="banner">
      <div class="content">
        <div class="logo">
          <img src="../../assets/images/logo.png" alt>
        </div>
        <div class="nav">
          <ul>
            <li
              v-for="(item, index) in Navs"
              :key="index"
              :class="{on: index === NavIndex}"
              @click="NavChange(index)"
            >{{ item.title }}</li>
          </ul>
        </div>
        <div class="account">
          <img src="../../assets/images/account.png" alt="account">
          <span>我的账户</span>
        </div>
      </div>
    </div>
    <slot name="content"/>
    <div class="footer">
      <div class="content">
        <div class="list">
          <div class="title">信息披露</div>
          <ul>
            <li>关于我们</li>
            <li>风险管理信息</li>
          </ul>
        </div>
        <div class="list">
          <div class="title">投资者教育</div>
          <ul>
            <li>法律法规</li>
            <li>投资者教育专区</li>
            <li>行业新闻</li>
          </ul>
        </div>
        <div class="list">
          <div class="title">安全保障</div>
          <ul>
            <li>安全保障</li>
            <li>电子签章</li>
          </ul>
        </div>
        <div class="list">
          <div class="title">帮助中心</div>
          <ul>
            <li>联系我们</li>
            <li>通知公告</li>
          </ul>
        </div>
        <div class="wx">
          <img src="../../assets/images/wx.png" alt="wx">
          <p>关注微信公众号</p>
        </div>
        <div class="app">
          <img src="../../assets/images/app.png" alt="app">
          <p>一动客户端下载</p>
        </div>
        <div class="tele">
          <div class="telephone">400-0611-881</div>
          <div class="serverTime">服务时间: 9:00~18:00 (法定工作日)</div>
        </div>
      </div>
      <div class="content1">
        <ul>
          <li>
            <img src="../../assets/images/footer_3.png" alt="img">
          </li>
          <li>
            <img src="../../assets/images/footer_2.png" alt="img">
          </li>
          <li>
            <img src="../../assets/images/footer_4.png" alt="img">
          </li>
          <li>
            <img src="../../assets/images/footer_1.png" alt="img">
          </li>
        </ul>
        <p>温馨提示: 历史年化收益非实际收益承诺。出借有风险，选择需谨慎</p>
      </div>
    </div>
    <div class="bottom">
      <span>©Copyright Resered 2015-2018©凹凸凹金服|广州凹凸凹互联网金融信息服务有限公司 (https://www.gzp2p.com/) |粤ICP备17135125号-1</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Common',
  computed: {
    NavIndex () {
      return this.$store.state.Navs.NavIndex
    },
    Navs () {
      return [{
        path: '/',
        title: '首页'
      }, {
        path: '/investZone',
        title: '投资专区'
      }, {
        path: '/',
        title: '我要借款'
      }, {
        path: '/information/company',
        title: '信息披露'
      }]
    }
  },
  methods: {
    ...mapActions([
      'NavsChange'
    ]),
    NavChange (arg) {
      this.NavsChange(arg)
      this.navIndex = arg
      this.$router.push({
        path: this.Navs[arg].path
      })
    }
  }
}
</script>
