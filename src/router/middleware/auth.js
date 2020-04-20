export default function guest ({next, store}) {
  if (!localStorage.getItem("token")) {
    return next({
      name: 'Login'
    })
  }

  return next()
}
