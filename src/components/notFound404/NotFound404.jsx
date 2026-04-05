import React from 'react'
import { Link } from 'react-router'

import img from '../images/404.png'

const NotFound = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <img src={img} alt='дед пожимает плечами' width='400px'/>
        <div className='content'>
          <h2>Такой страницы нет</h2>
          <div className='buttonToMain'>
              <Link to="/">
                  <button>На главную</button>
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound