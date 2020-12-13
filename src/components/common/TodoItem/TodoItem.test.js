import { mount } from '@vue/test-utils';
import sinon from 'sinon';

import TodoItem from './TodoItem.vue';

// dummy data
import { todos } from '../../../utils/data';

let wrapper = null;

describe(`<TodoItem />`, () => {
  describe(`# Checkbox`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem);
    });

    it(`Wrapper 역할의 <div>`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-checkbox__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-checkbox__wrapper').exists()).toBe(true);
    });

    it(`체크박스를 구성하는 요소들`, () => {
      // 체크박스를 감싸는 <label>이 래퍼 <div> 내에 존재
      expect(wrapper.find('div.todoitem-checkbox__wrapper > label').exists()).toBe(true);

      // <label>은 for 속성을 가져서 이를 통하여 체크박스 표시를 연결한다

      // 래퍼 <div> 내에 체크박스를 구성하는 <input>과 <span> 이 중첩되어 존재
      expect(wrapper.find('label > input').exists()).toBe(true);
      expect(wrapper.find('label > span').exists()).toBe(true);
    });

    it(`<input>이 필요한 Attribute를 가진다`, async () => {
      const spy = sinon.spy();
      wrapper = mount(TodoItem, {
        propsData: {
          item: todos[0],
          handleUpdateTodo: spy,
        },
      });
      let input = wrapper.find('.todoitem-checkbox__wrapper input')
      let attributes = input.attributes();

      // input은 props로부터 string id를 부여받아야 한다
      expect(typeof attributes.id).toBe('string');
      // type은 "checkbox" 이어야 한다
      expect(attributes.type).toBe('checkbox');
      // value로 id를 가져야 한다 (이후 이벤트 리스너 연동을 위함)
      expect(attributes.value).toBe(attributes.id);
      // 클릭 이벤트가 발생하였을 때, item.id를 전달한다
      await wrapper.find('div.todoitem-checkbox__wrapper label').trigger('click');
      expect(spy.called).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Contents`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem);
    });
    
    it(`Wrapper 역할의 <div>`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-content__wrapper').exists()).toBe(true);
    });

    it(`할일 내용이 표시되는 <p>`, () => {
      // <div class="todoitem-content__wrapper"> 내에 존재
      expect(wrapper.find('div.todoitem-content__wrapper > span').exists()).toBe(true);
    });

    it(`props를 활용하여 <p>에 컨텐츠 주입`, () => {
      // item props로 전달된 데이터를 활용하여 컨텐츠를 표시한다
      wrapper = mount(TodoItem, {
        propsData: {
          item: todos[0], // item.status === 'DONE'
          handleUpdateTodo: () => {},
          handleDeleteTodo: () => {},
        },
      });

      expect(wrapper.find('.todoitem-content__wrapper > span').text()).toMatch('운동하기');
    });

    afterEach(() => {
      wrapper = null;
    });
  })

  describe(`# Integrated`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem);
    });
    
    it(`최상위 Container <div>`, () => {
      wrapper = mount(TodoItem);
      // 모든 컴포넌트를 감싸는 <div>가 존재하며, "todoitem__container" class를 가진다
      expect(wrapper.find('div.todoitem__container').exists()).toBe(true);
    });

    it(`props에 따라 다른 class 추가`, () => {
      // props.item.status !== 'DONE' 이면
      // 최상위 <div>는 기본 class만 가진다
      wrapper = mount(TodoItem, {
        propsData: {
          item: todos[0], // item.status === 'PENDING'
        },
      });
      const div_wrapper_pending = wrapper.find('div.todoitem__container');
      expect(div_wrapper_pending.classes()).not.toContain('done');

      // props.item.status === 'DONE' 이면
      // 최상위 <div>에 'done' class 추가
      wrapper = mount(TodoItem, {
        propsData: {
          item: todos[1], // item.status === 'DONE'
        },
      });
      const div_wrapper_done = wrapper.find('div.todoitem__container');
      expect(div_wrapper_done.classes()).toContain('done');
    });

    afterEach(() => {
      wrapper = null;
    });
  });
});
