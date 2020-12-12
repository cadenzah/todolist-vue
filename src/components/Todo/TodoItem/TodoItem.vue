<template>
  <div
    class="todoitem__container"
    :class="{ done: item.status === 'DONE' ? true : false }"
  >
    <div class="todoitem-checkbox__wrapper">
      <label :for="item.id">
        <input
          :id="item.id"
          type="checkbox"
          :value="item.id"
          v-model="item.id"
          @change="handleUpdateTodo(item.id)"
        />
        <span />
      </label>
    </div>
    <div class="todoitem-content__wrapper">
      <span>
        {{ item.desc }}
      </span>
    </div>
    <div
      class="todoitem-button__wrapper caution"
      @click="handleDeleteTodo(item.id)"
    >
      <p>
        Delete
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
      default: () => ({ desc: '', id: Date.now(), status: 'PENDING' })
    },
    handleUpdateTodo: {
      type: Function,
    },
    handleDeleteTodo: {
      type: Function,
    }
  },
  computed: {
    isTodoDone: function() {
      return this.item.status === 'DONE' ? true : false;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../scss/_variables.scss";

.todoitem__container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: $todoitem-height;
  padding: {
    top: 2.5px;
    bottom: 2.5px;
  }

  & .todoitem-checkbox__wrapper {
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
      // vertical /horizontal align
      top: calc((#{$todoitem-height} - #{$todoitem-checkbox-size}) / 2);
      left: calc((#{$todoitem-checkbox-container-width} - #{$todoitem-checkbox-size}) / 2);
      width: $todoitem-checkbox-size;
      height: $todoitem-checkbox-size;
      margin: 0;

      border: 1px solid $color-primary;
      background-color: $color-paper;
      cursor: pointer;
    }

    & input:checked ~ span {
      border: 1px solid $color-primary;
      background-color: $color-primary;
      cursor: pointer;
      color: $color-paper;
    }

    & span:after {
      content: "";
      position: absolute;
      display: none;

      left: calc((#{$todoitem-checkbox-container-width} - #{$todoitem-checkbox-size}) / 4 + 1px);
      width: $todoitem-checkmark-width;
      height: $todoitem-checkmark-height;
      border: solid white;
      border-width: 0 $todoitem-checkmark-border $todoitem-checkmark-border 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    & input:checked ~ span:after {
      display: block;
    }
  }

  & .todoitem-content__wrapper {
    display: inline-block;
    width: calc(100% - #{$todobutton-width} - #{$todoitem-checkbox-size});
    height: 100%;

    span {
      position: relative;
      // vertical align
      top: calc((#{$todoitem-height} - #{$todoitem-checkbox-size}) / 2 - 2px);
      padding: {
        left: 5px;
      }
      font: {
        size: $fontsize-todoitem;
      }
    }
  }

  &.done {
    .todoitem-content__wrapper {
      text-decoration: line-through;
    }
  }
}

$hover-effect: 10%;

.todoitem-button__wrapper {
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
