<template>
  <div
    class="todoitem__container"
    :class="{ done: item.status === 'DONE' ? true : false }"
  >
    <div class="todoitem-checkbox__wrapper">
      <label>
        <input />
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

</style>
