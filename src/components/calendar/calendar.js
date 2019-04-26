import Day from 'components/day';
import React, { useState, useEffect } from 'react';

import style from '../../main.scss';
import calendarStyle from './calendar.scss';

import { LANDING_TITLE, MONTH_NAMES } from '../constants';

/**
 * @desc Parent component to render the days of the month
 */
function Calendar () {

    const _mocks= [
        { text: "clean the room",
          year: 2019, month: 3, day: 2, hour: 10, min: 33 },
        { text: "walk the dog",
          year: 2019, month: 3, day: 2, hour: 10, min: 33 },
        { text: "buy tickets to concert",
          year: 2019, month: 3, day: 5, hour: 10, min: 33 },
        { text: "go for a run",
          year: 2019, month: 3, day: 7, hour: 10, min: 33 },
        { text: "take breakfast",
          year: 2019, month: 3, day: 17, hour: 10, min: 33 },
    ];

    /**
     * @TODO extract to separate module to handle mapping by month too
     * @description map by day the reminders
     */
    const mapByDayReminders = (reminders_mock)=> {
        const reminders = {};
        reminders_mock.forEach((reminder)=>{
            if(reminders[reminder.day] == null){
                reminders[reminder.day] = [reminder];
            } else {
                reminders[reminder.day].push(reminder);
            }
        });
        return reminders;
    };

    /**
     * @TODO move in separate module
     * @description return the current calendar month
     */
    const getCurrentMonth = () => {
        const date = new Date(),
              month = date.getUTCMonth() + 1;
        return month;
    };

    /**
     * @TODO move in separate module
     * @param year
     * @param month = 0 index based
     * @description return total number of days from a given year-month selection
     */
    const getMonthSize = (year, month) => {
        if(year && month == null){
            throw new Error("function can be called without parameters to get current month or with a couple year-month.");
        }

        const date = new Date(),
              m = month | date.getUTCMonth(),
              y = year | date.getUTCFullYear();
        return new Date(y, (m + 1), 0).getDate();
    };

    /**
     * @TODO move in separate module
     * @description return the present day
     */
    const getCurrentDay = () => {
        const date = new Date(),
              day = dateObj.getUTCDate();
        return month;
    };

    const [data, setData] = useState(
        { currentMonth: getCurrentMonth() });

    const monthName = MONTH_NAMES[data.currentMonth],
          monthSize = getMonthSize(),
          reminders = mapByDayReminders(_mocks);

    const createDay = (dayNumber, reminders)=> {
        const dayReminders = reminders[dayNumber] || [],
              props = {
                  key: `day-${dayNumber}`,
                  day: dayNumber,
                  reminders: dayReminders
              };

        return <Day {...props} />;
    };

    const days = [...Array(monthSize).keys()].map((dayNumber)=> {
        const dayComponent = createDay(dayNumber+1, reminders);
        return dayComponent;
    });

    return (
            <div className="calendar-component">
                <h1 className="calendar-current-month">
                <label>Month: </label>
                <span>{monthName}</span></h1>
                <hr />
                <div className="calendar">
                   {days}
                </div>
            </div>
    );
}

export default Calendar;
