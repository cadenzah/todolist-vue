import MainContainer from './MainContainer.vue';

export default {
  title: 'MainContainer',
  component: MainContainer,
  excludeStories: /.*Data$/, // otherwise addon-actions generates error
};

const Template = (args, { argTypes }) => ({
  components: { MainContainer },
  props: Object.keys(argTypes),
  methods: {},
  template: `
    <MainContainer
      v-bind="$props"
    />
  `,
});

export const Default = Template.bind({});
