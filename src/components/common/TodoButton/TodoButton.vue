<template>
  <div
    class="todobutton__wrapper"
    :class="{
      primary: primary,
      caution: caution,
    }"
    @click="handleDeleteTodo()"
  >
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoButton',
  props: {
    primary: {
      type: Boolean,
      default: () => false,
    },
    caution: {
      type: Boolean,
      default: () => false,
    },
    handleDeleteTodo: {
      type: Function,
    },
  },
} 
</script>

<style lang="scss" scoped>
@import "../../../scss/_variables.scss";

$hover-effect: 10%;

.todobutton__wrapper {
  display: block;
  width: $todobutton-width;
  height: 100%;
  border: 0;
  background-color: $color-default;
  outline: none;
  padding: 0;
  transition: all 0.2s;
  transition-timing-function: ease-in-out;
  cursor: pointer;
  text-align: center;

  p {
    position: relative;
    // vertical align
    top: calc((#{$todoitem-height} - #{$fontsize-todobutton}) / 2);
    margin: 0;
    font: {
      size: $fontsize-todobutton;
    }
  }

  &.primary {
    background-color: $color-primary;
  }

  &.primary:hover {
    background-color: darken($color-primary, $hover-effect);
  }

  &.caution {
    background-color: $color-caution;
  }

  &.caution:hover {
    background-color: darken($color-caution, $hover-effect);
  }
}
</style>
