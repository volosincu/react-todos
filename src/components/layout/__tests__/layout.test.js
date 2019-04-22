import React from 'react';
import Layout from 'components/layout';
import { shallow, mount, render } from 'enzyme';

describe ("test Layout component", ()=> {

    test('Expect to have a valid wrapper after loading.', () => {
        const enzyWrapper = shallow(<Layout /> );
        expect(enzyWrapper).toBeTruthy();
    });

    test('Expect to find right structure in layout component.', () => {

        const enzyWrapper = shallow(<Layout />);
        const header = enzyWrapper.find('Header');
        const calendar = enzyWrapper.find('Calendar');
        const footer = enzyWrapper.find('footer');

        expect(header).toHaveLength(1);
        expect(calendar).toHaveLength(1);
        expect(footer).toHaveLength(1);
    });


});
