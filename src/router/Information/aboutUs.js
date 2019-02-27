const Company = resolve => require(['@/view/Information/aboutUs/company'], resolve)
const Shareholders = resolve => require(['@/view/Information/aboutUs/shareholders'], resolve)
const Institutional = resolve => require(['@/view/Information/aboutUs/institutional'], resolve)
const TeamIntro = resolve => require(['@/view/Information/aboutUs/teamIntro'], resolve)

const RouteAboutUs = [
  {
    path: 'company',
    name: 'Company',
    component: Company,
    meta: {
      title: '公司简介',
      index: [0, 0]
    }
  },
  {
    path: 'shareholders',
    name: 'Shareholders',
    component: Shareholders,
    meta: {
      title: '股东介绍',
      index: [0, 1]
    }
  },
  {
    path: 'institutional',
    name: 'Institutional',
    component: Institutional,
    meta: {
      title: '机构信息',
      index: [0, 2]
    }
  },
  {
    path: 'teamIntro',
    name: 'TeamIntro',
    component: TeamIntro,
    meta: {
      title: '团队介绍',
      index: [0, 3]
    }
  }
]

export default RouteAboutUs
