import React from 'react';
import Day from '../day';
import { shallow, mount, render } from 'enzyme';


test('Expect to have a valid wrapper after Day load.', () => {

    const enzyWrapper = shallow(<Day />);
    /*console.log(enzyWrapper.debug());*/

    expect(enzyWrapper).toBeTruthy();
});

test('Expect to find the corect content passed trought props rendered.', () => {

    const Props = { day: "1" };


    const enzyWrapper = mount(<Day {...Props} />);
    const elemQuery = enzyWrapper.find(".day-component .day");

    const { day: expectedDay } = Props,
          actualDayContent = elemQuery.text();

    expect(actualDayContent).toEqual(expectedDay);

});
