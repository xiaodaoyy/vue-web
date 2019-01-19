import AboutTitle from '@/components/aboutUsTitle'
import TableStyle from '@/components/tableStyle'

const Components = {
  install: function (Vue) {
    Vue.component('AboutTitle', AboutTitle)
    Vue.component('TableStyle', TableStyle)
  }
}
export default Components
