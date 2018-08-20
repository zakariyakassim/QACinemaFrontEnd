import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Help from '@/components/Help'
import WhatsOn from '@/components/WhatsOn'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/whatson',
      name: 'WhatsOn',
      component: WhatsOn
    }
  ]
})
