<style lang="less" scoped>
ul {
  width: 100%;
  border-top: 1px solid #f2f2f2;
  border-left: 1px solid #f2f2f2;
  box-sizing: border-box;
  li {
    display: inline-block;
    font-size: 16px;
    width: 50%;
    height: 48px;
    line-height: 48px;
    text-align: left;
    box-sizing: border-box;
    vertical-align: top;
    position: relative;
    &.row {
      width: 100%;
    }
    .key {
      width: 135px;
      height: 100%;
      padding: 0 20px;
      display: inline-block;
      box-sizing: border-box;
      border-right: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      background: #fbfbfb;
    }
    .value {
      padding: 0 20px;
      position: absolute;
      top: 0;
      left: 135px;
      right: 0;
      bottom: 0;
      box-sizing: border-box;
      border-right: 1px solid #f2f2f2;
      border-bottom: 1px solid #f2f2f2;
      &.line {
        font-size: 14px;
        line-height: 20px;
        padding: 4px 20px;
      }
    }
  }
}
</style>

<template>
  <ul>
    <li v-for="(item, index) in Data" :key="index" :class="{row: item.row}">
      <span class="key">{{ item.key }}</span>
      <span class="value" :class="{line: item.line}">{{ item.value }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'tableStyle',
  props: {
    Data: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
