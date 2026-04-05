import React from 'react'

import styles from "../../styles/nextCalendar.module.css"

const Prev_Calendar = ({ year, month }) => {

  let prevMonth;

  if(month === 0) {
    prevMonth = 11
    year = year - 1
  } else {
    prevMonth = month - 1
  }

  // Нахождение последнего дня месяца
  function getLastDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let res = date.getDate();
    return res;
  }

  // Кол-во дней в месяце
  function range(count) {
    let arr = [];
    for (let i = 1; i <= count; i++) {
      arr.push(i);
    }
    return arr;
  }

  // Массив от 1го до последнего числа месяца
  let arr = range(getLastDay(year, prevMonth)); 

  // Получаем первый день недели месяца
  function getFirstWeekDay(year, month) {
    let date = new Date(year, month, 1);
    let res = date.getDay();

    if (res == 0) {
      return 6;
    } else {
      return res - 1;
    }	
  }

  // Получаем последний день недели месяца
  function getLastWeekDay(year, month) {
    let date = new Date(year, month + 1, 0);
    let res = date.getDay();

    if (res == 0) {
			return 6;
		} else {
			return res - 1;
		}
  }

	let firstWeekDay = getFirstWeekDay(year, prevMonth);
	let lastWeekDay  = getLastWeekDay(year, prevMonth);

  // Слева мы должны добавить firstWeekDay пустых элементов, а справа - 6 минус lastWeekDay элементов.
  function funcNormalize(arr, left, rigth){
    let newArr = arr;
    for (let i = 0; i < left; i++) {
      newArr.unshift('');
    }
    for (let i = 0; i < rigth; i++) {
      newArr.push('');
    }
    return newArr;
	}
  let normalize = funcNormalize(arr, firstWeekDay, 6 - lastWeekDay);

  // Разбиение массива на двухмерный в календаре 
  function chunk(arr, n) { // n - количество элементов в подмассиве
    let newArr = [];
    let chunkArr = [];
    let num = arr.length / n; // выяснем кол-во недель в месяце
    
    for (let i = 0; i < num ; i++) {
      chunkArr = arr.splice(0, n);  // из массива arr каждый раз вычленяется по n элементов и добавляются в массив chunkArr
      newArr.push(chunkArr);
    }
    return newArr;
  }
  let nums = chunk(normalize, 7); // Делаем так, чтобы в подмассивев было по 7 элементов

  // Создаем таблицу
  function createTable(arr) {
    let rows = []
    for (let i = 0; i < arr.length; i++) {
      let cells = []
      for (let k = 0; k < arr[i].length; k++) {
        cells.push(<td>{arr[i][k]}</td>)
      }
      rows.push(<tr>{cells}</tr>)
    }
    return rows
  }

  let result = createTable(nums) // Выводим содержимое таблицы в переменную

  function getMonthNames (monthNumber) {
        let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 
                    'Май', 'Июнь', 'Июль', 'Август', 
                    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

        return arr[monthNumber];			
  }

  return <div>
            <div className={styles.calendar}>
              <div className={styles.text}>{year} {getMonthNames(prevMonth)}</div>
              <table className={styles["border-none"]}>
                <thead>
                  <tr>
                    <th>пн</th>
                    <th>вт</th>
                    <th>ср</th>
                    <th>чт</th>
                    <th>пт</th>
                    <th>сб</th>
                    <th>вс</th>
                  </tr>
                </thead>
                <tbody>{result}</tbody>
              </table>
            </div>
        </div>
}

export default Prev_Calendar