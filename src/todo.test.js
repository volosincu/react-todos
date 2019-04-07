import React from 'react';
import Todo from './todo';
import { shallow, mount, render } from 'enzyme';


test('Expect to have a valid wrapper after Todo load.', () => {

    const enzyWrapper = shallow(<Todo />);
    /*console.log(enzyWrapper.debug());*/

    expect(enzyWrapper).toBeTruthy();
});


test('Expect to find the specific className within todo component.', () => {

    const enzyWrapper = shallow(<Todo />);
    const elemQuery = enzyWrapper.find(".todo-component");

    const expectedClasses = 1;
    expect(elemQuery).toHaveLength(expectedClasses);

});

test('Expect to find the corect content passed trought props rendered.', () => {

    const Props = {
        text: "todo item",
        isCompleted: false };

    const enzyWrapper = mount(<Todo {...Props} />);
    const elemQuery = enzyWrapper.find(".todo-component");

    const { text: expectedContent } = Props,
          actualTodoContent = elemQuery.text();

    expect(actualTodoContent).toEqual(expectedContent);

});
