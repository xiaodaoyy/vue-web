<style lang="less" scoped>
#container {
  width: 100%;
  background: #fff;
  padding: 0 20px 60px;
  box-sizing: border-box;
}
</style>

<template>
  <AboutTitle :url="url">
    <div slot="main" id="container">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </AboutTitle>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
      url: require('@/assets/images/navTitle/institutional.png')
    }
  }
}
</script>
