<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/test">Test</router-link> |
        <router-link to="/testview">TestView</router-link> |
        <router-link to="/antdesignview">AntDesignView</router-link>
      </div>
      <router-view/>
    </div>
  </a-locale-provider>
</template>
<script lang="ts">

import { getLocale } from './utils/locales';

export default {
  data() {
    return {
      locale: getLocale(),
    };
  },
};
</script>
<style>
#app {
  font-family: 'Helvetica Neue', 'Avenir', Helvetica, Arial, "微軟正黑體", "微软雅黑", sans-serif;
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
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
