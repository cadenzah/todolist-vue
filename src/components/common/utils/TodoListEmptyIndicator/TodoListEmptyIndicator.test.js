import { mount } from '@vue/test-utils';

import TodoListEmptyIndicator from '../TodoListEmptyIndicator';

let wrapper = null;

describe(`<TodoListEmptyIndicator />`, () => {
  beforeEach(() => {
    wrapper = mount(TodoListEmptyIndicator, {
      slots: {
        default: 'Add a new task to do.',
      },
    });
  });

  it(`Wrapper 역할의 <div>`, () => {
    // 영역을 감싸는 <div>가 존재하며, "todolist-message__wrapper" class를 가진다
    expect(wrapper.find('div.todolist-message__wrapper').exists()).toBe(true);
  });
  
  it(`children으로 전달받은 텍스트를 안내 문구로 표시`, () => {
    // 'Add a new task to do.' 문구가 출력된다
    expect(wrapper.find('div.todolist-message__wrapper > p').text())
      .toMatch('Add a new task to do.');
  });

  afterEach(() => {
    wrapper = null;
  });
});
