<template>
  <div class="todolist__container">
    <div
      class="todolist__wrapper"
      v-if="!isLoading && !isListEmpty"
    >
      <TodoItem
        v-for="item in sortedItems"
        :key="item.id"
        :item="item"
        :handleUpdateTodo="() => handleUpdateTodo(item.id)"
        :handleDeleteTodo="() => handleDeleteTodo(item.id)"
      />
    </div>
    <!-- With empty Todo List, shows guide message -->
    <TodoListEmptyIndicator
      :items="items"
      v-if="isListEmpty"
    >
      Add a new task to do.
    </TodoListEmptyIndicator>
  </div>
</template>

<script>
import TodoItem from '../TodoItem';
import TodoListEmptyIndicator from '../utils/TodoListEmptyIndicator';

export default {
  name: "TodoList",
  components: {
    TodoItem,
    TodoListEmptyIndicator,
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    },
    isLoading: {
      type: Boolean,
      default: () => (false),
    },
    handleUpdateTodo: {
      type: Function,
    },
    handleDeleteTodo: {
      type: Function,
    },
  },
  computed: {
    sortedItems: function() {
      return [
        ...this.items.filter(item => item.status !== 'DONE').sort((item1, item2) => item2.date - item2.date),
        ...this.items.filter(item => item.status === 'DONE').sort((item1, item2) => item2.date - item2.date),
      ];
    },
    isListEmpty: function() {
      return this.items.length === 0
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
