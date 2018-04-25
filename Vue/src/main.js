// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 在使用click事件时，某些移动端会有300ms延迟，通过引入库可以解决这个问题
import 'styles/reset.css' // 统一各浏览器表现的基本css
import 'styles/border.css' // 解决高倍评一像素边框的问题
import vueScrollTo from 'vue-scrollto'

fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(vueScrollTo, {
  container: 'body',
  duration: 1000,
  easing: 'ease-in-out',
  offset: -75,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
