import TodoItem from '../TodoItem';

export default {
  title: 'TodoItem',
  component: TodoItem,
};

export const Default = (args, { argTypes }) => ({
  components: { TodoItem },
  template: '<TodoItem />'
});
