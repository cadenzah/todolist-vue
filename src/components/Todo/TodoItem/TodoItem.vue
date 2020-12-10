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
        <span class="todoitem-content__content">
          {{ item.desc }}
        </span>
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
      default: () => ({ desc: '', id: Date.now(), status: 'PENDING' })
    },
    handleUpdateTodo: {
      type: Function,
    },
    handleDeleteTodo: {
      type: Function,
    }
  }
}
</script>

<style scoped>

</style>
