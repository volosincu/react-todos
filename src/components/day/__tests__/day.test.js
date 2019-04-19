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

describe("Test if component has the expected functionalities. ", ()=>{

    it('Expect to find the add reminder button.', () => {
        const Props = { day: "1", reminders: null };
        const enzyWrapper = mount(<Day {...Props} />);
        const remindersCounter = enzyWrapper.find(".day-component .reminders-add");

        expect(remindersCounter).toHaveLength(1);
    });
});

describe("Test component behaviour when reminders are present or not. ", ()=>{
    it('Expect to find the reminders counter.', () => {

        const Props = { day: "1", reminders: [
            { text: "clean room",
              year: 2019,
              month: 4,
              day: 2,
              hour: 10,
              min: 33 }] };

        const enzyWrapper = mount(<Day {...Props} />);
        const remindersCounter = enzyWrapper.find(".day-component .reminders-counter");

        expect(remindersCounter).toHaveLength(1);
    });

    it('Expect to find the reminders counter.', () => {

        const Props = { day: "1", reminders: null };

        const enzyWrapper = mount(<Day {...Props} />);
        const remindersCounter = enzyWrapper.find(".day-component .reminders-counter");

        expect(remindersCounter).toHaveLength(0);

    });


});
