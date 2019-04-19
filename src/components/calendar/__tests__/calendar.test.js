import React from 'react';
import Calendar from '../calendar';
import { shallow, mount } from 'enzyme';

describe ("test Calendar component", ()=> {

    test('Expect to have a valid wrapper after Calendar load.', () => {

        const enzyWrapper = shallow(<Calendar /> );
        /* console.log(enzyWrapper.debug()); */

        expect(enzyWrapper).toBeTruthy();
    });

    test('Expect to have a title with element type h2.', () => {

        const enzyWrapper = shallow(<Calendar />);
        const currentMonthElem = enzyWrapper.find('.calendar-current-month');

        expect(currentMonthElem).toHaveLength(1);
    });

    test('Expect to have the corect number of children.', () => {

        const enzyWrapper = mount(<Calendar />);
        const daysInMonth = enzyWrapper.find('.calendar-day-component');

        expect(daysInMonth).toHaveLength(31);
    });

});
