import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/routers/Home.vue'
import About from '../components/routers/About.vue'
import revision from '../views/services/revision.vue'
import annual from '../views/services/annual_maintenance.vue'
import fault from '../views/services/fault_detection.vue'
import generalcontrol from '../views/services/general_control.vue'
import installation from '../views/services/installation.vue'
import periodic from '../views/services/periodic_maintenance.vue'
import carElevator from './views/'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/revision',
      name: 'revision',
      component: revision
    },
    {
      path: '/annual',
      name: 'annual',
      component: annual
    },
    {
      path: '/fault',
      name: 'fault',
      component: fault
    },
    {
      path: '/generalcontrol',
      name: 'generalcontrol',
      component: generalcontrol
    },
    {
      path: '/installation',
      name: 'installation',
      component: installation
    },
    {
      path: '/periodic',
      name: 'periodic',
      component: periodic
    },
  ]
})

export default router
