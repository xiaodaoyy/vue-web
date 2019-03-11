<style lang="less" scoped>
.selectBox {
  font-size: 0;
  width: 100%;
  padding: 30px 0 0 0;
  box-shadow: 0 3px 10px #dedede inset;
  .main {
    display: flex;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 30px;
    background: #fff;
    .select {
      flex: 1;
      padding: 26px 0 0 30px;
      text-align: left;
      box-sizing: border-box;
      position: relative;
      &:after {
        content: "";
        width: 1px;
        background: #feddda;
        position: absolute;
        top: 90px;
        right: 0;
        bottom: 50px;
        margin: auto 0;
      }
      .title {
        color: #f85347;
        font-size: 14px;
        font-weight: bold;
      }
      .types {
        margin: 30px 0 0 0;
        .types_list {
          display: flex;
          color: #7a7a73;
          font-size: 14px;
          margin: 0 0 30px 0;
          .name {
            font-weight: bold;
            margin: 0 40px 0 0;
            vertical-align: middle;
          }
          .list {
            vertical-align: middle;
            li {
              display: inline-block;
              margin: 0 30px 0 0;
              cursor: pointer;
              &.active {
                color: #f85347;
              }
            }
          }
        }
      }
    }
    .showData {
      width: 450px;
      padding: 30px 30px 0 0;
      box-sizing: border-box;
      .title {
        color: #7a7a7e;
        font-size: 12px;
        width: 100%;
        text-align: right;
      }
      .highchartBox {
        width: 360px;
        height: 180px;
        margin: 20px auto;
      }
    }
  }
  .productList {
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    .title {
      display: flex;
      width: 100%;
      background: #fff;
      span {
        flex: 1;
        color: #7a7a7e;
        font-size: 14px;
        line-height: 60px;
        text-align: left;
        &:nth-child(1) {
          padding: 0 0 0 30px;
        }
        &:nth-last-child(1) {
          flex: 1.2;
          text-align: center;
        }
      }
    }
    .productMain {
      width: 100%;
      .list {
        display: flex;
        width: 100%;
        height: 80px;
        background: #fff;
        position: relative;
        &.shadow:hover {
          position: relative;
          z-index: 1;
          box-shadow: 0 3px 10px #dedede;
        }
        &:nth-child(2n-1) {
          background: #fbfbfb;
        }
        li {
          flex: 1;
          color: #7a7a7e;
          font-size: 14px;
          height: 80px;
          line-height: 80px;
          text-align: left;
          .progress {
            color: #333;
            width: 100%;
            height: 100%;
            position: relative;
            .box {
              width: 100px;
              height: 4px;
              border-radius: 2px;
              overflow: hidden;
              background: #f2f2f2;
              position: absolute;
              top: 0;
              left: 0;
              bottom: 0;
              margin: auto 0;
              .inset {
                width: 55%;
                height: 4px;
                border-radius: 2px;
                background: #f85347;
              }
            }
            .percent {
              margin: 0 0 0 110px;
            }
          }
          .button {
            color: #f85347;
            font-size: 14px;
            display: inline-block;
            width: 100px;
            height: 30px;
            line-height: 30px;
            margin: 25px auto;
            cursor: pointer;
            border-radius: 2px;
            border: 1px solid #f85347;
            &:hover {
              color: #fff;
              background: #f85347;
            }
          }
          .buttonColor {
            cursor: not-allowed;
            pointer-events: none;
            color: #d0cfcf;
            display: inline-block;
            width: 100px;
            height: 30px;
            line-height: 30px;
            margin: 25px auto;
            border-radius: 2px;
            border: 1px solid #d0cfcf;
          }
          &.productName {
            font-weight: bold;
            &:hover {
              color: #f85347;
            }
          }
          &.color {
            color: #f85347;
          }
          &:nth-child(1) {
            padding: 0 0 0 30px;
          }
          &:nth-child(2) {
            font-size: 20px;
            span {
              font-size: 14px;
              margin: 0 0 0 2px;
            }
          }
          &:nth-last-child(1) {
            text-align: center;
          }
          &:nth-last-child(2) {
            flex: 1.2;
          }
        }
      }
    }
  }
  .pages{
    font-size: 14px;
    margin: 0 0 30px 0;
  }
}
</style>

