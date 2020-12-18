import TodoLoadingIndicator from './TodoLoadingIndicator.vue';
 
export default {
  title: 'TodoLoadingIndicator',
  component: TodoLoadingIndicator,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { TodoLoadingIndicator },
  props: Object.keys(argTypes),
  methods: {},
  template: `
    <TodoLoadingIndicator
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
};

export const Five = Template.bind({});
Five.args = {
  lines: 5
};
