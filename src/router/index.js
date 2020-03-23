import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from '@/views/Home.vue'

import Login from '@/views/auth/Login.vue'
import Logout from '@/views/auth/Logout.vue'
import Register from '@/views/auth/Register.vue'

import Guest from '@/router/middleware/guest.js'
import Auth from '@/router/middleware/auth.js'
import middlewarePipeline from '@/router/middlewarePipeline.js'

import CharacterList from '@/views/characters/List.vue'
import CharacterNew from '@/views/characters/New.vue'
import CharacterEdit from '@/views/characters/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      middleware: [
        Auth
      ]
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      middleware: [
        Guest
      ]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      middleware: [
        Guest
      ]
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: {
      middleware: [
        Auth
      ]
    }
  },
  {
    path: '/characters',
    name: 'CharacterList',
    component: CharacterList,
    meta: {
      middleware: [
        Auth
      ]
    },
    children: [
      {
        path: '/characters/new',
        name: 'CharacterNew',
        component: CharacterNew,
        meta: {
          middleware: [
            Auth
          ]
        }
      },
      {
        path: '/character/:id',
        name: 'CharacterEdit',
        component: CharacterEdit,
        meta: {
          middleware: [
            Auth
          ]
        }
      }
    ]
  },
  {
    path: '/campaigns',
    name: 'CampaignsList',
    meta: {
      middleware: [
        Auth
      ]
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next()
  }
  const middleware = to.meta.middleware

  const context = {
    to, from, next, store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
