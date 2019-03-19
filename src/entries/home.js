import Vue from 'vue'
import Vuex from 'vuex'

import Components from '../components/mo_home';
import CommonComponents from '../components/00_common'

import { storeObj } from '../stores/managerStore'
import { autoLogoutUser } from '../util/auto-logout-user'

import CommonComps from '../plugins/main.bundle'

// Stylesheet
import '../styles/main.scss'

// Global Components Common
CommonComponents.forEach((component) => {
  Vue.component(component.name, component)
})

// Global Components Home Root
Components.forEach((component) => {
  Vue.component(component.name, component)
})

// Plugins
Vue.use(Vuex)

Vue.use(CommonComps)


//Store
const store = new Vuex.Store(storeObj)

// Start
const root = new Vue({
  el: '#vue-container',
  store,
  mounted() {
    autoLogoutUser(store)
  }
})


