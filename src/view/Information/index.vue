<style lang="less" scoped>
.container {
  color: #323436;
  width: 1200px;
  margin: 30px auto 60px;
  display: flex;
  .cont_left {
    width: 200px;
    height: fit-content;
    padding: 20px 0;
    background: #fff;
  }
  .cont_righ {
    width: 970px;
    margin: 0 0 0 30px;
  }
}
</style>

<template>
  <Common>
    <div class="container" slot="content">
      <div class="cont_left">
        <Navs/>
      </div>
      <div class="cont_righ">
        <router-view />
      </div>
    </div>
  </Common>
</template>

<script>
import Navs from '@/components/nav/index'
export default {
  name: 'Information',
  components: {
    Navs
  },
  created () {
    this.$store.commit('NavsChange', 3)
  }
}
</script>
