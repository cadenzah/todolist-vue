<template>
  <div
    class="todobutton__wrapper"
    :class="{
      primary: primary,
      caution: caution,
    }"
    @click="handleDeleteTodo()"
  >
    <p>
      <slot />
    </p>
  </div>
</template>

<script>
export default {
  name: 'TodoButton',
  props: {
    primary: {
      type: Boolean,
      default: () => false,
    },
    caution: {
      type: Boolean,
      default: () => false,
    },
    handleDeleteTodo: {
      type: Function,
    },
  },
}
</script>

<style lang="sass" scoped>

</style>
