import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'
import Immigration from '@/views/immigration'
import ImmigrationDetail from '@/views/immigrationDetail'
import ImmigrationHongKongDetail from '@/views/immigrationHongKongDetail'
import Account from '@/views/account'
import House from '@/views/house'
import Business from '@/views/business'
import AboutUs from '@/views/aboutUs'
import Team from '@/views/team'
import News from '@/views/news'
import Interview from '@/views/interview'
import Education from '@/views/education'
import Visa from '@/views/visa'

Vue.use(Router)

const router =  new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/immigration',
      name: 'Immigration',
      component: Immigration
    },
    {
      path: '/immigrationDetail',
      name: 'ImmigrationDetail',
      component: ImmigrationDetail
    },
    {
      path: '/immigrationHongKongDetail',
      name: 'ImmigrationHongKongDetail',
      component: ImmigrationHongKongDetail
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/house',
      name: 'House',
      component: House
    },
    {
      path: '/business',
      name: 'Business',
      component: Business
    },
    {
      path: '/visa',
      name: 'Visa',
      component: Visa
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/interview',
      name: 'Interview',
      component: Interview
    }
  ]
})

export default router;