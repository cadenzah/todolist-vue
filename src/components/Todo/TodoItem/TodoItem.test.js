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
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content__wrapper" class를 가진다`
      expect(wrapper.find('div.todoitem-content__wrapper').exists()).toBe(true);
    });

    it(`컨텐츠가 표시되는 <span>`, () => {
      // <div class="todoitem-content__wrapper"> 내에 존재
      expect(wrapper.find('div.todoitem-content__wrapper > span').exists()).toBe(true);
      // "todoitem-content__content" class를 가진다
      expect(wrapper.find('span.todoitem-content__content').exists()).toBe(true);
    });

    afterEach(() => {
      wrapper = null;
    });
  })

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
      // props로 할일 항목 처리에 필요한 것들을 모두 전달받았는지
      expect(wrapper.find('.todoitem-content__content').text()).toMatch('운동하기');

    })

    afterEach(() => {
      wrapper = null;
    });
  })

  describe(`# Integrated`, () => {
    it(`최상위 Wrapper <div>`, () => {
      wrapper = mount(TodoItem);
      // 모든 컴포넌트를 감싸는 <div>가 존재하며, "todoitem__container" class를 가진다
      expect(wrapper.find('div.todoitem__container').exists()).toBe(true);
    });
  });
});
