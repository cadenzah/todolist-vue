import { action } from '@storybook/addon-actions';
import TodoList from './TodoList.vue';

// dummy data
import {
  todos,
  todos_long,
} from '../../../utils/data';

// dummy event listeners
export const actionsData = {
  handleDeleteTodo: action('handleDeleteTodo'),
  handleUpdateTodo: action('handleUpdateTodo'),
};
 
export default {
  title: 'TodoList',
  component: TodoList,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { TodoList },
  props: Object.keys(argTypes),
  methods: {},
  template: `
    <TodoList
      v-bind="$props"
    />
  `,
});

export const Short = Template.bind({});
Short.args = {
  items: todos,
  isLoading: false,
  ...actionsData,
};

export const Long = Template.bind({});
Long.args = {
  items: todos_long,
  isLoading: false,
  ...actionsData,
};

export const Empty = Template.bind({});
Empty.args = {
  items: [],
  isLoading: false,
  ...actionsData,
};
