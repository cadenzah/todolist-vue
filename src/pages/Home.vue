<template>
  <div>
    <h2>Root Page</h2>
    <p>Check the &lt;Card /&gt; component, you will see how Vuex work gorgeously.</p>
    <p>Type in any string!: <input v-model="message" /></p>
    <card :message="message"></card>
  </div>
</template>

<script>
import { Card } from '../components';

export default {
  components: {
    card: Card,
  },
  data: function() {
    return {
      message: '',
    }
  },
  methods: {
    navigateTest() {
      return this.$router.push('/test');
    },
  },
};
</script>

<style>

</style>
