'use strict';

// module.exports = gpmbcWeb;

// function gpmbcWeb() {
//   console.log('cesh899555')
//     // TODO
// }

import HBtn from './button'

const install = (Vue) => {
  console.log('install all comps')
  Vue.component('HBtn', HBtn)
}
// if use Vue in script like <script scr='....vue.min.js'></script> then install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install
}


