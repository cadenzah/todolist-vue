<template>
  <div class="todo-loading-indicator__wrapper">
    <div
      v-for="item in items"
      :key="item.id"
    >
      <label>
        <input />
        <span>
          {{ item.desc }}
        </span>
      </label>
    </div>
  </div>
</template>

<script>
const desc = 'If you have something to do, don\'t be lazy!';

export default {
  name: "TodoLoadingIndicator",
  props: {
    lines: {
      type: Number,
      default: () => (3),
    },
  },
  computed: {
    items: function() {
      return new Array(this.lines).fill('').map((el, id) => ({ id, desc }));
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
