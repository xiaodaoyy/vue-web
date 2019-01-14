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
          path: 'shareholders'
        },
        {
          title: '团队介绍',
          path: 'shareholders'
        },
        {
          title: '联系我们',
          path: 'shareholders'
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
        '风险管理信息',
        '银行存管信息',
        '收费标准'
      ]
    }, {
      title: '法律法规',
      icon: 'icon_law',
      bar: [
        '法律法规',
        '禁止行为'
      ]
    }, {
      title: '平台公告',
      icon: 'icon_platform',
      bar: [
        '逾期公示',
        '公开报告',
        '通知公告',
        '重大事项',
        '备案信息',
        '大事记',
        '信披确认函'
      ]
    }]
  }
}

// getters
const getters = {}

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

export default {
  state,
  getters,
  actions,
  mutations
}
