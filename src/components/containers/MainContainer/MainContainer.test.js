import { mount } from '@vue/test-utils';
import sinon, { spy } from 'sinon';

import MainContainer from './MainContainer.vue';

let wrapper = null;

describe(`<MainContainer />`, () => {
  describe(`# Structures`, () => {
    beforeEach(() => {
      // props는 사용되지 않는다
      wrapper = mount(MainContainer);
    });

    it(`Wrapper 역할의 <div>`, () => {
      // 전체 영역을 감싸는 <div가 존재하며, "maincontainer__wrapper" class를 가진다
      expect(wrapper.find('div.maincontainer__wrapper').exists()).toBeTruthy();
    });
  
    it(`필요한 컴포넌트들로 구성되어 있다`, () => {
      // 위에서 순서대로 제목, 입력, 목록, (로딩 중일 시) 로딩 UI
      // expect(wrapper.findComponent({ name: 'TodoHeader' }).exists()).toBeTruthy();
      expect(wrapper.findComponent({ name: 'TodoInput' }).exists()).toBeTruthy();
      expect(wrapper.findComponent({ name: 'TodoList' }).exists()).toBeTruthy();
      expect(wrapper.findComponent({ name: 'TodoLoadingIndicator' }).exists()).toBeTruthy();
    });
  
    it(`$data: Props로 사용될 데이터들을 사용한다`, () => {
      const data = Object.keys(wrapper.vm.$data);
      expect(data.includes('isLoading')).toBeTruthy();
      expect(data.includes('todoList')).toBeTruthy();
      expect(data.includes('todoDesc')).toBeTruthy();
    })

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`Business Logics`, () => {
    beforeEach(() => {
      // props는 사용되지 않는다
      wrapper = mount(MainContainer);
    });

    it(`입력 란에 할일 입력시 todoDesc props가 변경된다`, async () => {
      const todoInput = wrapper.find('div.todoinput__wrapper > input');
      await todoInput.setValue('휴식하기');
      expect(wrapper.vm.$data.todoDesc).toBe('휴식하기');
    });
  
    it(`할일 추가시 todoList props에 데이터가 갱신된다`, async () => {
      const todoInput = wrapper.find('div.todoinput__wrapper > input');
      const todoCreateButton = wrapper.find('div.todoinput__wrapper .todobutton__wrapper');
      await todoInput.setValue('휴식하기');
      await todoCreateButton.trigger('click');
      
      // 길이가 1인 배열로, 해당 요소는 직전에 설정한 설명값을 가진다
      expect(wrapper.vm.$data.todoList.length).toBe(1);
      expect(wrapper.vm.$data.todoList[0].desc).toBe('휴식하기');
    });
  
    it(`할일 목록 내 할일의 체크박스 클릭시 해당 할일의 상태가 변경된다`, async () => {
      const todoInput = wrapper.find('div.todoinput__wrapper > input');
      const todoCreateButton = wrapper.find('div.todoinput__wrapper .todobutton__wrapper');
      await todoInput.setValue('휴식하기');
      await todoCreateButton.trigger('click');

      const todoItemCheckbox = wrapper.find('div.todoitem-checkbox__wrapper > label');
      await todoItemCheckbox.trigger('click');
      expect(wrapper.vm.$data.todoList[0].status).toBe('DONE');
    });
  
    it(`할일 목록들이 적절한 순서로 정렬되어있다`, async () => {
      
    })
  
    it(`할일 목록 내 할일을 제거시 todoList에서 해당 할일이 제거된다`, async () => {
  
    });
  
    it(`현재 데이터 로딩 중일 경우 로딩 UI만 표시된다`, async () => {
  
    });

    afterEach(() => {
      wrapper = null;
    });
  });
});
