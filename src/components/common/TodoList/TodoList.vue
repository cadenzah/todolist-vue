<template>
  <div class="todolist__container">
    <div class="todolist__wrapper" v-if="!isLoading && !isListEmpty">
      <TodoItem
        v-for="item in sortedItems"
        :key="item.id"
        :item="item"
        :handleUpdateTodo="handleUpdateTodo"
        :handleDeleteTodo="handleDeleteTodo"
      />
    </div>
    <!-- With empty Todo List, shows guide message -->
    <div class="todolist-message__wrapper" v-if="isListEmpty">
      <p>
        Add a new task to do.
      </p>
    </div>
  </div>
</template>

<script>
import TodoItem from '../TodoItem';

export default {
  name: "TodoList",
  components: {
    TodoItem,
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
@import "../../../scss/_variables.scss";

.todolist-message__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: $fontsize-todoitem;
    color: $color-placeholder;
  }
}
</style>
