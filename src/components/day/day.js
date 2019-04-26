import React, { useState, useEffect } from 'react';

import dayStyle from './day.scss';
import reminderPopupStyle from './reminder-popup.scss';

/**
 * @TODO move in separate module
 * @description set the day
 */
const createReminderDate = (day) => {
    if(day == null){
        throw new Error("set the day.");
    }

    const date = new Date(),
          m = date.getUTCMonth(),
          y = date.getUTCFullYear();
    return new Date(y, m, day+1).toISOString().substr(0, 10);;
};

/**
 * @desc Component to render a individual day of calendar
 */
function Day ({day, reminders}) {

    const [data, setData] = useState({reminders: reminders, error: ""});
    const [newReminder, setNewReminder] = useState("");
    const [newReminderDate, setNewReminderDate] = useState(createReminderDate(day));
    const [error, setError] = useState("");
    const [popup, setPopup] = useState({create: "", show:""});

    const createRemindersNotification = (counter, handler)=>{
        const remindersNotificationClass = counter > 0 ? "reminders-counter" : "no-reminders";
        return <div className={remindersNotificationClass} onClick={handler}>{counter}</div>;
    };

    /**
     *
     * @description check if reminders are defined and get the length otherwise return 0
     */
    const countReminders = (dayReminders)=> {
        let size = 0;
        if(dayReminders != null) {
            size = dayReminders.length;
        };

        return size;
    };

    /**
     *
     * @description save reminder handler and close popups
     */
    const addReminderHandler = ()=> {
        setData({reminders: data.reminders.concat([{text: newReminder, date: newReminderDate}])});

        const date = new Date().toISOString().substr(0, 10);
        setNewReminderDate(date);
        setNewReminder("");

        setPopup({create: "", show:""});
    };

    /**
     *
     * @description open add reminder popup
     */
    const openAddReminderHandler = ()=> {
        setPopup({create: "reminder-popup-open", show:""});
    };

    /**
     *
     * @description open show reminders of day popup
     */
    const openShowReminderHandler = ()=> {
        setPopup({create: "", show:"reminder-popup-open"});
    };

    /**
     *
     * @description close popups
     */
    const cancelReminderHandler = ()=> {
        setPopup({create: "", show:""});
    };

    /**
     *
     * @description handler for reading the reminder text input by user
     */
    const getReminderText = (e) => {
        const val = e.target.value;

        if(val.length >= 30){
            setError("Error. The limit is 30 characters.");
        }else {
            setError("");
            setNewReminder(val);
        }
    };

    const remindersCounter = countReminders(data.reminders);
    const notification = createRemindersNotification(remindersCounter, openShowReminderHandler);

    const {show, create} = popup,
          dayReminders = data.reminders.map((r, i)=>{
              return <li key={i}>{r.text}</li>;
          });

    return (
            <div className="day-component">
                <div className="day-item day-reminders-item">{notification}</div>
                <div className="day-item day-add-item">
                    <input className="reminders-add" type="button" value="+" onClick={openAddReminderHandler}></input>
                </div>
                <div className="day-item day-number-item">{day}</div>

                <div>
                    <div className={`reminder-popup ${create} create-reminder`}>
                        <div className="popup-content">
                            <input type="text" onChange={getReminderText} step="1"/>
                            <div>{error}</div>
                            <input id="today" disabled="disabled" type="date" step="2" value={newReminderDate} />

                            <button onClick={addReminderHandler}>Save</button>
                            <button onClick={cancelReminderHandler}>Cancel</button>
                        </div>
                   </div>

                   <div className={`reminder-popup ${show} show-reminders`}>
                       <div className="popup-content">
                           <button onClick={cancelReminderHandler}>Close</button>
                           <ul>
                               {dayReminders}
                           </ul>
                       </div>
                    </div>
                </div>
            </div>
    );
};

export default Day;
