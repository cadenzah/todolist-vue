import { mount } from '@vue/test-utils';
import sinon from 'sinon';

import TodoItem from './TodoItem.vue';

let wrapper = null;

describe(`<TodoItem />`, () => {
  describe(`# Wrapper <div>`, () => {
    it(`Wrapper 역할의 <div>를 가진다`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-content__wrapper').exists()).toBe(true);
    });
  });

  describe(`# Input`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem);
    });

    it(`<input /> 요소를 가진다`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-checkbox__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-checkbox__wrapper').exists()).toBe(true);
    });

    it(`필요한 Attribute를 가진다`, async () => {
      // const spy = sinon.spy();
      // wrapper = mount(TodoItem, {
      //   propsData: {
      //     item: todos[0],
      //     handleUpdateTodo: spy,
      //   },
      // });
      // let input = wrapper.find('.todoitem-checkbox__wrapper input')
      // let attributes = input.attributes();

      // // input은 props로부터 string id를 부여받아야 한다
      // expect(typeof attributes.id).toBe('string');
      // // type은 "checkbox" 이어야 한다
      // expect(attributes.type).toBe('checkbox');
      // // value로 id를 가져야 한다 (이후 이벤트 리스너 연동을 위함)
      // expect(attributes.value).toBe(attributes.id);
      // // 클릭 이벤트가 발생하였을 때, item.id를 전달한다
      // await wrapper.find('div.todoitem-checkbox__wrapper label').trigger('click');
      // expect(spy.called).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Button`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem);
    });
    
    it(`<Button /> 요소를 가진다`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-content__wrapper').exists()).toBe(true);
    });

    it(`필요한 Attributes를 가진다`, () => {
      // // item props로 전달된 데이터를 활용하여 컨텐츠를 표시한다
      // wrapper = mount(TodoItem, {
      //   propsData: {
      //     item: todos[0], // item.status === 'DONE'
      //     handleUpdateTodo: () => {},
      //     handleDeleteTodo: () => {},
      //   },
      // });

      // expect(wrapper.find('.todoitem-content__wrapper > span').text()).toMatch('운동하기');
    });

    it(`Placeholder 문구를 props로 전달한다`, () => {

    });

    afterEach(() => {
      wrapper = null;
    });
  })
});
