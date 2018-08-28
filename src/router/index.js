import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Information from '@/components/Information'
import WhatsOn from '@/components/WhatsOn'
import AboutUs from '@/components/AboutUs'
import Location from '@/components/Location'
import FilmClassification from '@/components/FilmClassification'
import ComingSoon from '@/components/ComingSoon'
import SignUpPage from '@/components/SignUpPage'
import Login from '@/components/Login'
import Book from '@/components/Book'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/information',
      name: 'Information',
      component: Information
    },
    {
      path: '/whatson',
      name: 'WhatsOn',
      component: WhatsOn
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/location',
      name: 'Location',
      component: Location
    },
    {
      path: '/filmclassification',
      name: 'FilmClassification',
      component: FilmClassification
    },
    {
      path: '/comingsoon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/reg',
      name: 'SignUp',
      component: SignUpPage
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
