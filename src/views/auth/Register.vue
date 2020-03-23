<template>
  <div id="register" class="container">
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
        <input v-model="email">
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
        <input v-model="password" type="password">
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">Confirm Password:</span>
          </div>
        </div>
      </div>
      <div class="col-8">
        <input v-model="passwordconfirmation" type="password">
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <button
          type="button"
          id="btn-register"
          class="btn btn-primary"
          v-on:click="register">Register</button>
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
    "passwordconfirmation": "",
    "errors": null
  }),
  methods: {
    register() {
      // Calls actions.UsersCreate from rpg-api
      // POST: {{host}}/v1/users/
      // Data:
      //   Email
      //   Password
      this.axios.post(this.$store.state.target.url + "/v1/users/", {
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordconfirmation
      })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        this.errors = error.response.data['error'].split('\n')
        console.log(this.errors)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#register {
  width: 50%;
  margin: auto;
}

#register input {
  float: right;
}

#btn-register {
  float: right;
}

.errors {
  color: red;
}
</style>
