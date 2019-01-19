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
      <TableStyle :Data="Data" />
    </div>
  </AboutTitle>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
      url: require('@/assets/images/navTitle/institutional.png'),
      Data: [
        {
          key: '公司全称',
          value: '广州凹凸凹互联网金融信息服务有限公司'
        }, {
          key: '平台名称',
          value: '凹凸凹金服网'
        }, {
          key: '公司简称',
          value: '凹凸凹金服'
        }, {
          key: '平台网址',
          value: 'www.gzp2p.com'
        }, {
          key: '法定代表人',
          value: '纪洋'
        }, {
          key: 'IP地址',
          value: '112.74.245.75'
        }, {
          key: '成立时间',
          value: '2015年6月18日'
        }, {
          key: '上线时间',
          value: '2017年8月1日'
        }, {
          key: '统一社会信用代码',
          value: '91440101347410164J'
        }, {
          key: '经营期限',
          value: '长期'
        }, {
          key: '注册资本',
          value: '5789万元'
        }, {
          key: '注册地址',
          line: true,
          value: '广州市南沙区金洲路宝发商贸城B座之一45号02房'
        }, {
          key: '实际资本',
          value: '1409万元'
        }, {
          key: '经营地址',
          line: true,
          value: '广州市天河区珠江西路15号珠江城大厦3506单元'
        }, {
          key: '经营状态',
          value: '正常经营'
        }, {
          key: '分之机构',
          value: '无'
        }, {
          key: '平台APP名称',
          value: '凹凸凹金服'
        }, {
          key: '微信号',
          value: '广州凹凸凹(公众号)'
        }, {
          key: '客服邮箱',
          value: 'server@gzp2p.com'
        }, {
          key: '联系客服',
          value: '400-0611-881(法定工作日9:00-18:00)'
        }, {
          key: '经营范围',
          row: true,
          value: '互联网金融信息服务;投资咨询服务;投资管理服务;市场营销策划服务;策划创意服务'
        }
      ]
    }
  }
}
</script>
