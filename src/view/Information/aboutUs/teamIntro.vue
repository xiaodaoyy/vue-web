<style lang="less" scoped>
#container {
  width: 100%;
  box-sizing: border-box;
  text-align: left;
  .userList {
    width: 100%;
    background: #fff;
    padding: 0 20px 10px;
    box-sizing: border-box;
    .title {
      color: #323436;
      font-size: 20px;
      margin: 0 0 30px 0;
      position: relative;
      &:after {
        content: '';
        width: 800px;
        height: 2px;
        background: #f2f2f2;
        position: absolute;
        top: 0;
        left: 120px;
        bottom: 0;
        margin: auto 0;
      }
    }
    .list {
      width: 100%;
      ul {
        width: 100%;
        li {
          display: flex;
          margin: 0 0 70px 0;
          .img {
            width: 120px;
            height: 140px;
          }
          .intro {
            flex: 1;
            margin: 0 0 0 20px;
            .name {
              color: #323436;
              font-size: 20px;
              position: relative;
              &:after {
                content: '';
                width: 20px;
                height: 2px;
                background: #f85347;
                position: absolute;
                left: 0;
                bottom: -10px;
              }
              span {
                color: #7a7a7a;
                font-size: 14px;
              }
            }
            .content {
              color: #323436;
              font-size: 16px;
              line-height: 32px;
              margin: 20px 0 0 0;
            }
          }
        }
      }
    }
  }
}
</style>

<template>
  <AboutTitle :url="url">
    <div slot="main" id="container">
      <div class="userList">
        <div class="title">
          <span>董监高信息</span>
        </div>
        <div class="list">
          <ul>
            <li v-for="(item, index) in userInfo" :key="index">
              <div class="img">
                <img :src="item.img" alt="张建红">
              </div>
              <div class="intro">
                <div class="name">
                  {{ item.name }} <span> {{ item.position }} </span>
                </div>
                <div class="content">
                  {{ item.intro }}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </AboutTitle>
</template>

<script>
export default {
  name: 'Company',
  data () {
    return {
      url: require('@/assets/images/navTitle/teamintro.png'),
      userInfo: [
        {
          img: require('@/assets/images/team/user_zjh.png'),
          name: '张建红',
          position: '董事 / 实际控制人 / 总经理 / 首席运营官',
          intro: '曾在中国银行广东省辖内多个区域任支行行长、分行副行长等高管职务，25年的银行从业经历使其具有全面的金融专业知识和风险管控能力，熟悉掌握企业经营管理和战略规划，有较强的业务创新、渠道建设及产品设计能力'
        }, {
          img: require('@/assets/images/team/user_jy.png'),
          name: '纪洋',
          position: '法定代表人 / 董事长',
          intro: '毕业于北京师范大学金融学专业，曾任职于大型资产管理公司、大型融资性担保公司、知名基金管理公司，熟悉投资业务及中小微企业贷款业务，具备较全面的项目管理和企业财务分析能力。主导的投资项目涉及到大健康产业、互联网社交平台、互联网电竞产业、供应链金融、汽车后服务市场等多个领域'
        }, {
          img: require('@/assets/images/team/user_wzj.png'),
          name: '王志健',
          position: '董事',
          intro: '中山大学工商管理硕士，中国注册会计师、经济师，先后就职于普华永道会计师事务所、粤财投控股集团和建信信托有限责任公司，拥有17年金融行业和财务风控管理经验，曾为多家企业提供财务咨询、年度审计及风险审查等服务，在财务规划、财务管理及风险控制等方面有较强的把握能力'
        }, {
          img: require('@/assets/images/team/user_cgl.png'),
          name: '陈光磊',
          position: '首席风险官',
          intro: '注册金融风险管理师（CFRM），中国注册风险管理师协会会员（ICFRM），先后就职于广发银行、广州银行，任职信贷审批负责人、高级项目主管等职位，具有14年金融行业风控领域从业经验。后加入上市企业旗下知名网贷平台任常务副总经理，主管风控工作，成为早期互联网金融从业者。精通互联网金融资产交易管理及大数据风控，在风控政策、模型及反欺诈方面有深刻见解'
        }, {
          img: require('@/assets/images/team/user_cgl.png'),
          name: '陈光磊',
          position: '首席风险官',
          intro: '注册金融风险管理师（CFRM），中国注册风险管理师协会会员（ICFRM），先后就职于广发银行、广州银行，任职信贷审批负责人、高级项目主管等职位，具有14年金融行业风控领域从业经验。后加入上市企业旗下知名网贷平台任常务副总经理，主管风控工作，成为早期互联网金融从业者。精通互联网金融资产交易管理及大数据风控，在风控政策、模型及反欺诈方面有深刻见解'
        }, {
          img: require('@/assets/images/team/user_zyl.png'),
          name: '张倚銮',
          position: '首席财务官',
          intro: '毕业于暨南大学，中国注册会计师，曾任职于普华永道会计师事务所，拥有15年财务管理经验，为众多跨国企业和国内大、中型企业提供各项财务咨询服务，通过集合各种资源及专业知识为客户提供上市、架构重组、投资策划建设，参与过多个大型并购项目，提供并购的尽职调查及并购方案设计等咨询服务，具有较强的财务预测分析及风险防范能力'
        }, {
          img: require('@/assets/images/team/user_fjb.png'),
          name: '冯建邦',
          position: '技术总监',
          intro: '毕业于暨南大学，曾任职于三七娱乐及丰芒广告等知名企业，历任部门总经理和高级运营总监等职务，熟悉互联网行业，具有较丰富的互联网企业管理运营经验，且有多年的行业内技术开发工作经验，精通行业相关技术及了解同行技术发展状况，具备一定的技术前瞻性和团队领导能力'
        }, {
          img: require('@/assets/images/team/user_zsl.png'),
          name: '赵松亮',
          position: '监事',
          intro: '澳大利亚莫大什大学工商管理硕士，新声代崛起的商务品牌————飞购网的创始人兼总裁，曾认苏宁云商自由品牌事业部总经理、澳大利亚GOODBUY商业连锁公司运营总监，海信空调西南公司总经理、海信集团湖南营销中心总经理。二十多年知名大品牌公司的市场营销管理经验，练就其超强的品牌运作能力、丰富的渠道建设能力互联网创新意识'
        }
      ]
    }
  }
}
</script>
