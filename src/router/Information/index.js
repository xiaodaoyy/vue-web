/**
 * 信息披露的路由
 */
import RouteAboutUs from '@/router/Information/aboutUs'
import RouteSafe from '@/router/Information/safe'
import RouteLaws from '@/router/Information/laws'

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
