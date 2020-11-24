// mixin's option will be directly merged into the component which uses the mixin
// if the option props' name is overlapped, the priority goes to the component; mixin will be ignored

const DialogMixin = {
  data: function() {
    return {
      dialog: true,
    };
  },
  methods: {
    showDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  }
};

export default DialogMixin;
