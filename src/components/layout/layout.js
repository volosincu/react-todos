import  React, { Fragment ,useState } from 'react';

import Header from './header';
import Calendar from 'components/calendar';

import lightTheme from '../../light.css';
import darkTheme from '../../dark.css';
import mainStyle from '../../main.css';


export default function Layout () {

    return (
            <Fragment>
                <Header />
                <section>
                    <Calendar />
                </section>
                <footer></footer>
            </Fragment>
    );
}
