
import React, { useState, useContext } from 'react';

import ThemeContext from '../context/themeContext';

import headerStyle from './header.css';

/**
 * @description <Header /> component
 */
export default function Header () {

    const { dispatch } = useContext(ThemeContext);

    const changeTheme = (e) => {
        const selectedTheme = e.target.value;

        dispatch({ type: "update",
                   value: { theme: selectedTheme }});
    };

    return <header>
               <div className="header-actions">
                   <label>Dark</label>
                   <input className="header-actions__theme" type="radio" value="dark" name="theme" onChange={changeTheme} />
                   <label>Light</label>
                   <input className="header-actions__theme" type="radio" value="light" name="theme" onChange={changeTheme} />
               </div>
          </header>;
}
