import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import Homepage from './pages/landing-page_home'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'


function App() {
  return (
    <BrowserRouter>
      <div>
                {/* Navigation Links */}
        <nav>
          {/* <Link to="/">Home</Link> |  */}
          {/* <Link to="/dashboard">Dashboard</Link> */}
        </nav>


        <Routes>
          {/* Home Page (Landing page) */}
          <Route path='/' element={<Homepage />} />

        {/* Dashboard Page */}
          <Route path='/dashboard' element={<Dashboard />} />

        {/* Login Page */}
          <Route path='/login' element={<Login />} />

        {/* Sign Page */}
          <Route path='/register' element={<Register />} />

          <Route />

          <Route />

          <Route />

          <Route />

          <Route />

          <Route />

        </Routes>
      </div>
    </BrowserRouter>
  )
}


export default App