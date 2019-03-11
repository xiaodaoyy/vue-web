<style lang="less" scoped>
#contain {
  width: 100%;
  background: #fff;
  padding: 0 20px 60px;
  box-sizing: border-box;
  text-align: left;
  .cont_main {
    width: 100%;
    ul {
      border-bottom: #f2f2f2 solid 1px;
      border-left: #f2f2f2 solid 1px;
      li {
        display: flex;
        span {
          display: block;
          width: 130px;
          text-align: center;
          border-right: #f2f2f2 solid 1px;
          border-top: #f2f2f2 solid 1px;
          font-size: 16px;
          line-height: 32px;
          padding: 22px 0;
        }
        .explain {
          flex: 1;
          text-align: left;
          padding: 22px 66px;
        }
        .pad {
          padding: 8px 66px;
        }
      }
      li:first-child {
        background: #fbfbfb;
        .explain {
          padding: 8px 66px;
          text-align: center;
        }
      }
    }
  }
}
</style>

<template>
  <AboutTitle :headerInfo="headerInfo">
    <div slot="main" id="contain">
      <div class="cont_main">
        <ul>
          <li>
            <span>项目</span>
            <span>收费标准</span>
            <span class="explain">说明</span>
          </li>
          <li>
            <span>充值</span>
            <span>免费</span>
            <span class="explain pad">支持部分银行储蓄卡充值，每日充值限额依据各银行限额为准；不支持信用卡充值</span>
          </li>
          <li>
            <span>提现</span>
            <span>免费</span>
            <span class="explain">提现银行必须与凹凸凹金服网绑定的银行卡一致，实时到账</span>
          </li>
          <li>
            <span>投资</span>
            <span>免费</span>
            <span class="explain">目前凹凸凹金服网为投资人提供的所有服务都为免费</span>
          </li>
          <li>
            <span>借款</span>
            <span>收费</span>
            <span class="explain">目前按照借款总金额年化的3%～5%收取平台服务费</span>
          </li>
        </ul>
      </div>
    </div>
  </AboutTitle>
</template>

<script>
export default {
  name: 'Company',
  computed: {
    headerInfo () {
      return {
        color: '&#xe607;',
        name: '收费标准'
      }
    }
  }
}
</script>
