import React from 'react'
import { useState } from 'react'

import Prev_Calendar from './Prev_Calendar'
import Current_Calendar from './Current_Calendar'
import Next_Calendar from './Next_Calendar'

import rightArrow from '../images/arrow-right-2.svg'
import leftArrow from '../images/arrow-left-2.svg'

const HomePage = () => {
    const [date] = useState(new Date())
    const [month, setMonth] = useState(date.getMonth())
    const [year, setYear] = useState(date.getFullYear())

    function prevMonth() {
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
        } else {
            setMonth(month - 1)
        }        
    }

    function nextMonth() {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        } else {
            setMonth(month + 1)
        }
    }

    return <>   
                <div className='main-container'>
                    <div className='container'>
                        <h1>Тройной календарь</h1>
                        <div className='navigation'>
                            {/* <button onClick={prevMonth}>←</button>
                            <button onClick={nextMonth}>→</button> */}
                            <span className={["icon-arrow"]} onClick={prevMonth}>
                                <img src={leftArrow} alt="Arrow circle icon" width="50" height="50"/>
                            </span>
                            <span className={["icon-arrow"]} onClick={nextMonth}>
                                <img src={rightArrow} alt="Arrow circle icon" width="50" height="50"/>
                            </span>
                        </div>
                        <div className='calendars'>
                            <Prev_Calendar month={month} year={year}/>
                            <Current_Calendar month={month} year={year}/>
                            <Next_Calendar month={month} year={year}/>
                        </div>
                    </div>
                </div>
            </>
}

export default HomePage