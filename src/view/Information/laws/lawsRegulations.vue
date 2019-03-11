<style lang="less" scoped>
#contain {
  width: 100%;
  background: #fff;
  padding: 0 30px;
  box-sizing: border-box;
  text-align: left;
  .cont_main {
    width: 100%;
    ul {
      font-size: 18px;
      li {
        border-bottom: #f2f2f2 solid 1px;
        line-height: 78px;
        height: 78px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        a:hover {
          color: #f85347;
        }
        a:active {
          color: #323436;
        }
      }
      li:last-child {
        border-bottom: 0;
      }
    }
  }
}
</style>

<template>
  <AboutTitle :headerInfo="headerInfo" :autograph="autograph">
    <div slot="main" id="contain">
      <div class="cont_main">
        <ul>
          <li>
            <a>广东省金融办发布《关于进一步做好全省网络借贷信息中介机构整改验收有关事项的通知》</a>
          </li>
          <li>
            <a>中国互联网金融协会发布《互联网金融信息披露个体网络借贷》</a>
          </li>
          <li>
            <a>中国银监会印发《网络借贷信息中介机构业务活动信息披露指引》</a>
          </li>
          <li>
            <a>《中华人民共和国民法总则》</a>
          </li>
          <li>
            <a>中国银监会办公厅关于印发网络借贷资金存管业务指引的通知</a>
          </li>
          <li>
            <a>《网络借贷信息中介机构备案登记管理指引》全文</a>
          </li>
          <li>
            <a>中国银监会等四部委发布《网络借贷信息中介机构业务活动管理暂行办法》</a>
          </li>
          <li>
            <a>《广东省P2P网络借贷风险专项整治工作实施方案》</a>
          </li>
        </ul>
      </div>
    </div>
  </AboutTitle>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
      autograph: false
    }
  },
  computed: {
    headerInfo () {
      return {
        color: '&#xe60b;',
        name: '法律法规'
      }
    }
  }
}
</script>
