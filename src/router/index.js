import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CharacterList from '@/views/characters/List.vue'
import CharacterNew from '@/views/characters/New.vue'
import CharacterEdit from '@/views/characters/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'CharacterList',
    component: CharacterList
  },
  {
    path: '/characters/new',
    name: 'CharacterNew',
    component: CharacterNew
  },
  {
    path: '/character/:id',
    name: 'CharacterEdit',
    component: CharacterEdit
  },
  {
    path: '/campaigns',
    name: 'CampaignsList'
  }
]

const router = new VueRouter({
  routes
})

export default router
