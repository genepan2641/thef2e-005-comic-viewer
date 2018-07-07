<template>
    <div class="toggleViewMode">
        <span class="viewIcon"><i class="fas fa-sun"></i></span>
        <div 
            @click="toggleOn"
            class="toggler"
            :class="[on? 'toggler-isOn': 'toggler-isOff' ]"></div>
        <span class="viewIcon"><i class="fas fa-moon"></i></span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            on: true
        }
    },
    methods: {
        toggleOn() {
            this.on = !this.on;
            this.$emit('toggle-on', this.on);
            document.querySelector('body').classList.toggle('darkMode');
        }
    }
}
</script>

<style lang="scss">
.toggleViewMode {
  display: inline-block;
  float: right;
}
.toggler {
  display: inline-block;
  width: 50px;
  height: 24px;
  border: 2px solid black;
  cursor: pointer;
  &:after {
    content: "";
    background: black;
    transition: all 200ms ease-out;
    display: block;
    height: 20px;
    width: 23px;
  }
}
.toggler-isOn {
}
.toggler-isOff {
  &:after {
    transform: translateX(23px);
  }
}
.viewIcon {
  vertical-align: super;
}

.darkMode {
  .toggler {
    border-color: white;
    &:after {
      background-color: white;
    }
  }
  .viewIcon {
    color: white;
  }
}
</style>