<template>
  <Common>
    <div slot="content">
      <div class="selectBox">
        <div class="main">
          <div class="select">
            <div class="title">
              <span>标的筛选</span>
            </div>
            <ul class="types">
              <li class="types_list">
                <div class="name">
                  <span>标的类型</span>
                </div>
                <ul class="list">
                  <li class="active">全部</li>
                  <li>鑫鑫宝</li>
                  <li>鑫珠宝</li>
                  <li>安鑫宝</li>
                </ul>
              </li>
              <li class="types_list">
                <div class="name">
                  <span>标的期限</span>
                </div>
                <ul class="list">
                  <li class="active">全部</li>
                  <li>一个月以下</li>
                  <li>1-2个月</li>
                  <li>3-4个月</li>
                  <li>5-6个月</li>
                  <li>7-9个月</li>
                  <li>9个月</li>
                </ul>
              </li>
              <li class="types_list">
                <div class="name">
                  <span>历史年华</span>
                </div>
                <ul class="list">
                  <li class="active">全部</li>
                  <li>8.0以下</li>
                  <li>8.0-8.8%</li>
                  <li>8.8-10%</li>
                  <li>10%以上</li>
                </ul>
              </li>
              <li class="types_list">
                <div class="name">
                  <span>标的分类</span>
                </div>
                <ul class="list">
                  <li class="active">全部</li>
                  <li>天标</li>
                  <li>月标</li>
                  <li>年标</li>
                  <li>推荐标</li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="showData">
            <div class="title">历史年化收益非实际收益承诺 | 出借有风险，选择需谨慎</div>
            <div class="highchartBox" ref="container"/>
          </div>
        </div>
        <div class="productList">
          <div class="title">
            <span>借款标题</span>
            <span>年化利率</span>
            <span>产品金额</span>
            <span>投资期限</span>
            <span>投标进度</span>
            <span>操作</span>
          </div>
          <div class="productMain">
            <ul class="list shadow">
              <li class="productName">安鑫宝10010340</li>
              <li class="color">8.20
                <span>%</span>
              </li>
              <li>150,000,00元</li>
              <li>3个月</li>
              <li>
                <div class="progress">
                  <div class="box">
                    <div class="inset" />
                  </div>
                  <div class="percent">100%</div>
                </div>
              </li>
              <li>
                <span class="button">立即投标</span>
              </li>
            </ul>
            <ul class="list shadow">
              <li class="productName">安鑫宝10010340</li>
              <li class="color">8.20
                <span>%</span>
              </li>
              <li>150,000,00元</li>
              <li>3个月</li>
              <li>
                <div class="progress">
                  <div class="box">
                    <div class="inset" />
                  </div>
                  <div class="percent">100%</div>
                </div>
              </li>
              <li>
                <span class="buttonColor">已还清</span>
              </li>
            </ul>
            <ul class="list shadow">
              <li class="productName">安鑫宝10010340</li>
              <li class="color">8.20
                <span>%</span>
              </li>
              <li>150,000,00元</li>
              <li>3个月</li>
              <li>
                <div class="progress">
                  <div class="box">
                    <div class="inset" />
                  </div>
                  <div class="percent">100%</div>
                </div>
              </li>
              <li>
                <span class="buttonColor">还款中</span>
              </li>
            </ul>
          </div>
        </div>
        <Page class="pages" :total="303" show-total />
      </div>
    </div>
  </Common>
</template>

<script>
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
Highcharts3D(Highcharts)
export default {
  name: 'Index',
  created () {
    this.$store.commit('NavsChange', 1)
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let self = this
      Highcharts.chart(self.$refs.container, {
        chart: {
          type: 'pie',
          options3d: {
            enabled: true,
            alpha: 45
          }
        },
        colors: ['#f85347', '#efefef', '#bcbcbc'],
        title: {
          text: ''
        },
        credits: {
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: 100,
            depth: 45
          }
        },
        series: [{
          name: '货物金额',
          data: [
            ['可投标', 1],
            ['还款中', 5],
            ['已结束', 10]
          ]
        }]
      })
    }
  }
}
</script>
