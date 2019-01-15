<style lang="less" scoped>
  #Introduce{
    width: 100%;
  }
  #container_title{
    width: 100%;
    padding: 0 0 60px 0;
    background: #fff;
    img{
      width: 100%;
    }
  }
  #container{
    width: 100%;
    background: #fff;
    padding: 0 20px 60px 40px;
    box-sizing: border-box;
    text-align: left;
    .intro{
      padding: 0 20px 40px 0;
      box-sizing: border-box;
    }
    ul{
      width: 100%;
      li{
        width: 100%;
        margin: 0 0 20px 0;
        display: flex;
        .li_left{
          width: 180px;
          height: 120px;
        }
        .li_right{
          flex: 1;
          margin: 0 0 0 20px;
          .name{
            color: #323436;
            font-size: 20px;
            margin: 0 0 10px 0;
          }
          .intro{
            color: #323436;
            font-size: 16px;
            line-height: 32px;
          }
        }
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
    <div id="container_title">
      <img src="../../assets/images/navTitle/shareholders.png" alt="">
    </div>
    <div id="container">
      <img class="intro" src="../../assets/images/nav/shareholders_1.png" alt="">
      <ul>
        <li v-for="(item, index) in data" :key="index">
          <div class="li_left">
            <img :src="item.img" alt="">
          </div>
          <div class="li_right">
            <div class="name">
              {{ item.name }}
            </div>
            <div class="intro">
              {{ item.intro }}
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="contact">
      <img src="../../assets/images/contact.png" alt="">
    </div>
  </div>
</template>

<script>
import Data from '@/assets/data/aboutUs'
export default {
  name: 'Company',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.data = Data.shareholders
  }
}
</script>
