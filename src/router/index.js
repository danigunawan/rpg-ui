import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

// Middleware
import Guest from '@/router/middleware/guest.js'
import Auth from '@/router/middleware/auth.js'
import middlewarePipeline from '@/router/middlewarePipeline.js'

Vue.use(VueRouter)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home'),
    meta: {
      middleware: [
        Auth
      ]
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: loadView('auth/Login'),
    meta: {
      middleware: [
        Guest
      ]
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: loadView('auth/Register'),
    meta: {
      middleware: [
        Guest
      ]
    }
  },
  {
    path: '/logout',
    name: 'Logout',
    component: loadView('auth/Logout'),
    meta: {
      middleware: [
        Auth
      ]
    }
  },
  {
    path: '/characters',
    name: 'CharacterList',
    component: loadView('characters/List'),
    meta: {
      middleware: [
        Auth
      ]
    }
  },
  {
    path: '/characters/new',
    name: 'CharacterNew',
    component: loadView('characters/New'),
    meta: {
      middleware: [
        Auth
      ]
    }
  },
  {
    path: '/character/:id',
    name: 'CharacterEdit',
    component: loadView('characters/Edit'),
    meta: {
      middleware: [
        Auth
      ]
    }
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
