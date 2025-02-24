import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import Homepage from './pages/landing-page_home'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Register from './pages/register'
import Bank_signIn from './pages/bank_singin'


function App() {
  return (
    <BrowserRouter>
      <div>
                {/* Navigation Links */}

        <Routes>
          {/* Home Page (Landing page) */}
          <Route path='/' element={<Homepage />} />

        {/* Dashboard Page */}
          <Route path='/dashboard' element={<Dashboard />} />

        {/* Login Page */}
          <Route path='/login' element={<Login />} />

        {/* Sign Page */}
          <Route path='/register' element={<Register />} />

          <Route path='/user_ach_signin' element={<Bank_signIn />} />

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