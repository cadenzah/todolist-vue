<template>
  <div class="todolist-empty-indicator__wrapper">
    <p>
      <slot name="default" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoListEmptyIndicator',
}
</script>

<style lang="scss" scoped>
@import "../../../../scss/_variables.scss";

.todolist-empty-indicator__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  & > p {
    font-size: $fontsize-todoitem;
    color: $color-placeholder;
  }
}
</style>
