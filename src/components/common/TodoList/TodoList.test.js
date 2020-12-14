import { mount } from '@vue/test-utils';
import sinon, { expectation } from 'sinon';

import TodoList from './TodoList.vue';
import TodoItem from '../TodoItem/TodoItem.vue';

// dummy data
import { todos, todos_long } from '../../../utils/data';

let wrapper = null;

describe(`<TodoList />`, () => {
  describe(`# 할 일 목록`, () => {
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
      expect(wrapper.find('div.todolist__wrapper').exists()).toBeTruthy();
    });
  
    it(`할일 개수만큼 할일 요소들이 생성된다`, () => {
      const listEmpty = mount(TodoList, {
        propsData: {
          items: [],
        }
      })
      const listShort = mount(TodoList, {
        propsData: {
          items: todos,
        },
      });
      const listLong = mount(TodoList, {
        propsData: {
          items: todos_long,
        },
      });

      // 할일이 생성되지 않는다
      const countTodosEmpty = listEmpty.findAllComponents(TodoItem).length;
      expect(countTodosEmpty).toBe(0);
  
      // 2개 할일이 생성된다
      const countTodosShort = listShort.findAllComponents(TodoItem).length;
      expect(countTodosShort).toBe(2);
  
      // 5개 할일이 생성된다
      const countTodosLong = listLong.findAllComponents(TodoItem).length;
      expect(countTodosLong).toBe(5);
    });
  
    it(`목록 내 할일들의 올바른 정렬`, ()   => {
      const listShort = mount(TodoList, {
        propsData: {
          // 'PENDING' 1개, 'DONE' 1개
          items: todos,
        },
      });
      const listLong = mount(TodoList, {
        propsData: {
          // 'PENDING' 3개, 'DONE' 2개
          items: todos_long,
        },
      });
  
      // 정렬 기준 (1) 'PENDING' 먼저, 그 다음 'DONE'
      // 정렬 기준 (2) 추가 시간 순
      
      // 2개 할일이 생성된다 - 첫번째 할일은 'PENDING', 두번째 할일은 'DONE'
      const todosShort = listShort.findAllComponents(TodoItem).wrappers;
      expect(todosShort[0].classes()).not.toContain('done');
      expect(todosShort[1].classes()).toContain('done');
  
      // 5개 할일이 생성된다 - - 세번째 할일은 'PENDING', 네번째 할일은 'DONE'
      const todosLong = listLong.findAllComponents(TodoItem).wrappers;
      expect(todosLong[2].classes()).not.toContain('done');
      expect(todosLong[3].classes()).toContain('done');
    });

    // 데이터 로딩 중일 때 로딩 UI 표시는 한 단계 부모 컴포넌트 단으로 옮기자
    // Vue.js는 조건부 렌더링이 약하다...
    it(`조건에 따라 아무 것도 표시하지 않는다`, () => {
      // (1) 데이터 로딩 중인 경우
      wrapper = mount(TodoList, {
        propsData: {
          items: todos,
          isLoading: true,
        },
      });

      expect(wrapper.find('div.todolist__wrapper').exists()).toBeFalsy();
  
      // (2) 데이터가 없는 (빈 배열) 경우
      wrapper = mount(TodoList, {
        propsData: {
          items: [],
          isLoading: false,
        },
      });
      expect(wrapper.find('div.todolist__wrapper').exists()).toBeFalsy();
    });
  
    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# 할 일 목록이 비었을 때 안내 문구`, () => {
    beforeEach(() => {
      wrapper = mount(TodoList, {
        propsData: {
          items: [],
          isLoading: false,
          handleUpdateTodo: () => { },
          handleDeleteTodo: () => { },
        },
      });
    });

    it(`Wrapper 역할의 <div>`, () => {
      // 영역을 감싸는 <div>가 존재하며, "todolist-message__wrapper" class를 가진다
      expect(wrapper.find('div.todolist-message__wrapper').exists()).toBe(true);
    });
    
    it(`할일이 없다면, 안내 문구 표시`, () => {
      // 할일의 길이가 0개이고 로딩 완료 상태일 때,
      // 할일 목록(<div class="todolist__wrapper")은 출력되지 않는다
      const countTodosShort = wrapper.findAllComponents(TodoItem);
      expect(countTodosShort.length).toBe(0);  

      // 'Add a new task to do.' 문구가 출력된다
      expect(wrapper.find('div.todolist-message__wrapper > p').text())
        .toMatch('Add a new task to do.');
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  // 로딩 UI 관련 내용은 별도 컴포넌트로 추가
  // 체크박스 컴포넌트 변형

  describe(`# 최상위 Wrapper`, () => {
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

    it(`최상위 Container <div>`, () => {
      // 모든 컴포넌트를 감싸는 <div>가 존재하며, "todoitem__container" class를 가진다
      expect(wrapper.find('div.todolist__container').exists()).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  });
});
