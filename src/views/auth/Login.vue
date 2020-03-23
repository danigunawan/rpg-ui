<template>
  <div id="login" class="container">
    <div v-if="errors">
      <ul>
        <li v-for="error in errors" :key="error.id"><span class="errors">{{ error }}</span></li>
      </ul>
    </div>
    <div class="row">
      <div class="input-group mb-3 col-4">
        <div class="input-group-prepend">
          <span class="input-group-text">Email:</span>
        </div>
      </div>
      <div class="col-8">
        <input v-model.trim="email">
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Password:</span>
          </div>
        </div>
      </div>
      <div class="col-8">
        <input v-model.trim="password" type="password">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button
          type="button"
          id="btn-register"
          class="btn btn-success"
          v-on:click="register">Register</button>
        <button
          type="button"
          id="btn-login"
          class="btn btn-primary"
          v-on:click="login">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    "email": "",
    "password": "",
    "errors": null
  }),
  methods: {
    register () {
      this.$router.push({ name: 'Register' })
    },
    login () {
      // Calls actions.AuthCreate from rpg-api
      // POST: {{host}}/v1/auth/
      // Data:
      //   Email
      //   Password
      this.errors = null
      this.axios.post("/v1/auth/", {
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.$store.state.user.token = response.data["token"]
        localStorage.setItem("token", response.data["token"])
        this.$router.push({ name: 'Home' })
      })
      .catch(errors => {
        this.errors = errors.response.data["error"].split('\n')
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#login {
  width: 50%;
  margin: auto;
}

#login input {
  float: right;
}

#btn-register {
  float: left;
}

#btn-login {
  float: right;
}

.errors {
  color: red;
}
</style>
