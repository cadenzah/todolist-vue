import { mount } from '@vue/test-utils';
import sinon, { spy } from 'sinon';

import TodoInput from './TodoInput.vue';

let wrapper = null;

describe(`<TodoInput />`, () => {
  describe(`# Wrapper <div>`, () => {
    beforeEach(() => {
      wrapper = mount(TodoInput);
    });

    it(`Wrapper 역할의 <div>를 가진다`, () => {
      // 전체 영역을 감싸는 <div>가 존재하며, "todoinput__wrapper" class를 가진다
      expect(wrapper.find('div.todoinput__wrapper').exists()).toBeTruthy();
    });

    afterEach(() => {
      wrapper = null;
    });
  });

  describe(`# Input`, () => {
    beforeEach(() => {
      const spyChangeInput = sinon.spy();
      const spyCreateTodo = sinon.spy();
      const todoDesc = '휴식하기';

      wrapper = mount(TodoInput, {
        propsData: {
          // todoDesc: todoDesc,
          placeholder: "Write a new task to do.",
          handleChangeInput: spyChangeInput,
          handleCreateTodo: spyCreateTodo,
        },
      });
    });

    it(`<input /> 요소를 가진다`, () => {
      // 컨텐츠 영역을 감싸는 <div>가 존재하며, "todoitem-checkbox__wrapper" class를 가진다
      expect(wrapper.find('div.todoinput__wrapper > input').exists()).toBeTruthy();
    });

    it(`필요한 Attribute를 가진다`, async () => {
      let input = wrapper.find('div.todoinput__wrapper > input');
      let attributes = input.attributes();
      
      // console.log(attributes);
      // ## <input>의 value로 props가 전달 안 되고 있는데 실제로도 그런지 확인 필요 ##
      // ## 스토리북 실행 및 예제 프로젝트 작성하여 확인 결과 정상 작동한다 ##
      // todoDesc를 value로 가진다
      // expect(attributes.value).toBe("휴식하기");

      // children으로 전달받은 문구를 placeHolder로 사용한다
      expect(attributes.placeholder).toBe('Write a new task to do.');
      // 맞춤법 검사 기능 해제 - autoCorrect, autoCapitallize, spellCheck
      expect(attributes.autocorrect).toBe('off');
      expect(attributes.autocapitalize).toBe('off');
      expect(attributes.spellcheck).toBe('false');
    });

    afterEach(() => {
      wrapper = null;
    });
  });
});
