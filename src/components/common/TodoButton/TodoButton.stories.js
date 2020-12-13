import { action } from '@storybook/addon-actions';
import TodoButton from '.';

// dummy data
export const itemData = [
  {
    primary: true,
    handleDeleteTodo: function() { },
  },
  {
    caution: true,
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
     >
      확인
     </TodoButton>
    `,
});

export const Primary = Template.bind({});
Primary.args = {
  ...itemData[0],
  ...actionsData,
}

export const Caution = Template.bind({});
Caution.args = {
  ...itemData[1],
  ...actionsData,
}
