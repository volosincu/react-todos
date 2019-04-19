import React, { useState, useEffect } from 'react';
import dayStyle from './day.css';

/**
 * @desc Component to render a individual day of calendar
 */
function Day ({day, reminders}) {

    const [data, setData] = useState({reminders: reminders, error: ""});
    const [newReminder, setNewReminder] = useState("");
    const [newReminderDate, setNewReminderDate] = useState(new Date().toISOString().substr(0, 10));
    const [newError, setError] = useState(false);
    const [popup, setPopup] = useState("");

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

    const addReminderHandler = ()=> {
        setData({reminders: data.reminders.concat([{text: newReminder, date: newReminderDate}])});
        setPopup("");

        const date = new Date().toISOString().substr(0, 10);
        setNewReminderDate(date);
        setNewReminder("");
    };

    const openAddReminderHandler = ()=> {
        setPopup("reminder-popup-open");
    };

    const cancelReminderHandler = ()=> {
        setPopup("");
    };


    const getReminderText = (e) => {
        const val = e.target.value;

        if(val.length > 30){
            setError(true);
        }else {
            setError(false);
            setNewReminder(val);
        }
    };

    const getReminderTime = (e) => {
        const val = e.target.value;
        const date = new Date(val).toISOString().substr(0, 10);

        setNewReminderDate(date);
    };

    const remindersCounter = countReminders(data.reminders);
    const notification = createRemindersNotification(remindersCounter);

    return (
            <div className="day-component">
            <input className="reminders-add" type="button" value="+" onClick={openAddReminderHandler}></input>
            {notification}
            <div className="day">{day}</div>
            <div>
            <br/>
            <div className={`reminder-popup ${popup} create-reminder`}>
            <div className="popup-content">
            <input type="text" onChange={getReminderText} step="1"/>
            <input id="today" type="date" step="2" value={newReminderDate} onChange={getReminderTime}/>

            <button onClick={addReminderHandler}>Save</button>
            <button onClick={cancelReminderHandler}>Cancel</button>
            </div>

        </div>
            </div>
        </div>
    );
};

export default Day;
