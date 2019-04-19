import React, { useState } from 'react';
import dayStyle from './day.css';

/**
 * @desc Component to render a individual day of calendar
 */
function Day ({day, reminders}) {

    const [data, setData] = useState({ error: ""});

    return (
            <div className="day-component">
            <div className="day">{day}</div>
        </div>
    );
};

export default Day;
