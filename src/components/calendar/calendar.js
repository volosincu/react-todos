import Day from 'components/day';
import React, { useState, useEffect } from 'react';

import style from '../../main.css';
import calendarStyle from './calendar.css';

import { LANDING_TITLE, MONTH_NAMES } from '../constants';

/**
 * @desc Parent component to render the days of the month
 */
function Calendar () {

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
          monthSize = getMonthSize();


    const days = [...Array(monthSize).keys()].map((dayNumber)=> {
        return <Day key={`day-${dayNumber}`} day={dayNumber}/>;
    });


    return (
            <div className="calendar-component">
            <div className="calendar">
            <h3 className="calendar-current-month">{monthName}</h3>
            {days}
            </div>
            </div>
    );
}

export default Calendar;
