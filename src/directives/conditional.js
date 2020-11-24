// display the target element if argument's value reaches the property's value
// ex) <p v-conditional:[count]="10"></p>
const s = JSON.stringify;

const directive = function(el, binding, vnode) {
  const count = binding.arg;
  const indicator = binding.value;

  if (count === indicator)
    el.style.visibility = 'visible';
  else
    el.style.visibility = 'hidden';
};

export default directive;

// - `binding.value`(element's property) is evaluated as a JS value
// - if `bind` and `update`'s logics are the same, they can be merged; only function will be passed when initialized
