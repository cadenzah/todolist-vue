import { mount } from '@vue/test-utils';

import TodoLoadingIndicator from './TodoLoadingIndicator.vue';

let wrapper = null;

describe(`<TodoLoadingIndicator />`, () => {
  describe(`# 할 일 목록`, () => {
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
  
    it(`할일 개수만큼 할일 요소들이 생성된다`, () => {
      // 3개 할일이 생성된다
      const itemsCount = wrapper.findAll('div.todo-loading-indicator__wrapper > div').length;
      expect(itemsCount).toBe(3);
    });
  
    afterEach(() => {
      wrapper = null;
    });
  });
});
