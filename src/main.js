// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuetify from 'vuetify'
import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/dist/vuetify.css'
import '../node_modules/vuetify/dist/vuetify.min'
import BootstrapVue from 'bootstrap-vue'
import VueCarousel from 'vue-carousel'
import icons from 'glyphicons'
import VModal from 'vue-js-modal'
import StarRating from 'vue-star-rating'

Vue.use(StarRating)

Vue.use(VModal, {
  dialog: true,
  dynamic: true
})
Vue.use(icons)
Vue.use(VueCarousel)
Vue.use(BootstrapVue)
Vue.use(Vuetify)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
