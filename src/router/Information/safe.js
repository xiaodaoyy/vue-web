const FeeScale = resolve => require(['@/view/Information/safe/feescale'], resolve)

const RouteSafe = [
  {
    path: 'feescale',
    name: 'FeeScale',
    component: FeeScale,
    meta: {
      title: '收费标准',
      index: [3, 2]
    }
  }
]

export default RouteSafe
