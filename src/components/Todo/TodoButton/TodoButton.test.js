import { mount } from '@vue/test-utils';
import sinon from 'sinon';

import TodoButton from './TodoButton.vue';

let button__primary = null,
    button__caution = null;

// dummy data
const items = [
  {
    buttonType: 'primary',
    handleDeleteTodo: function() { },
  },
  {
    buttonType: 'caution',
    handleDeleteTodo: function() { },
  },
];

describe(`<TodoButton />`, () => {
  beforeEach(() => {
    button__primary = mount(TodoButton, {
      propsData: {
        ...items[0],
      },
    });
    button__caution = mount(TodoButton, {
      propsData: {
        ...items[1],
      },
    });
  });

  it(`Wrapper 역할의 <div>`, () => {
    // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-button__wrapper" class를 가진다
    expect(button__caution.find('div.todobutton__wrapper').exists()).toBe(true);
  });

  it(`버튼 텍스트가 표시되는 <p>`, () => {
    // <div class="todoitem-content__wrapper"> 내에 존재
    expect(button__caution.find('div.todobutton__wrapper > p').exists()).toBe(true);
  });

  it(`children으로 전달된 텍스트를 활용하여 버튼 텍스트 표시`, () => {
    button__caution = mount(TodoButton, {
      propsData: {
        ...items[0],
      },
      slots: {
        default: 'Delete'
      },
    })
    expect(button__caution.find('.todobutton__wrapper > p').text()).toMatch('Delete');
  });

  it(`클릭 이벤트 핸들러 사용`, async () => {
    const spy = sinon.spy();
    button__caution = mount(TodoButton, {
      propsData: {
        ...items[0],
        handleDeleteTodo: spy,
      },
    });

    // 클릭 이벤트가 발생하였을 때, props.handleDeleteTodo 가 실행된다
    await button__caution.find('div.todobutton__wrapper').trigger('click')
    expect(spy.called).toBeTruthy();
  });

  it(`prop에 따라 다른 class 추가`, () => {
    // props.buttonType 으로 판단
    // (1) 'primary' - primary class 추가
    // (2) 'caution' - caution class 추가
    const classes__primary = button__primary.find('div.todobutton__wrapper').classes();
    const classes__caution = button__caution.find('div.todobutton__wrapper').classes();
    expect(classes__primary).toContain('primary');
    expect(classes__primary).not.toContain('caution');
    expect(classes__caution).toContain('caution');
    expect(classes__caution).not.toContain('primary');
  });

  afterEach(() => {
    button__primary = null;
    button__caution = null;
  });
});
