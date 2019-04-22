import  React, { Fragment, useState, useContext, useReducer } from 'react';

import { ThemeContext } from 'components/context';
import Header from './header';
import Calendar from 'components/calendar';

import lightTheme from '../../light.css';
import darkTheme from '../../dark.css';
import mainStyle from '../../main.css';

/**
 * @description reducer for theme.
 */
function themeReducer (state, action) {
    switch (action.type) {
    case "update" :
        return Object.assign({}, state, action.value);
    default:
        return state;
    };
};

/**
 * @description <Layout /> component. Provides the structure of page and handle the theme
 */
export default function Layout () {

    const [ state, dispatch ] = useReducer(themeReducer, {theme: "dark"});

    const { theme } = state;

    return (
            <ThemeContext.Provider value={{ theme, dispatch }}>
                <div className={`${theme}`}>
                    <Header />
                    <section>
                        <Calendar />
                    </section>
                    <footer></footer>
                </div>
            </ThemeContext.Provider>
    );
};
