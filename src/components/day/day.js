import React, { useState, useEffect } from 'react';
import dayStyle from './day.css';

/**
 * @desc Component to render a individual day of calendar
 */
function Day ({day, reminders}) {

    const [data, setData] = useState({reminders: reminders, error: ""});

    const createRemindersNotification = (counter)=>{
        const remindersNotificationClass = counter > 0 ? "reminders-counter" : "no-reminders";
        return <div className={remindersNotificationClass}>{counter}</div>;
    };

    const countReminders = (dayReminders)=> {
        let size = 0;
        if(dayReminders != null) {
            size = dayReminders.length;
        };

        return size;
    };


    const remindersCounter = countReminders(data.reminders);
    const notification = createRemindersNotification(remindersCounter);

    return (
            <div className="day-component">
            <input className="reminders-add" type="button" value="+"></input>
            {notification}
            <div className="day">{day}</div>
        </div>
    );
};

export default Day;
