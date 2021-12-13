/* 布局 */

/* 基础组件 */
import  { Btn, BtnGroup } from '@xiyan/button/index'
import Snackbar from '@xiyan/snackbar'
import Toast from '@xiyan/toast'

/* 弹框 */

/* 复合组件 */

/* 动画 */

const components = [
  Btn,
  BtnGroup
]

export default {
  install (Vue) {
    components.map(component => {
      Vue.component(component.name, component)
    })

    Vue.prototype.$snackbar = Snackbar
    Vue.prototype.$toast = Toast
  }
}
