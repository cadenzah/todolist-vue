import { mount } from '@vue/test-utils';
import sinon, { spy } from 'sinon';

import TodoInput from './TodoInput.vue';

let wrapper = null;

describe(`<TodoInput />`, () => {
  describe(`# Wrapper <div>`, () => {
    beforeEach(() => {
      wrapper = mount(TodoInput);
    });

    it(`Wrapper 역할의 <div>를 가진다`, () => {
      // 전체 영역을 감싸는 <div>가 존재하며, "todoinput__wrapper" class를 가진다
      expect(wrapper.find('div.todoinput__wrapper').exists()).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Input`, () => {
    beforeEach(() => {
      const spyChangeInput = sinon.spy();
      const spyCreateTodo = sinon.spy();

      wrapper = mount(TodoInput, {
        propsData: {
          todoDesc: "",
          handleChangeInput: spyChangeInput,
          handleCreateTodo: spyCreateTodo,
        },
        slots: {
          default: 'Write a new task to do.',
        },
      });
    });

    it(`<input /> 요소를 가진다`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-checkbox__wrapper" class를 가진다
      expect(wrapper.find('div.todoinput__wrapper > input').exists()).toBeTruthy();
    });

    it(`필요한 Attribute를 가진다`, async () => {
      let input = wrapper.find('.todoinput__wrapper > input');
      let attributes = input.attributes();
      const todoDesc = '휴식하기';

      // todoDesc를 value로 가진다
      expect(attributes.value).toBe(attributes.id);
      // children으로 전달받은 문구를 placeholder로 사용한다
      expect(atrributes.placeholder).toBe('Write a new task to do.');
      // 맞춤법 검사 기능 해제 - autoCorrect, autoCapitallize, spellCheck
      expect(attributes.autoCorrect).toBe('off');
      expect(attributes.autoCapitalize).toBe('off');
      expect(attributes.autoCorrect).toBeFalsy();
      // 입력 이벤트가 발생하였을 떄, input 요소의 value를 전달
      await wrapper.find('button').trigger('input', {
        target: { value: todoDesc }
      });
      expect(spy.calledWith(todoDesc)).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Button`, () => {
    beforeEach(() => {
      const spyChangeInput = sinon.spy();
      const spyCreateTodo = sinon.spy();
      
      wrapper = mount(TodoInput, {
        propsData: {
          todoDesc: "",
          handleChangeInput: spyChangeInput,
          handleCreateTodo: spyCreateTodo,
        },
      });
    });
    
    it(`<Button /> 요소를 가진다`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-content__wrapper').exists()).toBe(true);
    });

    it(`버튼 색상 스타일이 primary이다`, () => {
      expect(wrapper.find('.todoitem-content__wrapper > span').text()).toMatch('운동하기');

      
    });

    it(`버튼 클릭시 이벤트 핸들러가 작동한다`, () => {
      // 클릭 이벤트가 발생하였을 때, 현재 todoDesc의 값을 전달
      await wrapper.find('button').trigger('click');
      expect(spy.called).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  })
});
