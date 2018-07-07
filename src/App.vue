<template>
  <div id="app">
    <AppNavbar></AppNavbar>
    <router-view/>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
export default {
  name: 'App',
  components: {
    AppNavbar
  }
}
</script>

<style lang="scss" src="./assets/style/main.scss"></style>