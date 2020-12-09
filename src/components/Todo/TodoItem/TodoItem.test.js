import { mount } from '@vue/test-utils';
import TodoItem from './TodoItem.vue';

describe(`TodoItem.vue`, () => {
  describe(`# 체크박스`, () => {
    it(`Element 배치`, () => {
      const wrapper = mount(TodoItem);
      expect(wrapper.find('input').exists()).toBe(true);
    });
  });

  describe(`# Contents`, () => {
    it(`Element 배치`, () => {
      const wrapper = mount(TodoItem);

      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-content--wrapper" class를 가진다
      expect(wrapper.find('div.todoitem-content--wrapper').exists()).toBe(true);

      // 래퍼 <div> 내에 컨텐츠가 표시되는 <span> 요소 존재가 존재하며,
      // "todoitem-content--content" class를 가진다
      expect(wrapper.find('.todoitem-content--wrapper > span.todoitem-content--content').exists()).toBe(true);
    })
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
