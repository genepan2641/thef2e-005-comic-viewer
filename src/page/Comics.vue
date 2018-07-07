<template>
    <div class="comicsPage">
      <div class="container">
        <p class="text-center title2 mT30">choose comic</p>
        <div class="comicsSelect">
          <div class="comicsItem">
            <router-link to="/comics/a">
              <img class="transition-all" src="static/images/comic_cover.png" alt="">
              <p class="title3">My HexSchool</p>
            </router-link>
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
  }

  &:hover {
    p {
      color: darken($primary-color, 30%);
    }
    img {
      -webkit-filter: saturate(0);
    }
  }
}
</style>
