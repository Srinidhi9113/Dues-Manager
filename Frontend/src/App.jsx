import React from 'react'
import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LibDashboard from './pages/LibAdmin/LibDashboard'
import LabDashboard from './pages/LabAdmin/LabDashboard'
import HostelDashboard from './pages/HostelAdmin/HostelDashboard'
import MessDashboard from './pages/MessAdmin/MessDashboard'
import CourseDashboard from './pages/CourseAdmin/CourseDashboard'


export default function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path='/' element={<Login/>} ></Route>
            <Route path='/student' element={<Dashboard/>}/>
            <Route path='/libadmin' element={<LibDashboard/>}/>
            <Route path='/labadmin' element={<LabDashboard/>}/>
            <Route path='/hosteladmin' element={<HostelDashboard/>}/>
            <Route path='/messadmin' element={<MessDashboard/>}/>
            <Route path='/courseadmin' element={<CourseDashboard/>}/>
          </Routes>
      </div>
    </Router>
  )
}
