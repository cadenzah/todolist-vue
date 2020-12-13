import { mount } from '@vue/test-utils';
import sinon from 'sinon';

import TodoList from '../TodoList';

// dummy data
import { todos } from '../../../utils/data';

let wrapper = null;

describe(`<TodoList >`, () => {
  beforeEach(() => {
    wrapper = mount(TodoList);
  });

  it(`Wrapper 역할의 <div>`, () => {

  });

  it(`할일 개수만큼 할일 요소들이 생성된다`, () => {

  });

  it(`목록 내 할일들의 올바른 정렬`, () => {

  });

  it(`props를 활용하여 데이터 준비 상황에 따라 다른 화면 표시`, () => {

  });

  afterEach(() => {
    wrapper = null;
  });
});
