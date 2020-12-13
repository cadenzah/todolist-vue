import { mount } from '@vue/test-utils';
import sinon, { expectation } from 'sinon';

import TodoList from '../TodoList';
import TodoItem from '../TodoItem';

// dummy data
import { todos, todos_long } from '../../../utils/data';

let wrapper = null;

describe(`<TodoList >`, () => {
  beforeEach(() => {
    wrapper = mount(TodoList, {
      propsData: {
        items: todos, // 2개
        isLoading: false,
        handleUpdateTodo: () => { },
        handleDeleteTodo: () => { },
      },
    });
  });

  it(`Wrapper 역할의 <div>`, () => {
    // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todolist__wrapper" class를 가진다
    expectation(todolistWrapper.find('div.todolist__wrapper').exists()).toBe(true);
  });

  it(`할일 개수만큼 할일 요소들이 생성된다`, () => {
    const listShort = mount(TodoList, {
      propsData: {
        items: todos,
      },
    });
    const listLong = mount(TodoList, {
      propsdata: {
        items: todos_long,
      },
    });

    // 2개 할일이 생성된다
    const countTodosShort = listShort.find('div.todolist__wrapper').findAllComponents(TodoItem);
    expect(countTodosShort.length).toBe(2);

    // 5개 할일이 생성된다
    const countTodosLong = listLong.find('div.todolist__wrapper').findAllComponents(TodoItem);
    expect(countTodosLong.length).toBe(5);
  });

  it(`목록 내 할일들의 올바른 정렬`, ()   => {
    const listShort = mount(TodoList, {
      propsData: {
        // 'PENDING' 1개, 'DONE' 1개
        items: todos,
      },
    });
    const listLong = mount(TodoList, {
      propsdata: {
        // 'PENDING' 3개, 'DONE' 2개
        items: todos_long,
      },
    });

    // 정렬 기준 (1) 'PENDING' 먼저, 그 다음 'DONE'
    // 정렬 기준 (2) 추가 시간 순
    
    // 2개 할일이 생성된다 - 첫번째 할일은 'PENDING', 두번째 할일은 'DONE'
    const countTodosShort = listShort.find('div.todolist__wrapper').findAllComponents(TodoItem);
    expect(countTodosShort[0].classes()).not.toContain('done');
    expect(countTodosShort[1].classes()).toContain('done');

    // 5개 할일이 생성된다 - - 세번째 할일은 'PENDING', 네번째 할일은 'DONE'
    const countTodosLong = listLong.find('div.todolist__wrapper').findAllComponents(TodoItem);
    expect(countTodosLong[2].classes()).not.toContain('done');
    expect(countTodosLong[3].classes()).toContain('done');
  });

  it(`할일이 없다면, 안내 문구 표시`, () => {
    wrapper = mount(TodoList, {
      propsData: {
        items: [],
        isLoading: false,
      },
    });

    // 할일의 길이가 0개이고 로딩 완료 상태일 때,,
    // 'Add a new task to do.' 문구가 출력된다
    expect(wrapper.find('div.todolist__wrapper').text())
      .toMatch('Add a new task to do.');
  });

  it(`데이터 로딩 중이라면 로딩 UI 표시`, () => {
    wrapper = mount(TodoList, {
      propsData: {
        items: [],
        isLoading: true,
      },
    });

    // 로딩 중인 경우
    // 로딩 중을 나타내는 화면 표시
    // 이후 완성
    // expect(wrapper.find('div.todolist__wrapper').findComponent(TodoStateLoading).exists()).toBeTruthy();
  });

  afterEach(() => {
    wrapper = null;
  });
});
