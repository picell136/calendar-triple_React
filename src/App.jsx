import React from 'react';
import { Routes, Route } from 'react-router'

import HomePage from './components/homePage/HomePage'
import Prev_Calendar from './components/prevCalendar/Prev_Calendar'
import Current_Calendar from './components/currentCalendar/Current_Calendar'
import Next_Calendar from './components/nextCalendar/Next_Calendar'
import NotFound404 from './components/notFound404/NotFound404'

import { createBrowserRouter } from 'react-router-dom'

//

const router = createBrowserRouter([
	{ path: '/', 
	  element: <HomePage />, 
	  errorElement: <NotFound404 />,
	  children: [
			{
				element: <Prev_Calendar />,
			},
			{
				element: <Current_Calendar />,
			},
			{
				element: <Next_Calendar />,
			},
			{
				path: '/*',
				element: <NotFound404 />,
			},
		], 
	},
])

//

export default function App() {

  return (
    <Routes router={router}>
      <Route path="/" element={<HomePage />} />
	  <Route element={<Prev_Calendar />} />
	  <Route element={<Current_Calendar />} />
	  <Route element={<Next_Calendar />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  )
}