import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Homepage.css'
import '/images/logo.png'




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
// import { Link } from 'react-router-dom';
// import './Homepage.css';  // Import a CSS file you create for this page

import { Link } from 'react-router-dom';
// import './Homepage.css';  // Adjust path if you store this file in a different folder

// import { Link } from 'react-router-dom';
// import './Homepage.css'; // Adjust if you're placing the CSS file elsewhere

function Homepage() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="homepage-header">
        <div className="logo-container">
          {/* Replace 'monnx-logo.png' with your actual logo filename/path */}
          <img src="/images/logo.png" alt="MONNX Logo" className="logo-img" />
          <h1>MONNX</h1>
          <span className="tagline">Global Fintech</span>
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
            Take control of your finances with our intelligent platform.
            Budget, invest, and save confidently—right at your fingertips.
          </p>
          <Link to="/login" className="cta-button">Explore Dashboard</Link>
        </div>
        <div className="hero-image">
          {/* Replace with your own hero image */}
          <img src="/images/hero-finance.jpg" alt="From Cents to Success, Your Future Funded" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        {/* <h3>What We Offer</h3> */}
        <h3>From Cents to Success, Your Future Funded!</h3>
        <div className="feature-items">
          <div className="feature">
            <h4>Smart Budgeting</h4>
            <p>
              Our advanced budgeting tools help you allocate funds effectively
              and reach your financial goals.
            </p>
          </div>
          <div className="feature">
            <h4>Real-Time Investment Insights</h4>
            <p>
              Track stocks, analyze market trends, and make data-driven decisions.
            </p>
          </div>
          <div className="feature">
            <h4>Automated Savings</h4>
            <p>
              Save effortlessly while investing, ensuring a secure future without the hassle.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="homepage-footer">
        <p>© {new Date().getFullYear()} MONNX Global Fintech. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;



// export default Homepage;






