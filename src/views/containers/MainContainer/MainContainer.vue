<template>
  <div class="maincontainer__wrapper">
    <TodoInput
      v-if="!isLoading"
      placeholder="Add a new task to do."
      :todoDesc="todoDesc"
      :handleChangeInput="handleChangeInput"
      :handleCreateTodo="handleCreateTodo"
    />
    <TodoList
      v-if="!isLoading"
      :items="todoList"
      :handleUpdateTodo="handleUpdateTodo"
      :handleDeleteTodo="handleDeleteTodo"
    />
    <TodoLoadingIndicator
      v-if="isLoading"
      :lines="4"
    />
  </div>
</template>

<script>
import TodoList from '../../components/TodoList';
import TodoInput from '../../components/TodoInput';
import TodoLoadingIndicator from '../../common/utils/TodoLoadingIndicator';

export default {
  name: 'MainContainer',
  components: {
    TodoList,
    TodoInput,
    TodoLoadingIndicator,
  },
  data: function() {
    return {
      isLoading: false,
      todoList: [],
      todoDesc: '',
    };
  },
  methods: {
    handleChangeInput: function(key) {
      const self = this;
      return function(event) {
        return self.todoDesc = event.target.value;
      }
    },
    handleCreateTodo: function(event) {
      const newDesc = this.todoDesc;
      this.todoDesc = "";
      return this.todoList.push({
        id: Date.now(),
        status: 'PENDING',
        desc: newDesc,
        date: Date.now(),
      });
    },
    handleUpdateTodo: function(id, todoDesc) {
      return this.todoList.forEach(el => {
        if (el.id === id)
          el.status = el.status === 'PENDING' ? 'DONE' : 'PENDING';
      });
    },
    handleDeleteTodo: function(id) {
      const targetIndex = this.todoList.findIndex(el => el.id === id);
      return this.todoList.splice(targetIndex, 1);
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
