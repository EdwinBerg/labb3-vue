<template>
  <div id="app">
    <router-link class="nav-bar" to="/">Väderprognos</router-link>
    <router-link class="nav-bar" to="/dog-info">Hund fakta</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
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

.nav-bar {
  display: inline-flex;
  padding: 2rem 1rem;
  justify-content: center;
  text-decoration: none;
  font-size: 18px;
  color: crimson;
}

.nav-bar:hover {
  color: #333;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
