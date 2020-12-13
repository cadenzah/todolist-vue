<template>
  <div
    class="todobutton__wrapper"
    :class="{
      primary: isTypePrimary,
      caution: isTypeCaution,
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
    buttonType: {
      type: String,
      default: () => (''),
    },
    handleDeleteTodo: {
      type: Function,
    },
  },
  computed: {
    isTypePrimary: function() {
      return this.buttonType === 'primary' ? true : false;
    },
    isTypeCaution: function() {
      return this.buttonType === 'caution' ? true : false;
    },
  },
}
</script>

<style lang="sass" scoped>

</style>
