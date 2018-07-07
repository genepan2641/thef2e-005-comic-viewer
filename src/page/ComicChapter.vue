<template>
    <div class="comicChapterPage mT30">
        <div class="container">
            <div class="mB30 clear">
                <router-link class="title3" to="/comics/1">My Hexschool</router-link>
                <span><i class="fas fa-caret-right"></i></span>
                <el-select popper-class="selectDropdown" size="small" v-model="currentPageIndex">
                    <el-option v-for="p in pages.length" :label="`page ${p}`" :value="p - 1" :key="p">page {{ p }} </el-option>
                </el-select>
                <toggle-view-mode></toggle-view-mode>
            </div>
            <div class="comicView">
                <arrow-button @click.native="prevPage" direction="left" :disabled="!allowPrev"></arrow-button>
                <div class="comicPage__pic">
                    <img class="w100" :src="`../../static/images/${pages[currentPageIndex]}`" alt="">
                </div>
                <arrow-button @click.native="nextPage" direction="right" :disabled="!allowNext"></arrow-button>
            </div>
            <div class="comicSlider__container">
                <comic-slider class="mT30" 
                    :pages="pages"
                    :current-page-index="currentPageIndex"
                    @click-slider-item="changeCurrentPage"></comic-slider>
            </div>
        </div>
    </div>
</template>

<script>
import ArrowButton from '../components/ArrowButton.vue';
import ComicSlider from '../components/ComicSlider.vue';
import ToggleViewMode from '../components/ToggleViewMode.vue';
export default {
    data() {
        return {
            pages: [],
            currentPageIndex: 0,
        }
    },
    computed: {
        allowPrev() {
            return this.currentPageIndex > 0;
        },
        allowNext() {
            return this.currentPageIndex + 1 < this.pages.length;
        },

    },
    components: {
        ArrowButton,
        ComicSlider,
        ToggleViewMode
    },
    mounted() {
        for(let i = 1; i < 13; i++) {
            this.pages.push(`p${i}.png`);
        }
    },
    methods: {
        prevPage() {
            if(this.allowPrev) {
                this.currentPageIndex -= 1;
            }
        },
        nextPage() {
            if(this.allowNext) {
                this.currentPageIndex += 1;
            }
        },
        changeCurrentPage(index) {
            this.currentPageIndex = index;
        }
    }
};
</script>

<style lang="scss" scoped>
.comicView {
  display: flex;
  .arrawButton {
    flex: 1 1 80px;
  }
  .comicPage__pic {
    flex: 1 1 480px;
  }
}
</style>
