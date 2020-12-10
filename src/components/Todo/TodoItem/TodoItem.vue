<template>
  <div>
    <div class="todoitem__container">
      <div class="todoitem-checkbox__wrapper">
        <label>
          <input />
          <span />
        </label>
      </div>
      <div class="todoitem-content__wrapper">
        <span class="todoitem-content__content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
    },
    // handleUpdateTodo: {
    //   type: Function,
    //   required: true,
    // },
    // handleDeleteTodo: {
    //   type: Function,
    //   required: true,
    // }
  }
}
</script>

<style scoped>

</style>
