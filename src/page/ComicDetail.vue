<template>
    <div class="comicDetailPage">
        <div class="container">
            <div class="comicDetail">
                <div class="comicDetail__pic">
                    <img src="../../static/images/comic_cover.png" alt="" class="w100">
                </div>
                <div class="comicDetail__wording">
                    <h3 class="w100 title text-center comicDetail__name">MY HEXSCHOOL</h3>
                    <div class="p20">
                        <p class="paragraph m0 mB5"><span class="label comicDetail__label">Genres</span>Fusce/vehicula/dolor</p>
                        <p class="paragraph m0 mB5"><span class="label comicDetail__label">Author</span>Namae Shiranai</p>
                        <p class="paragraph m0 mB5"><span class="label comicDetail__label">Status</span>Ongoing</p>
                        <p class="paragraph m0 mB5"><span class="label comicDetail__label">Genres</span>Fusce/vehicula/dolor</p>
                        <p class="paragraph m0"><span class="label comicDetail__label">Rate</span>
                            <star-rating 
                                class="inline-flex"
                                :show-rating="false"
                                :rating="4" 
                                :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                                :read-only="true" 
                                :star-size="12" 
                                :border-width="4" 
                                :padding="5"
                                border-color="black" 
                                active-color="black" 
                                inactive-color="white">
                            </star-rating>
                        </p>
                        <p class="label mB10 mT20">Summary</p>
                        <p class="paragraph">
                            If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.  
                        </p>
                        <p class="paragraph mT20">
                            Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals. 
                        </p>
                    </div>
                </div>
            </div>

            <div class="comicChapter">
                <div class="comicChapter__header">
                    <div class="comicChapter__title"><p class="title2">All Chapters</p></div>
                </div>
                <div class="comicChapter__body">
                    <router-link tag="div" class="comicChapter__item transition-all" to="/comics/a/chapter/1"><span class="label">Chapter 1: The F2E Challenge Start!</span></router-link>
                    <router-link tag="div" class="comicChapter__item transition-all" to="/comics/a/chapter/1"><span class="label">Chapter 2: The F2E Challenge Start!</span><span class="badge mL10 bg-main">NEW</span></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating';
export default {
    components: {
        StarRating
    }
};
</script>

<style lang="scss">
.comicDetail {
  display: flex;
}
.comicDetail__pic {
  flex: 1;
  > img {
    border: 4px solid black;
  }
}
.comicDetail__wording {
  flex: 1;
}
.comicDetail__name {
  background: black;
  color: white;
  margin: 0;
  padding: 10px;
}
.comicDetail__label {
  display: inline-block;
  width: 60px;
}

.comicChapter__title {
  background-color: black;
  color: white;
  display: inline-block;
  padding: 15px;
}
.comicChapter__body {
  border: 4px solid black;
  background-color: white;
}
.comicChapter__item {
  width: 100%;
  padding: 15px 25px;
  cursor: pointer;
  &:hover {
    background-color: black;
    .label {
      color: white;
    }
  }
}
</style>
