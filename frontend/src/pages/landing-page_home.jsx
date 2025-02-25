import {useState, useEffect} from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Homepage.css'
import '/images/logo.png'
import { Link } from 'react-router-dom'




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

// import { Link } from 'react-router-dom';
// import './Homepage.css';  // Adjust path if you store this file in a different folder
///////////////////////////////////////////////
// import { Link } from 'react-router-dom';
// import './Homepage.css'; // Adjust if you're placing the CSS file elsewhere

// function Homepage() {
//   return (
//     <div className="homepage">
//       {/* Header */}
//       <header className="homepage-header">
//         <div className="logo-container">
//           {/* Replace 'monnx-logo.png' with your actual logo filename/path */}
//           <img src="/images/logo.png" alt="MONNX Logo" className="logo-img" />
//           <h1>MONNX</h1>
//           <span className="tagline">Global Fintech</span>
//         </div>
//         <nav className="nav-links">
//           <Link to="/register" className="nav-link">Sign Up</Link>
//           <Link to="/login" className="nav-link">Login</Link>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-content">
//           <h2>Empower Your Financial Future</h2>
//           <p>
//             Take control of your finances with our intelligent platform.
//             Budget, invest, and save confidently—right at your fingertips.
//           </p>
//           <Link to="/login" className="cta-button">Explore Dashboard</Link>
//         </div>
//         <div className="hero-image">
//           {/* Replace with your own hero image */}
//           <img src="/images/hero-finance.jpg" alt="From Cents to Success, Your Future Funded" />
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="features">
//         {/* <h3>What We Offer</h3> */}
//         <h3>From Cents to Success, Your Future Funded!</h3>
//         <div className="feature-items">
//           <div className="feature">
//             <h4>Smart Budgeting</h4>
//             <p>
//               Our advanced budgeting tools help you allocate funds effectively
//               and reach your financial goals.
//             </p>
//           </div>
//           <div className="feature">
//             <h4>Real-Time Investment Insights</h4>
//             <p>
//               Track stocks, analyze market trends, and make data-driven decisions.
//             </p>
//           </div>
//           <div className="feature">
//             <h4>Automated Savings</h4>
//             <p>
//               Save effortlessly while investing, ensuring a secure future without the hassle.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="homepage-footer">
//         <p>© {new Date().getFullYear()} MONNX Global Fintech. All Rights Reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default Homepage;
////////////////////////////////////////


// export default Homepage;


import React from 'react'
//import { Link } from 'react-router-dom'
//import './homepage.css' // Make sure the path matches where you place homepage.css

