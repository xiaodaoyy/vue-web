<style lang="less" scoped>
ul {
  width: 100%;
  margin: 0;
  padding: 0;
  li {
    width: 100%;
    list-style: none;
    text-align: center;
    .list_title {
      color: #333;
      font-size: 16px;
      height: 50px;
      line-height: 50px;
      .icon_aboutUs {
        background-image: url("../../assets/images/aboutUs.png");
      }
      .icon_business {
        background-image: url("../../assets/images/business.png");
      }
      .icon_operate {
        background-image: url("../../assets/images/operate.png");
      }
      .icon_safe {
        background-image: url("../../assets/images/safe.png");
      }
      .icon_law {
        background-image: url("../../assets/images/law.png");
      }
      .icon_platform {
        background-image: url("../../assets/images/platform.png");
      }
      span {
        margin: 0 10px;
        cursor: pointer;
        vertical-align: middle;
      }
      .icon {
        width: 16px;
        height: 16px;
        background-size: 100% 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .icon_more {
        width: 12px;
        height: 12px;
        background-image: url("../../assets/images/right.png");
        background-size: 100% 100%;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .list_title.on {
      color: #f85347;
      .icon_aboutUs {
        background-image: url("../../assets/images/aboutUs_index.png");
      }
      .icon_more {
        background-image: url("../../assets/images/down.png");
      }
    }
    &.on > .li_item {
      display: block;
    }
    &.on > .li_item .index {
      color: #fff;
      background: #f85347;
      &:after {
        content: none;
      }
    }
    &.on > .list_title {
      color: #f85347;
      .icon_aboutUs {
        background-image: url("../../assets/images/aboutUs_index.png");
      }
      .icon_more {
        background-image: url("../../assets/images/down.png");
      }
    }
    .li_item {
      display: none;
      width: 100%;
      li {
        color: #666;
        font-size: 14px;
        width: 100%;
        height: 36px;
        line-height: 36px;
        cursor: pointer;
        text-align: center;
        position: relative;
        &:after {
          content: "";
          height: 1px;
          background: #eee;
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 0;
        }
        &:hover {
          color: #fff;
          background: #f85347;
          &:after {
            content: none;
          }
        }
      }
    }
    &:hover > .li_item {
      display: block;
    }
    &:hover > .list_title {
      color: #f85347;
      .icon_aboutUs {
        background-image: url("../../assets/images/aboutUs_index.png");
      }
      .icon_business {
        background-image: url("../../assets/images/business_index.png");
      }
      .icon_operate {
        background-image: url("../../assets/images/operate_index.png");
      }
      .icon_safe {
        background-image: url("../../assets/images/safe_index.png");
      }
      .icon_law {
        background-image: url("../../assets/images/law_index.png");
      }
      .icon_platform {
        background-image: url("../../assets/images/platform_index.png");
      }
      .icon_more {
        background-image: url("../../assets/images/down.png");
      }
    }
  }
}
</style>

<template>
  <ul>
    <li v-for="(item, index) in Native.navList" :key="index" :class="{on: index == Native.navIndex[0]}">
      <div class="list_title">
        <i class="icon" :class="item.icon"></i>
        <span>{{ item.title }}</span>
        <i class="icon_more"></i>
      </div>
      <ul class="li_item">
        <li v-for="(list, eq) in item.bar" :key="list" :class="{index: eq == Native.navIndex[1]}" @click="navChangeFunc(index, eq, list.path)">{{ list.title }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'c-nav',
  computed: {
    Native () {
      return this.$store.state.News.Nav
    }
  },
  methods: {
    ...mapActions([
      'navChange'
    ]),
    navChangeFunc (index, eq, path) {
      this.navChange([index, eq])
      this.$router.push({
        path: path
      })
    }
  },
  created () {}
}
</script>
