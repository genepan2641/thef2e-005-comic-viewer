<template>
    <div v-if="show" class="comicModal">
        <div class="comicModal__container">
            <div class="comicModal__wrapper">
                <arrow-button 
                    @click.native="clickPrev" 
                    direction="left"
                    :disabled="!allowPrev"></arrow-button>
                <div class="comicModal__pic">
                    <img class="w100" :src="pageSrc" alt="">
                </div>
                <arrow-button 
                    @click.native="clickNext" 
                    direction="right"
                    :disabled="!allowNext"></arrow-button>
            </div>
        </div>
        <div @click="clickCancel" class="comicModal__mask">
            <div @click="clickCancel" class="comicModal__cancel"><i class="fas fa-times-circle"></i></div>
        </div>
    </div>
</template>

<script>
import ArrowButton from './ArrowButton.vue';
export default {
    props: {
        pageSrc: {
            type: String
        },
        show: {type: Boolean},
        currentPageIndex: {type: Number},
        allowPrev: {type: Boolean},
        allowNext: {type: Boolean}
    },
    methods: {
        clickCancel() {
            this.$emit('update:show', false);
        },
        clickPrev() {
            if(this.allowPrev) {
                this.$emit('update:currentPageIndex', this.currentPageIndex - 1);
            }
        },
        clickNext() {
            if(this.allowNext) {
                this.$emit('update:currentPageIndex', this.currentPageIndex + 1);
            }
        }
    },
    components: {
        ArrowButton
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_colors.scss";
.comicModal {
  position: absolute;
  width: 100%;
}
.comicModal__container {
  max-width: 960px;
  margin: auto;
}
.comicModal__wrapper {
  position: relative;
  background-color: white;
  z-index: 15;
  display: flex;
  max-width: 100%;
  > .comicModal__pic {
    flex: 1 1 480px;
  }
  > .arrowButton {
    flex: 0 1 80px;
  }
}
.comicModal__mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(black, 0.2);
  z-index: 10;
}
.comicModal__cancel {
  cursor: pointer;
  position: absolute;
  right: 3%;
  top: 5%;
  color: white;
}
</style>
