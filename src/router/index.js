import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/routers/Home.vue'
import About from '../components/routers/About.vue'
import revision from '../views/services/revision.vue'
import annual from '../views/services/annual_maintenance.vue'
import fault from '../views/services/fault_detection.vue'
import generalcontrol from '../views/services/general_control.vue'
import installation from '../views/services/installation.vue'
import periodic from '../views/services/periodic_maintenance.vue'
import carElevator from '../views/products/car_elevator.vue'
import cargoElevator from '../views/products/cargo_elevator.vue'
import hidrolicElevator from '../views/products/hidrolic_elevator.vue'
import panaromicElevator from '../views/products/panaromic_elevator.vue'
import stretcherElevator from '../views/products/stretcher_elevator.vue'
import humanElevator from '../views/products/human_elevator.vue'

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
    {
      path: '/humanElevator',
      name: 'humanElevator',
      component: humanElevator
    },
    {
      path: '/cargoElevator',
      name: 'cargoElevator',
      component: cargoElevator
    },
    {
      path: '/hidrolicElevator',
      name: 'hidrolicElevator',
      component: hidrolicElevator
    },
    {
      path: '/panaromicElevator',
      name: 'panaromicElevator',
      component: panaromicElevator
    },
    {
      path: '/stretcherElevator',
      name: 'stretcherElevator',
      component: stretcherElevator
    },
    {
      path: '/carElevator',
      name: 'carElevator',
      component: carElevator
    },
  ]
})

export default router
