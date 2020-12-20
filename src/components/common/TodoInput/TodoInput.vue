<template>
  <div class="todoinput__wrapper">
    <input
      type="text"
      :value="todoDesc"
      :placeholder="placeholder"
      autocorrect="off"
      autocapitalize="off"
      spellcheck="false"
      @input="handleChangeInput('todoDesc')"
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
      default: () => ("aa"),
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

</style>
