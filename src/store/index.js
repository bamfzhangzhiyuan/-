import state from "./states"

import actions from "./actions"

import getters from "./getters"

import discern from "./modules/discern"

import home from "./modules/home"

import things from "./modules/things"

import vue from "vue"

import vuex from "vuex"

vue.use(vuex)

export default  new vuex.Store({
  state,
  actions,
  getters,
  modules:{
    discern,
    home,
    things
  }

})
