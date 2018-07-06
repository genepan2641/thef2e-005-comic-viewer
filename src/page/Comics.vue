<template>
    <div class="comicsPage">
      <div class="container">
        <p class="text-center title2">choose comic!</p>
        <div class="comicsSelect">
          <div v-for="n in 4" class="comicsItem" :key="n">
            <router-link to="/comics/a">
              <img src="../../static/images/comic_cover.png" alt="">
            </router-link>
            <p class="title3">My HexSchool</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
@import "../assets/style/_colors";
.comicsSelect {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.comicsItem {
  flex: 200px;
  max-width: 200px;
  margin: 10px;
  img {
    max-width: 100%;
    transition: all 250ms;
  }

  &:hover {
    p {
      color: $primary-color;
    }
    img {
      -webkit-filter: saturate(0);
    }
  }
}
</style>
