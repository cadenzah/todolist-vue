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

</style>
