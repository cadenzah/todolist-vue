import TodoItem from '../TodoItem';
import { action } from '@storybook/addon-actions';

// dummy data
const items = [
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
 
export default {
  title: 'TodoItem',
  component: TodoItem,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

export const actionsData = {
  onPinTask: action('pin-task'),
  onArchiveTask: action('archive-task'),
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
  item: items[0],
}

export const Done = Template.bind({});
Done.args = {
  item: items[1],
}
