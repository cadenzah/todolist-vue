import { mount } from '@vue/test-utils';
import sinon from 'sinon';

import TodoItem from './TodoButton.vue';

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

describe(`# TodoButton`, () => {
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

  it(`children으로 전달된 텍스트를 활용하여 버튼 텍스트 표시`, () => {
    expect(wrapper.find('.todoitem-button__wrapper > p').text()).toMatch('Delete');
  });

  it(`클릭 이벤트 핸들러 사용`, async () => {
    const spy = sinon.spy();
    wrapper = mount(TodoItem, {
      propsData: {
        item: items[0],
        handleDeleteTodo: spy,
      },
    });

    // 클릭 이벤트가 발생하였을 때, item.id를 전달한다
    await wrapper.find('div.todoitem-button__wrapper').trigger('click')
    expect(spy.calledWith(items[0].id)).toBeTruthy();
  });

  // it(`prop에 따라 다른 class 추가`, () => {
  //   wrapper = mount(TodoItem, {
  //     propsData: {
  //       item: items[0]
  //     }
  //   });
  // });

  afterEach(() => {
    wrapper = null;
  });
});
