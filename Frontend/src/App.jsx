import React from 'react'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/student' element={<Dashboard/>}/>
          </Routes>
      </div>
    </Router>
  )
}
