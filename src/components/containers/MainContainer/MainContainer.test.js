import { mount } from '@vue/test-utils';
import sinon, { spy } from 'sinon';

import MainContainer from './MainContainer.vue';

let wrapper = null;

describe(`<MainContainer />`, () => {
  beforeEach(() => {
    // props는 전혀 사용되지 않는다
    wrapper = mount(MainContainer);
  });

  it(`# Wrapper 역할의 <div>`, () => {

  });

  it(`# 필요한 컴포넌트들로 구성되어 있다`, () => {

  });

  it(`# 입력 란에 할일 입력시 todoDesc props가 변경된다`, () => {

  });

  it(`# 할일 추가시 todoList props에 데이터가 갱신된다`, () => {

  });

  it(`# 할일 목록 내 할일의 체크박스 클릭시 해당 할일의 상태가 변경된다`, () => {

  });

  it(`# 할일 목록들이 적절한 순서로 정렬되어있다`, () => {
    
  })

  it(`# 할일 목록 내 할일을 제거시 todoList에서 해당 할일이 제거된다`, () => {

  });

  it(`# 현재 데이터 로딩 중일 경우 로딩 UI만 표시된다`, () => {

  });

  afterEach(() => {
    wrapper = null;
  });
});
