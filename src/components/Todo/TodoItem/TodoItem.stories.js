import TodoItem from '../TodoItem';
import { action } from '@storybook/addon-actions';

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
  template: '<TodoItem />'
});

export const Default = Template.bind({});
