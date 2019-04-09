import React from 'react';
import Todos from '../todos';
import { shallow, mount } from 'enzyme';

describe ("test Todos component", ()=> {

    test('Expect to have a valid wrapper after Todos load.', () => {

        const enzyWrapper = shallow(<Todos /> );
        /* console.log(enzyWrapper.debug()); */

        expect(enzyWrapper).toBeTruthy();
    });

    test('Expect to have a title with element type h2.', () => {

        const enzyWrapper = shallow(<Todos />);
        const titleElem = enzyWrapper.find('.todos-title');

        const titleTypeElem = titleElem.type(),
              expectedType = "h2";

        expect(titleTypeElem).toEqual(expectedType);
    });

    test('Expect to have the corect number of children.', () => {

        /** TODO Now children are hardcoded in Todos component */
        const enzyWrapper = mount(<Todos />);
        const todosChildren = enzyWrapper.find('.todo-component');

        expect(todosChildren).toHaveLength(3);
    });

});
