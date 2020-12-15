import { action } from '@storybook/addon-actions';
import TodoItem from './TodoItem.vue';

// dummy data
import { todos as itemData } from '../../../utils/data';

// dummy event listeners
export const actionsData = {
  handleDeleteTodo: action('handleDeleteTodo'),
  handleUpdateTodo: action('handleUpdateTodo'),
};
 
export default {
  title: 'TodoItem',
  component: TodoItem,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { TodoItem },
  props: Object.keys(argTypes),
  methods: {},
  template: `
    <TodoItem
      v-bind="$props"
    />
  `,
});

export const Pending = Template.bind({});
Pending.args = {
  item: itemData[0],
  ...actionsData,
};

export const Done = Template.bind({});
Done.args = {
  item: itemData[1],
  ...actionsData,
};
