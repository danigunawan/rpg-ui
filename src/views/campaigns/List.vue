const ModalWindow = () => ({
  component: import('./ModalWindow.vue'),
  loading: LoadingComponent,
  error: ErrorComponent,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

export default {
  components: {
    ModalWindow
  }
}
