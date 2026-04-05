import React from 'react'
import { useState } from 'react'

import Prev_Calendar from '../prevCalendar/Prev_Calendar'
import Current_Calendar from '../currentCalendar/Current_Calendar'
import Next_Calendar from '../nextCalendar/Next_Calendar'

import styles from "../../styles/HomePage.module.css"; 

import rightArrow from '../../images/arrow-right-2.svg'
import leftArrow from '../../images/arrow-left-2.svg'

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
                <div className={styles['main-container']}>
                    <div className={styles.container}>
                        <h1>Тройной календарь</h1>
                        <div className={styles.navigation}>
                            <span className={styles["icon-arrow"]} onClick={prevMonth}>
                                <img src={leftArrow} alt="Arrow circle icon" width="50" height="50"/>
                            </span>
                            <span className={styles["icon-arrow"]} onClick={nextMonth}>
                                <img src={rightArrow} alt="Arrow circle icon" width="50" height="50"/>
                            </span>
                        </div>
                        <div className={styles.calendars}>
                            <Prev_Calendar month={month} year={year}/>
                            <Current_Calendar month={month} year={year}/>
                            <Next_Calendar month={month} year={year}/>
                        </div>
                    </div>
                </div>
            </>
}

export default HomePage