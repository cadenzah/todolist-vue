import { mount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

let wrapper = null;

// dummy data
const items = [
  {
    id: Date.now(),
    status: 'PENDING',
    desc: '운동하기',
  },
  {
    id: Date.now() + 30,
    status: 'DONE',
    desc: '휴식',
  },
];
 

describe(`TodoItem.vue`, () => {
  describe(`# 체크박스`, () => {
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

    afterEach(() => {
      wrapper = null;
    });
  })

  describe(`# Button`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem);
    });

    it(`Wrapper 역할의 <div>`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-button__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-button__wrapper').exists()).toBe(true);
    });

    it(`버튼 텍스트가 표시되는 <p>`, () => {
      // <div class="todoitem-content__wrapper"> 내에 존재
      expect(wrapper.find('div.todoitem-button__wrapper > p').exists()).toBe(true);
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Vue Component`, () => {
    beforeEach(() => {
      wrapper = mount(TodoItem, {
        propsData: {
          item: items[0],
          handleUpdateTodo: () => {},
          handleDeleteTodo: () => {},
        },
      });
    });

    it(`props를 데이터로 활용`, () => {
      // item props로 전달된 데이터를 활용하여 컨텐츠를 표시한다
      expect(wrapper.find('.todoitem-content__content').text()).toMatch('운동하기');

      expect(wrapper.find('.todoitem-button__content').text()).toMatch('Delete');
    })

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Integrated`, () => {
    it(`최상위 Wrapper <div>`, () => {
      wrapper = mount(TodoItem);
      // 모든 컴포넌트를 감싸는 <div>가 존재하며, "todoitem__container" class를 가진다
      expect(wrapper.find('div.todoitem__container').exists()).toBe(true);
    });
  });
});
