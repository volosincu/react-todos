
import React, { useState } from 'react';

import headerStyle from './header.css';

/**
 * @description <Header /> component
 */
export default function Header () {

    const [theme, setTheme] = useState('dark');

    const changeTheme = (e) => {
        const selectedTheme = e.target.value;

        console.log(selectedTheme);
        setTheme(selectedTheme);
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
