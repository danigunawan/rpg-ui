<template>
  <div id="app" class="container">
    <div class="jumbotron text-center">
      <h1>Tabletop RPG Map Creator</h1>
    </div>
    <div id="nav">
      <router-link :to='{name: "Home"}'>Home</router-link> |
      <router-link :to='{name: "CharacterList"}'>Characters</router-link> |
      <router-link :to='{name: "CampaignsList"}'>Campaigns</router-link>
      <template v-if="loggedIn"> | <router-link :to='{name: "Logout"}'>Logout</router-link></template>
      <template v-else> | <router-link :to='{name: "Login"}'>Login</router-link></template>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    loggedIn: function() {
       return Boolean(localStorage.getItem("token"))
    }
  }
}
</script>

<style>
hr {
  font-weight: bold;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5rem;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
