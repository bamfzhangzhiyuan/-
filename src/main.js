import Vue from "vue"

import App from "./App.vue"

import 'lib-flexible/flexible'

import vueLoading from "vue-lazyload"

import router from "./router/index"

import store from "./store/index"

import { Button } from 'mint-ui'

import "./mock/mockserver"

import loading from "../static/img/timg.gif"

Vue.use(vueLoading,{
  loading
})
Vue.component(Button.name,Button)
Vue.store = store
new Vue({
  el:"#app",
  render:h=>h(App),
  router,
  store
})
