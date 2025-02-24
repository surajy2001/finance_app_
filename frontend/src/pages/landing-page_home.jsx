import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Homepage.css'




// function Homepage() {

//     return (
//         <>
//         <div>
//             <nav>
//                 <Link to='/register'>Register/Signup</Link>
//                 <br></br>
//                 <Link to='/login'>Login</Link>
//             </nav>
//             <span>Dashboard</span>

//         </div>

//         </>
//     )
// }

// export default Homepage

// src/pages/landing-page_home.jsx
import { Link } from 'react-router-dom';
// import './Homepage.css';  // Import a CSS file you create for this page

function Homepage() {
  return (
    <div className="homepage">
      {/* Header with logo and navigation */}
      <header className="homepage-header">
        <div className="logo">
          {/* <h1>IntelliSave</h1> */}
          <h1>MONNX</h1>
        </div>
        <nav className="nav-links">
          <Link to="/register" className="nav-link">Sign Up</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Empower Your Financial Future</h2>
          <p>
            Experience a modern, intelligent financial platform that brings clarity, control, and confidence to your budgeting, investing, and asset management.
          </p>
          <Link to="/dashboard" className="cta-button">Explore Dashboard</Link>
        </div>
        <div className="hero-image">
          {/* Replace with your own hero image */}
          <img src="/images/hero-finance.jpg" alt="Empowering Financial Future" />
        </div>
      </section>

      {/* Features Section (Optional) */}
      <section className="features">
        <h3>What We Offer</h3>
        <div className="feature-items">
          <div className="feature">
            <h4>Smart Budgeting</h4>
            <p>Plan and track your spending effortlessly with our innovative budgeting tools.</p>
          </div>
          <div className="feature">
            <h4>Investment Analysis</h4>
            <p>Get reliable, real-time insights into the stock market to make informed decisions.</p>
          </div>
          <div className="feature">
            <h4>Automated Savings</h4>
            <p>Save intelligently while you invest, ensuring a secure future without the hassle.</p>
          </div>
        </div>
      </section>

      {/* Footer (Optional) */}
      <footer className="homepage-footer">
        <p>© {new Date().getFullYear()} IntelliSave. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
