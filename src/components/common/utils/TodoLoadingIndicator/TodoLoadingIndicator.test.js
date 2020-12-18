import { mount } from '@vue/test-utils';

import TodoLoadingIndicator from './TodoLoadingIndicator.vue';

let wrapper = null;

describe(`<TodoLoadingIndicator />`, () => {
  describe(`# Placeholders list`, () => {
    beforeEach(() => {
      wrapper = mount(TodoLoadingIndicator, {
        propsData: {
          lines: 3,
        },
      });
    });
  
    it(`Wrapper 역할의 <div>`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todolist__wrapper" class를 가진다
      expect(wrapper.find('div.todo-loading-indicator__container').exists()).toBeTruthy();
    });
  
    it(`주어진 길이만큼 항목들이 생성된다`, () => {
      // 3개 할일이 생성된다
      const itemsCount = wrapper.findAll('div.todo-loading-indicator__container').length;
      expect(itemsCount).toBe(3);
    });

    it(`각 항목에는 Indicator 표현을 위한 요소들이 들어있다`, () => {
      const item = wrapper.find('div.todo-loading-indicator__container');

      // Checkbox
      expect(item.find('div.todo-loading-indicator-checkbox__wrapper > label').exists()).toBeTruthy();
      expect(item.find('div.todo-loading-indicator-checkbox__wrapper > label > input').exists()).toBeTruthy();
      expect(item.find('div.todo-loading-indicator-checkbox__wrapper > label > span').exists()).toBeTruthy();

      // Content Placeholder
      expect(item.find('div.todo-loading-indicator-content__wrapper > span').exists()).toBeTruthy();
      expect(item.find('div.todo-loading-indicator-content__wrapper > span').text()).toMatch('If you have something to do, don\'t be lazy!');
    });
  
    afterEach(() => {
      wrapper = null;
    });
  });
});
