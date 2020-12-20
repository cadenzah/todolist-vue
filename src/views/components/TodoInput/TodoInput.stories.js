import { action } from '@storybook/addon-actions';
import TodoInput from './TodoInput.vue';
 
// dummy event listeners
export const actionsData = {
  handleCreateTodo: action('handleCreateTodo'),
  handleChangeInput: () => action('handleChangeInput')(),
};

export default {
  title: 'TodoInput',
  component: TodoInput,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { TodoInput },
  props: Object.keys(argTypes),
  methods: {},
  template: `
    <TodoInput
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
Default.args = {
  todoDesc: '',
  placeholder: 'Write a new task to do.',
  ...actionsData,
};

export const Writing = Template.bind({});
Writing.args = {
  todoDesc: '휴식하기',
  placeholder: 'Write a new task to do.',
  ...actionsData,
};
