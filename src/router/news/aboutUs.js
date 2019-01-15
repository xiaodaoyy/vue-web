const Company = resolve => require(['@/view/aboutUs/company'], resolve)
const Shareholders = resolve => require(['@/view/aboutUs/shareholders'], resolve)

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
  }
]

export default RouteAboutUs
