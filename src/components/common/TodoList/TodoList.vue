<template>
  <div class="todolist__container">
    <div class="todolist__wrapper" v-if="!isLoading">
      <TodoItem
        v-for="item in sortedItems"
        :key="item.id"
        :item="item"
        :handleUpdateTodo="handleUpdateTodo"
        :handleDeleteTodo="handleDeleteTodo"
      />
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
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
