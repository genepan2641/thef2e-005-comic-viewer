<template>
    <div class="comicSlider">
        <div class="comicSlider__picContainer">
            <arrow-button 
                :disabled="currentChapter == 1"
                @click.native="clickPrevChapterBtn" 
                icon-name="angle-double"
                direction="left">
            </arrow-button>
            <div v-for="(p, i) in pages" 
                :key="i" 
                class="comicSlider__picItem"
                @click="clickSliderItem(i)">
                <div class="comicSlider__picNum text-center"><span class="label">{{ i+1 }}</span></div>
                <img 
                    :src="`static/images/${p}`" 
                    :class="{'comicSlider__picItem-selected': i == currentPageIndex}"
                    alt="">
            </div>
            <el-tooltip content="next chapter">
                <arrow-button 
                    :disabled="currentChapter == totalChapters.length"
                    @click.native="clickNextChapterBtn" 
                    icon-name="angle-double"
                    direction="right">
                </arrow-button>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
import ArrowButton from './ArrowButton.vue';
export default {
    props: {
        pages: {
            type: Array
        },
        currentPageIndex: {
            type: Number
        },
        currentChapter: {
            type: Number
        },
        totalChapters: {
            type: Array
        }
    },
    components: {
        ArrowButton
    },
    watch: {
        currentPageIndex(val) {
            // console.log(val);
            // console.log(this.$el.querySelector('.comicSlider__picItem-selected').offsetLeft);
            // console.log(this.$el.querySelector('.comicSlider__picContainer').scrollLeft);
            this.$nextTick(() => {
                const slide = this.$el.querySelector('.comicSlider__picContainer');
                const target = this.$el.querySelector('.comicSlider__picItem-selected');
                slide.scrollLeft =
                    target.offsetLeft -
                    slide.offsetLeft -
                    slide.offsetWidth / 2 +
                    target.offsetWidth / 2;
            })
        }
    },
    methods: {
        clickSliderItem(index) {
            // console.log(index);
            this.$emit('click-slider-item', index);
        },
        clickPrevChapterBtn() {
            if(this.currentChapter > 1) {
                this.$emit('update:currentChapter', this.currentChapter - 1);
            }
        },
        clickNextChapterBtn() {
            if(this.currentChapter < this.totalChapters.length) {
                this.$emit('update:currentChapter', this.currentChapter + 1);
            }
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/style/_colors";
.comicSlider {
}
.comicSlider__picContainer {
  display: flex;
  overflow: auto;
}
.comicSlider__picItem {
  cursor: pointer;
  flex: 1 0 80px;
  white-space: nowrap;
  &:not(:first-child) {
    margin-left: 20px;
  }
  > img {
    width: 100%;
  }
}
.comicSlider__picItem-selected {
  border: 3px solid $primary-color;
}

.darkMode {
  .comicSlider__picNum {
    color: white;
  }
}
</style>
