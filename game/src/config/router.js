import Vue from 'vue'
import Router from 'vue-router'
// import index from '@/components/Index'
import Index from '../components/MainGameSence.vue'
import ChoiceBranch from '@/components/ChoiceBranch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})
