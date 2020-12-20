import TodoListEmptyIndicator from './TodoListEmptyIndicator.vue';
 
export default {
  title: 'TodoListEmptyIndicator',
  component: TodoListEmptyIndicator,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { TodoListEmptyIndicator },
  props: Object.keys(argTypes),
  methods: {},
  template:
    `<TodoListEmptyIndicator
      v-bind="$props"
     >
      일찍 자고 일찍 일어나는 새가 되자
     </TodoListEmptyIndicator>
    `,
});

export const Default = Template.bind({});
