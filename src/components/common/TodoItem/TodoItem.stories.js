import { action } from '@storybook/addon-actions';
import TodoItem from '.';

// dummy data
export const itemData = [
  {
    id: Date.now(),
    status: 'PENDING',
    desc: '운동하기',
  },
  {
    id: Date.now() + 30,
    status: 'DONE',
    desc: '휴식',
  },
];

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
  template:
    `<TodoItem
      v-bind="$props"
    />`,
});

export const Pending = Template.bind({});
Pending.args = {
  item: itemData[0],
  ...actionsData,
}

export const Done = Template.bind({});
Done.args = {
  item: itemData[1],
  ...actionsData,
}