function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="homepage">
      <header className="hp-header">
        <div>
          <div className="hp-logo">
            <img src="/images/logo.png" alt="MONNX Logo" className="hp-logo-img" />
            <div className="hp-brand-container">
              <h1 className="hp-brand">MonnX</h1>
              <span className="hp-tagline">Enterprise AI Finance</span>
            </div>
          </div>
          
          <nav className="hp-nav">
            <div className="hp-nav-group">
              <div className="hp-nav-dropdown">
                <span>Solutions</span>
                <div className="hp-dropdown-content">
                  <Link to="/personal">Personal Finance</Link>
                  <Link to="/business">Business</Link>
                  <Link to="/enterprise">Enterprise</Link>
                </div>
              </div>
              
              <div className="hp-nav-dropdown">
                <span>Products</span>
                <div className="hp-dropdown-content">
                  <Link to="/wealth">Wealth Management</Link>
                  <Link to="/insights">AI Insights</Link>
                  <Link to="/planning">Financial Planning</Link>
                </div>
              </div>
              
              <Link to="/pricing" className="hp-nav-link">Pricing</Link>
              <Link to="/about" className="hp-nav-link">About</Link>
            </div>

            <div className="hp-nav-auth">
              <Link to="/login" className="hp-nav-link">Sign In</Link>
              <Link to="/register" className="hp-btn hp-btn-primary">Get Started</Link>
            </div>
          </nav>

          <button 
            className="hp-mobile-menu" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`hp-mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="hp-mobile-nav-content">
          <Link to="/personal">Personal Finance</Link>
          <Link to="/business">Business</Link>
          <Link to="/enterprise">Enterprise</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/about">About</Link>
          <div className="hp-mobile-nav-auth">
            <Link to="/login" className="hp-btn hp-btn-outline">Sign In</Link>
            <Link to="/register" className="hp-btn hp-btn-primary">Get Started</Link>
          </div>
        </div>
      </div>

      <section className={`hp-hero ${isVisible ? 'visible' : ''}`}>
        <div className="hp-hero-content">
          <div className="hp-badge">
            <span>🏆 Featured in Forbes, Bloomberg, and WSJ</span>
          </div>
          <h2 className="hp-hero-title">
            Enterprise-Grade<br/>
            <span className="hp-gradient-text">AI-Powered Wealth</span><br/>
            Management
          </h2>
          <p className="hp-hero-subtitle">
            Join the financial revolution powered by quantum AI and machine learning. 
            Used by leading hedge funds and over 100,000+ high-net-worth individuals.
          </p>
          <div className="hp-hero-buttons">
            <Link to="/register" className="hp-btn hp-btn-gradient">Start Free Trial</Link>
            <a href="#demo" className="hp-btn hp-btn-outline">Watch Demo</a>
          </div>
          <div className="hp-metrics">
            <div className="hp-metric">
              <span className="hp-metric-number">$14B+</span>
              <span className="hp-metric-label">Assets Analyzed</span>
            </div>
            <div className="hp-metric">
              <span className="hp-metric-number">99.99%</span>
              <span className="hp-metric-label">Uptime SLA</span>
            </div>
            <div className="hp-metric">
              <span className="hp-metric-number">128bit</span>
              <span className="hp-metric-label">Enterprise Security</span>
            </div>
          </div>
        </div>
        <div className="hp-hero-visual">
          <div className="hp-floating-cards">
            <div className="hp-card hp-card-1">
              <img src="/images/dashboard-preview.png" alt="AI Dashboard" />
            </div>
            <div className="hp-card hp-card-2">
              <img src="/images/insights-preview.png" alt="Financial Insights" />
            </div>
          </div>
        </div>
      </section>

      <section className="hp-investors">
        <h3>Backed by World-Class Investors</h3>
        <div className="hp-investor-grid">
          <img src="/images/investors/sequoia.svg" alt="Sequoia Capital" />
          <img src="/images/investors/andreessen.svg" alt="Andreessen Horowitz" />
          <img src="/images/investors/blackrock.svg" alt="BlackRock" />
          <img src="/images/investors/tiger-global.svg" alt="Tiger Global" />
        </div>
      </section>

      <section className="hp-features">
        <h3 className="hp-features-tagline">From Cents to Success, Your Future Funded!</h3>
        <div className="hp-features-grid">
          <div className="hp-feature">
            <h3 className="hp-feature-title">Quantum AI Analysis</h3>
            <p>Military-grade algorithms process millions of market data points in milliseconds</p>
          </div>
          
          <div className="hp-feature">
            <h3 className="hp-feature-title">Predictive Analytics</h3>
            <p>Advanced forecasting models with 94% accuracy in market predictions</p>
          </div>
          
          <div className="hp-feature">
            <h3 className="hp-feature-title">Risk Management</h3>
            <p>Enterprise-grade security and risk assessment protocols</p>
          </div>
        </div>
      </section>

      <section className="hp-market-stats">
        <h2>Leading the FinTech Revolution</h2>
        <div className="hp-stats-grid">
          <div className="hp-stat-card">
            <span className="hp-stat-number">$250M+</span>
            <span className="hp-stat-label">Venture Capital Raised</span>
          </div>
          <div className="hp-stat-card">
            <span className="hp-stat-number">2.5M+</span>
            <span className="hp-stat-label">Active Users</span>
          </div>
          <div className="hp-stat-card">
            <span className="hp-stat-number">94%</span>
            <span className="hp-stat-label">AI Prediction Accuracy</span>
          </div>
        </div>
      </section>

      <section className="hp-ai-features">
        <h2>AI-Powered Financial Intelligence</h2>
        <div className="hp-ai-grid">
          <div className="hp-ai-feature">
            <h3>Smart Budget Optimization</h3>
            <p>ML algorithms analyze spending patterns to automatically suggest optimal budget allocations and savings opportunities.</p>
          </div>
          <div className="hp-ai-feature">
            <h3>Predictive Investment Insights</h3>
            <p>Real-time market analysis and personalized investment recommendations based on your risk profile and goals.</p>
          </div>
          <div className="hp-ai-feature">
            <h3>Transaction Pattern Analysis</h3>
            <p>Advanced fraud detection and spending insights powered by neural networks.</p>
          </div>
          <div className="hp-ai-feature">
            <h3>Financial Literacy Coach</h3>
            <p>Personalized learning paths and actionable insights to improve your financial knowledge.</p>
          </div>
        </div>
      </section>

      <section className="hp-social-proof">
        <h2>Trusted by Industry Leaders</h2>
        <div className="hp-testimonials">
          <div className="hp-testimonial">
            <p>"MONNX is revolutionizing personal finance with their AI-driven approach."</p>
            <cite>- Forbes</cite>
          </div>
          <div className="hp-testimonial">
            <p>"The future of wealth management is here."</p>
            <cite>- Y Combinator</cite>
          </div>
        </div>
        <div className="hp-partners">
          <img src="/images/partners/yc.svg" alt="Y Combinator" />
          <img src="/images/partners/fortune500.svg" alt="Fortune 500" />
          <img src="/images/partners/techstars.svg" alt="Techstars" />
        </div>
      </section>

      <footer className="hp-footer">
        <div className="hp-footer-grid">
          <div className="hp-footer-brand">
            <h3>MONNX</h3>
            <p>Enterprise-grade financial intelligence powered by advanced AI technology.</p>
            <div className="hp-stats">
              <div className="hp-stat">
                <span className="hp-stat-number">$14B+</span>
                <span className="hp-stat-label">Assets Analyzed</span>
              </div>
              <div className="hp-stat">
                <span className="hp-stat-number">99.99%</span>
                <span className="hp-stat-label">Uptime</span>
              </div>
            </div>
          </div>

          <div className="hp-footer-links">
            <div className="hp-footer-section">
              <h4>Platform</h4>
              <Link to="/wealth">Wealth Management</Link>
              <Link to="/business">Business Solutions</Link>
              <Link to="/enterprise">Enterprise</Link>
            </div>

            <div className="hp-footer-section">
              <h4>Company</h4>
              <Link to="/about">About</Link>
              <Link to="/careers">Careers</Link>
              <Link to="/press">Press</Link>
            </div>

            <div className="hp-footer-section">
              <h4>Resources</h4>
              <Link to="/blog">Blog</Link>
              <Link to="/docs">Documentation</Link>
              <Link to="/help">Support</Link>
            </div>
          </div>
        </div>

        <div className="hp-footer-bottom">
          <div className="hp-legal">
            <span>© {new Date().getFullYear()} MONNX AI Technologies, Inc.</span>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
            <Link to="/security">Security</Link>
          </div>
          <div className="hp-certifications">
            <span>SOC2 Type II Certified</span>
            <span>•</span>
            <span>ISO 27001</span>
            <span>•</span>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Homepage




