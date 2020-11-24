<template>
  <div>
    <h2>Test Page</h2>
    <p>You can go back to previous page /w Vue Router.</p>
    <button @click="navigatePrev">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    navigatePrev() {
      this.$router.go(-1);
    },
  },
}
</script>

<style>

</style>
