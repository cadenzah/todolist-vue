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
      expect(wrapper.find('div.todo-loading-indicator__wrapper').exists()).toBeTruthy();
    });
  
    it(`주어진 길이만큼 항목들이 생성된다`, () => {
      // 3개 할일이 생성된다
      const itemsCount = wrapper.findAll('div.todo-loading-indicator__wrapper > div').length;
      expect(itemsCount).toBe(3);
    });

    it(`각 항목에는 Indicator 표현을 위한 요소들이 들어있다`, () => {
      const item = wrapper.find('div.todo-loading-indicator__wrapper > div');
      expect(item.find('label').exists()).toBeTruthy();
      expect(item.find('label > input').exists()).toBeTruthy();
      expect(item.find('label > span').exists()).toBeTruthy();
    });
  
    afterEach(() => {
      wrapper = null;
    });
  });
});
