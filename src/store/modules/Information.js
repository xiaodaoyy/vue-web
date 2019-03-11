// initial state
const state = {
  Nav: {
    navIndex: [0, 0],
    navList: [{
      title: '关于我们',
      icon: 'icon_aboutUs',
      bar: [
        {
          title: '公司简介',
          path: 'company'
        },
        {
          title: '股东介绍',
          path: 'shareholders'
        },
        {
          title: '机构信息',
          path: 'institutional'
        },
        {
          title: '团队介绍',
          path: 'teamIntro'
        },
        {
          title: '联系我们',
          path: 'contactUs'
        }
      ]
    }, {
      title: '业务介绍',
      icon: 'icon_business',
      bar: []
    }, {
      title: '运营分析',
      icon: 'icon_operate',
      bar: []
    }, {
      title: '合规安全',
      icon: 'icon_safe',
      bar: [
        {
          title: '风险管理信息',
          path: 'shareholders'
        },
        {
          title: '银行存管信息',
          path: 'shareholders'
        },
        {
          title: '收费标准',
          path: 'feescale'
        }
      ]
    }, {
      title: '法律法规',
      icon: 'icon_law',
      bar: [
        {
          title: '法律法规',
          path: 'laws'
        },
        {
          title: '禁止行为',
          path: 'forbidden'
        }
      ]
    }, {
      title: '平台公告',
      icon: 'icon_platform',
      bar: [
        {
          title: '法律法规',
          path: 'shareholders'
        },
        {
          title: '逾期公示',
          path: 'shareholders'
        },
        {
          title: '公开报告',
          path: 'shareholders'
        },
        {
          title: '通知公告',
          path: 'shareholders'
        },
        {
          title: '重大事项',
          path: 'shareholders'
        },
        {
          title: '大事记',
          path: 'shareholders'
        },
        {
          title: '信披确认函',
          path: 'shareholders'
        }
      ]
    }]
  }
}

// actions
const actions = {
  navChange (context, obj) {
    context.commit('navChange', obj)
  }
}

// mutations
const mutations = {
  navChange (state, indexObj) {
    state.Nav = Object.assign(state.Nav, {
      navIndex: indexObj
    })
  }
}

// getters
const getters = {}

export default {
  state,
  getters,
  actions,
  mutations
}
