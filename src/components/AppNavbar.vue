<template>
    <div class="navbar">
        <h1 class="navbar__logo">
            <router-link class="navbar__logolink" to="/comics">Comicomic</router-link>
        </h1>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "../assets/style/_colors";
.navbar {
  display: inline-flex;
  width: 100%;
  padding: 15px 0;
  background: black;
}
.navbar__logo {
  margin: auto;
}
.navbar__logolink {
  color: $primary-color;
}

.darkMode {
  .navbar {
    background: $primary-color;
  }

  .navbar__logolink {
    color: black;
  }
}
</style>
