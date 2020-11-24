<template>
  <div class="card">
    <h3>Card.vue</h3>
    <p>&lt;Card&gt; component receives a `message` props which can be used inside. BTW... where is the message?</p>
    <p>Child counter: {{getCounter}}</p>
    <button @click="addCounter">+</button>
    <button @click="subCounter">-</button>

    <!-- Custom directive practice-->
    <p class="message" v-conditional:[getCounter]="10">You can check this counter if it's 10</p>
    <p v-conditional:[getCounter]="20">You can check this counter if it's 20</p>

    <p class="message" v-if="_dialog">{{ message }}</p>
    <button @click="showMessage">Show</button>
    <button @click="hideMessage">Hide</button>
    <p>You can check directive and mixin feature in &lt;Card&gt; component.</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import { dialogMixin } from '../../mixins';

export default {
  mixins: [
    dialogMixin,
  ],
  props: ['message'],
  computed: {
    _dialog: function() {
      return this.dialog
    },
    ...mapGetters([
      'getCounter'
    ])
  },
  methods:{
    ...mapMutations([
      'addCounter',
      'subCounter',
    ]),
    showMessage: function() {
      this.showDialog();
    },
    hideMessage: function() {
      this.closeDialog();
    }
  }
};
</script>

<style>
.card {
  background-color: thistle;
  border: 2px solid 5a5a5a;
  margin: 1rem;
}

.message {
  background-color: violet
}

</style>
