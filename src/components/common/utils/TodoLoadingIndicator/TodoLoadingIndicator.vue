<template>
  <div>
    <div
      class="todo-loading-indicator__container"
      v-for="item in items"
      :key="item.id"
    >
      <div class="todo-loading-indicator-checkbox__wrapper">
        <label>
          <input type="checkbox" />
          <span />
        </label>
      </div>
      <div class="todo-loading-indicator-content__wrapper">
        <span>
          {{ item.desc }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const desc = 'If you have something to do, don\'t be lazy!';

export default {
  name: "TodoLoadingIndicator",
  props: {
    lines: {
      type: Number,
      default: () => (3),
    },
  },
  computed: {
    items: function() {
      return new Array(this.lines).fill('').map((el, id) => ({ id, desc }));
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../../../../scss/_variables.scss";
@import "../../../../scss/_animations.scss";

.todo-loading-indicator__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $todoitem-height;
  padding: {
    top: 2.5px;
    bottom: 2.5px;
  }
  cursor: progress;

  & .todo-loading-indicator-checkbox__wrapper {
    width: $todoitem-checkbox-container-width;
    height: $todoitem-height;

    // checkbox styles
    input {
      display: none;
    }

    // checkbox and check mark style
    & span {
      display: inline-block;
      position: relative;
      // vertical / horizontal align
      top: calc((#{$todoitem-height} - #{$todoitem-checkbox-size}) / 2);
      left: calc((#{$todoitem-checkbox-container-width} - #{$todoitem-checkbox-size}) / 2);
      width: $todoitem-checkbox-size;
      height: $todoitem-checkbox-size;
      margin: 0;

      // glowing effect
      border: 1px solid $color-box-shadow;
      background-color: $color-box-shadow;
      animation: glow 1.5s ease-in-out infinite;
      color: transparent;
      cursor: progress;
    }

    & input:checked ~ span:after {
      display: block;
    }
    
  }

  & .todo-loading-indicator-content__wrapper {
    display: inline-block;
    width: calc(100% - #{$todoitem-checkbox-size});
    height: 100%;

    span {
      position: relative;
      top: calc((#{$todoitem-height} - #{$todoitem-checkbox-size}) / 2 - 2px);
      padding: {
        left: 5px;
      }
      font: {
        size: $fontsize-todoitem;
      }

      // glowing effect
      background-color: $color-box-shadow;
      animation: glow 1.5s ease-in-out infinite;
      color: transparent;
    }
  }
}
</style>
