const LawsR = resolve => require(['@/view/Information/laws/lawsRegulations'], resolve)
const Forbidden = resolve => require(['@/view/Information/laws/forbidden'], resolve)

const RouteSafe = [
  {
    path: 'laws',
    name: 'LawsR',
    component: LawsR,
    meta: {
      title: '法律法规',
      index: [4, 0]
    }
  },
  {
    path: 'forbidden',
    name: 'Forbidden',
    component: Forbidden,
    meta: {
      title: '禁止行为',
      index: [4, 1]
    }
  }
]

export default RouteSafe
