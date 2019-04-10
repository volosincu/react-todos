import React from 'react';
import Todo from '../todo';
import { shallow, mount } from 'enzyme';

describe ("test Todo state behaviour", ()=> {

    test('with initial state the validation class isn\'t rendered', () => {

        const enzyWrapper = shallow(<Todo /> );
        const validationError = enzyWrapper.find('.fieldError');

        expect(validationError).toHaveLength(0);
    });

    test('onChange time with correct date format the validation class is shown.', () => {

        const enzyWrapper = shallow(<Todo />);
        const dateInput = enzyWrapper.find('input[name="datetime"]');
        dateInput.simulate('change', {target: {value: "10/10/2010"}});
        const validationError = enzyWrapper.find('.fieldError');

        expect(validationError).toHaveLength(0);
    });

    test('onChange time with wrong date format the validation class is shown.', () => {

        const enzyWrapper = shallow(<Todo />);
        const dateInput = enzyWrapper.find('input[name="datetime"]');
        dateInput.simulate('change', {target: {value: 10}});
        const validationError = enzyWrapper.find('.fieldError');

        expect(validationError).toHaveLength(1);
    });

});
