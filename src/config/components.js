import Common from '@/components/common/common'
import AboutTitle from '@/components/aboutUsTitle'
import TableStyle from '@/components/tableStyle'

const Components = {
  install: function (Vue) {
    Vue.component('Common', Common)
    Vue.component('AboutTitle', AboutTitle)
    Vue.component('TableStyle', TableStyle)
  }
}
export default Components
