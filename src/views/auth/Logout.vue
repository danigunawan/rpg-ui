<template>
  <div>
    Logging out...
  </div>
</template>

<script>
export default {
  created: function() {
    // Calls actions.AuthDestroy from rpg-api
    // DELETE: {{host}}/v1/auth/
    // Data:
    //   Token
    this.axios.delete('/v1/auth/', {
      headers: {
        'Authorization': this.$store.state.user.token
      }
    })
    .then(response => {
      console.log(response.data["message"])
      this.$store.state.user.token = null
      localStorage.removeItem("token")
      this.$router.push({ name: 'Login' })
    })
    .catch(error => {
      console.log(error.response.data["error"])
      this.$store.state.user.token = null
      localStorage.removeItem("token")
      this.$router.push({ name: 'Login' })
    })
  }
}
</script>
