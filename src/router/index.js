import Vue from 'vue'
import Router from 'vue-router'
import ChartLine from '../views/ChartLine.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',

  routes: [

    {

      path: '/line',

      name: 'Line',

      component: ChartLine

    }

  ]

})
