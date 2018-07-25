import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/examples/HelloWorld'
import Input from '@/examples/Input'
import Progress from '@/examples/Progress'
 import Calendar from '@/examples/Calendar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Input',
      name: 'Input',
      component: Input
    },
    {
      path: '/Progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/Calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})
