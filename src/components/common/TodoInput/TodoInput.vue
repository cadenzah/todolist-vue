<template>
  <div class="todoinput__wrapper">
    <input
      type="text"
      :value="todoDesc"
      :placeholder="placeholder"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      @input="handleChangeInput('todoDesc')($event)"
    />
    <TodoButton
      primary
      :handleClick="handleCreateTodo"
    >
      추가
    </TodoButton>
  </div>
</template>

<script>
import TodoButton from '../TodoButton';

export default {
  name: 'TodoInput',
  components: {
    TodoButton,
  },
  props: {
    todoDesc: {
      type: String,
      default: () => (""),
    },
    placeholder: {
      type: String,
      default: () => (""),
    },
    handleChangeInput: {
      type: Function,
    },
    handleCreateTodo: {
      type: Function,
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../../scss/_variables.scss";

.todoinput__wrapper {
  display: flex;
  height: $todoitem-height;
  margin: {
    bottom: 15px;
  }

  input {
    display: block;
    width: calc(100% - #{$todobutton-width} - 5px);
    height: 100%;
    border: 0;
    padding: {
      left: 5px;
      right: 0;
      top: 0;
      bottom: 0;
    }
    font: {
      size: $fontsize-todoinput;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
