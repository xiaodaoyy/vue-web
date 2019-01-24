/**
 * 信息披露的路由
 */
import RouteAboutUs from '@/router/Information/aboutUs'
import RouteSafe from '@/router/Information/safe'
import RouteLaws from '@/router/Information/laws'

const RouteInformation = RouteAboutUs.concat(RouteSafe).concat(RouteLaws)
export default RouteInformation
