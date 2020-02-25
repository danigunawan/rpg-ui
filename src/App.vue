<template>
  <div id="app" class="container">
    <div class="jumbotron text-center">
      <h1>Tabletop RPG Map Creator</h1>
    </div>
    <div id="nav">
      <router-link :to='{name: "Home"}'>Home</router-link> |
      <router-link :to='{name: "CharacterList"}'>Characters</router-link> |
      <router-link :to='{name: "CampaignsList"}'>Campaigns</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>

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
