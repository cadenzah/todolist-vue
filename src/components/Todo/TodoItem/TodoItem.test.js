import { mount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

describe(`TodoItem.vue`, () => {
  describe(`# 체크박스`, () => {
    it(`Wrapper 역할의 <div>`, () => {
      const wrapper = mount(TodoItem);

      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-checkbox__wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-checkbox__wrapper').exists()).toBe(true);
    });

    it(`체크박스를 구성하는 요소들`, () => {
      const wrapper = mount(TodoItem);

      // 체크박스를 감싸는 <label>이 래퍼 <div> 내에 존재
      expect(wrapper.find('div.todoitem-checkbox__wrapper > label').exists()).toBe(true);

      // <label>은 for 속성을 가져서 이를 통하여 체크박스 표시를 연결한다

      // 래퍼 <div> 내에 체크박스를 구성하는 <input>과 <span> 이 중첩되어 존재
      expect(wrapper.find('label > input').exists()).toBe(true);
      expect(wrapper.find('label > span').exists()).toBe(true);
    });
  });

  describe(`# Contents`, () => {
    
    it(`Wrapper 역할의 <div>`, () => {
      const wrapper = mount(TodoItem);

      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content__wrapper" class를 가진다`
      expect(wrapper.find('div.todoitem-content__wrapper').exists()).toBe(true);
    });

    it(`컨텐츠가 표시되는 <span>`, () => {
      const wrapper = mount(TodoItem);

      // <div class="todoitem-content__wrapper"> 내에 존재
      expect(wrapper.find('.todoitem-content--wrapper > span').exists()).toBe(true);
      // "todoitem-content__content" class를 가진다
      expect(wrapper.find('span.todoitem-content__content').exists()).toBe(true);
    });
  })

  describe(`# Vue Component`, () => {
    it(`props`, () => {
      const wrapper = mount(TodoItem);

      // props로 할일 항목 처리에 필요한 것들을 모두 전달받았는지
      const { item, handleUpdateTodo, handleDeleteTodo } = wrapper.props;
      expect(typeof item).toBe('object');
      expect(typeof handleUpdateTodo).toBe('function');
      expect(typeof handleDeleteTodo).toBe('function');
    })
  })
});
