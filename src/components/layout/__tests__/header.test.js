import React from 'react';
import { Header } from 'components/layout';
import { shallow, mount } from 'enzyme';

describe ("test Header component", ()=> {

    test('Expect to have a valid wrapper after loading.', () => {
        const enzyWrapper = shallow(<Header /> );
        expect(enzyWrapper).toBeTruthy();
    });

    test('Expect to find correct theme labels.', () => {

        const enzyWrapper = shallow(<Header />);
        const themesLabels = enzyWrapper.find('label');

        expect(themesLabels).toHaveLength(2);
    });

    test('Expect to find theme inputs.', () => {

        const enzyWrapper = mount(<Header />);
        const themesInputs = enzyWrapper.find('input');

        console.log(enzyWrapper.debug());

        expect(themesInputs).toHaveLength(2);
    });


});
