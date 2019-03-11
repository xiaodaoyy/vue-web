<style lang="less" scoped>
  .intro {
    color: #323436;
    font-size: 16px;
    padding: 0 0 10px 20px;
    text-align: left;
    background: #fff;
    li {
      display: flex;
      text-align: left;
      margin: 0 0 20px 0;
      i {
        color: #f85347;
        font-size: 16px;
        margin: 0 5px 0 0;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
      .tele, .fax {
        width: 300px;
      }
    }
  }
  .map {
    width: 100%;
    padding: 0 20px 60px;
    background: #fff;
    box-sizing: border-box;
  }
</style>

<template>
  <AboutTitle :url="url">
    <div slot="main" id="container">
      <ul class="intro">
        <li>
          <i class="iconfont">&#xe628;</i><span>公司地址：广东省广州市天河区珠江西路15号珠江城大厦3506单元</span>
        </li>
        <li>
          <div class="tele">
            <i class="iconfont">&#xe632;</i><span>电话：400-0611-881</span>
          </div>
          <div class="fax">
            <i class="iconfont">&#xe6e3;</i><span>传真：020-2811863</span>
          </div>
        </li>
        <li>
          <div class="tele">
            <i class="iconfont">&#xe6af;</i><span>客服邮箱：service@gzp2p.com</span>
          </div>
          <div class="fax">
            <i class="iconfont">&#xe632;</i><span>投诉电话：020-2811863</span>
          </div>
        </li>
        <li>
          <i class="iconfont">&#xe632;</i><span>反欺诈投诉电话：020-2811863</span>
        </li>
      </ul>
      <div class="map">
        <img src="../../../assets/images/map.jpg">
      </div>
    </div>
  </AboutTitle>
</template>

<script>
export default {
  name: 'contactUs',
  data () {
    return {
      url: require('@/assets/images/navTitle/contactus.png')
    }
  }
}
</script>
