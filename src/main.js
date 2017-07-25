import Vue from 'vue'
import Vuex from 'vuex'
import VueMaterial from 'vue-material'

Vue.use(Vuex)
Vue.use(VueMaterial)

new Vue({
  el: '#app',
  render: h => h(require('./App.vue'))
})
