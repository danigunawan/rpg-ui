export default function guest ({next, store}) {
  if (!store.getters.auth.token || !localStorage.getItem("token")) {
    store.mutations.clearToken
    return next({
      name: 'Login'
    })
  }

  return next()
}
