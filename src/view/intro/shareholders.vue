<style lang="less" scoped>
  #Introduce{
    width: 100%;
  }
  #container{
    width: 100%;
    background: #fff;
    padding: 30px 20px;
    box-sizing: border-box;
    text-align: left;
    .cont_title{
      color: #444;
      font-size: 20px;
      height: 40px;
      line-height: 40px;
      margin: 0 0 30px 0;
      position: relative;
      &:after{
        content: '';
        height: 1px;
        background: #eee;
        position: absolute;
        left: 100px;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto 0;
      }
    }
    .cont_main{
      width: 100%;
      img{
        display: inline-block;
        width: 100%;
        margin: 0 0 30px 0;
      }
      p{
        color: #323436;
        font-size: 16px;
        text-indent: 2em;
        line-height: 30px;
        margin: 0;
        padding: 0;
      }
    }
  }
  .contact{
    width: 100;
    background: #fff;
    text-align: right;
    padding: 20px;
    margin: 30px 0 0 0;
    img{
    height: 93px;
    }
  }
</style>

<template>
  <div id="Introduce">
    <div id="container">
      <div class="cont_title">公司简介1</div>
      <div class="cont_main">
        <img src="../../assets/images/intro.png">
        <p><span>广州凹凸凹互联网金融信息服务有限公司注册资本5789万元人名币，实缴资本为1409万元人民币，社会信用代码是91440101347410164J。公司注册地址为广东省广州市南沙区金洲路宝发商贸城B座之一45号02房，实际经营地址为广东省广州市天河区珠江西路15号江城大厦3506单元，经营范围是互联网金融信息服务等。公司成立2015年，历经两年多的策划筹备，在金融最新监管政策指导下，规范上线运营。</span></p>
        <p><span>公司自成立以来就本着“以人为本、创新突破、合规经营、共赢发展”的理念，致力于成为一个备受投资者及行业尊敬的、对中国经济社会健康转型承担社会责任的互联网金融服务公司</span></p>
      </div>
    </div>
    <div class="contact">
        <img src="../../assets/images/contact.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'Shareholders'
}
</script>
