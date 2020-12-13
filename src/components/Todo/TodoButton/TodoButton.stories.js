import { action } from '@storybook/addon-actions';
import TodoButton from '../TodoButton';

// dummy data
export const itemData = [
  {
    buttonType: 'caution',
    handleDeleteTodo: function() { },
  },
  {
    buttonType: 'primary',
    handleDeleteTodo: function() { },
  },
];

// dummy event listeners
export const actionsData = {
  handleDeleteTodo: action('handleDeleteTodo'),
};
 
export default {
  title: 'TodoButton',
  component: TodoButton,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { TodoButton },
  props: Object.keys(argTypes),
  methods: {},
  template:
    `<TodoButton
      v-bind="$props"
    />`,
});

export const Primary = Template.bind({});
Pending.args = {
  item: itemData[0],
  ...actionsData,
}

export const Caution = Template.bind({});
Done.args = {
  item: itemData[1],
  ...actionsData,
}
