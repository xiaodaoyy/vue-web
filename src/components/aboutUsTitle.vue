<style lang="less" scoped>
#aboutTitleCont {
  width: 100%;
  #container_title {
    width: 100%;
    padding: 0 0 60px 0;
    background: #fff;
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
  <div id="aboutTitleCont">
    <div id="container_title">
      <img :src="url" alt>
    </div>
    <slot name="main"></slot>
    <div class="contact">
      <img src="../assets/images/contact.png" alt>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about-us-title',
  props: {
    url: {
      type: String,
      default: ''
    }
  }
}
</script>
