import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['@/views/home'], resolve)

/* 选项 */
const Font = resolve => require(['@/views/option/font'], resolve)

/* 布局 */

/* 基础组件 */
const Btn = resolve => require(['@/views/base/btn'], resolve)
const Snackbar = resolve => require(['@/views/base/snackbar'], resolve)
const Toast = resolve => require(['@/views/base/toast'], resolve)

/* 弹框 */

/* 复合组件 */

/* 动画 */

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/base/btn',
    children: [{
      path: '/option/font',
      name: 'Font',
      component: Font
    }, {
      path: '/base/btn',
      name: 'Btn',
      component: Btn
    }, {
      path: '/base/snackbar',
      name: 'Snackbar',
      component: Snackbar
    }, {
      path: '/base/toast',
      name: 'Toast',
      component: Toast
    }]
  }]
})
