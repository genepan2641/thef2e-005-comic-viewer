<template>
    <div class="arrowButton"
        :class="{'arrowButton-disabled': disabled}">
        <i class="fas" :class="`fa-${iconName}-${direction}`"></i>
    </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'right',
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: 'angle'
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/_colors";
.arrowButton {
  padding: 15px;
  height: auto;
  cursor: pointer;
  display: inline-flex;
  > .fas {
    margin: auto;
    color: $light-gray;
    font-size: 48px;
  }
  &:hover {
    background: black;
    > .fas {
      color: $primary-color;
    }
  }
}

.darkMode .arrowButton {
  > .fas {
    color: $light-gray;
  }
  &:hover {
    background: $primary-color;
    > .fas {
      color: black;
    }
  }
}

.arrowButton-disabled {
  cursor: not-allowed;
  background-color: $light-gray;
  > .fas {
    color: $white-gray;
  }
  &:hover {
    background-color: $light-gray;
    > .fas {
      color: $white-gray;
    }
  }
}
.darkMode .arrowButton-disabled {
  background-color: rgba($light-gray, 0.3);
  > .fas {
    color: $white-gray;
  }
  &:hover {
    background-color: rgba($light-gray, 0.3);
    > .fas {
      color: $light-gray;
    }
  }
}
</style>
