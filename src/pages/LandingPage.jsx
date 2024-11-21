// App.js
import React from 'react';
import { 
  Users, 
  Shield, 
  Smartphone,
  ArrowRight,
  Download
} from 'lucide-react';
import '../styles/styles.css';         

const LandingPage = () => {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo-container">
            {/* Logo SVG */}
            <svg className="logo" viewBox="0 0 100 100">
              <path 
                d="M20 50 Q30 30 50 30 L80 30 Q90 30 90 40 L90 60 Q90 70 80 70 L50 70 Q30 70 20 50Z" 
                fill="url(#logoGradient)"
              />
              <circle cx="40" cy="50" r="3" fill="white"/>
              <circle cx="50" cy="50" r="3" fill="white"/>
              <circle cx="60" cy="50" r="3" fill="white"/>
              <path d="M25 35 L15 25" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round"/>
              <path d="M85 35 L95 25" stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round"/>
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6B46C1"/>
                  <stop offset="100%" stopColor="#F6AD55"/>
                </linearGradient>
              </defs>
            </svg>
            <div className="brand-text">
              <span className="brand-name">Wolk</span>
              <span className="brand-tagline">Together, We Wolk</span>
            </div>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#download">Download</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="btn btn-gradient">Sign In</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Together, We Wolk</h1>
        <p>Experience a new way of staying connected. Wolk brings your conversations to life with real-time messaging, voice calls, and more.</p>
        <div className="button-group">
          <button className="btn btn-gradient">
            Download Now
            <Download className="icon" />
          </button>
          <button className="btn btn-outline">
            Learn More
            <ArrowRight className="icon" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Why Choose Wolk?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon gradient-bg">
              <svg className="icon" viewBox="0 0 100 100">
                <path 
                  d="M20 50 Q30 30 50 30 L80 30 Q90 30 90 40 L90 60 Q90 70 80 70 L50 70 Q30 70 20 50Z" 
                  fill="white"
                  opacity="0.9"
                />
              </svg>
            </div>
            <h3>Instant Messaging</h3>
            <p>Send messages, photos, and files instantly to anyone, anywhere.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon gradient-bg">
              <Users className="icon" />
            </div>
            <h3>Group Chats</h3>
            <p>Create groups for family, friends, or work and stay connected together.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon gradient-bg">
              <Shield className="icon" />
            </div>
            <h3>Secure & Private</h3>
            <p>End-to-end encryption ensures your conversations stay private.</p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="download" id="download">
        <h2>Get Started with Wolk</h2>
        <p>Download now and join millions of users worldwide</p>
        <div className="button-group">
          <button className="btn btn-white">
            <Smartphone className="icon" />
            Download for iOS
          </button>
          <button className="btn btn-white">
            <Smartphone className="icon" />
            Download for Android
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo-container">
                <svg className="logo" viewBox="0 0 100 100">
                  <path 
                    d="M20 50 Q30 30 50 30 L80 30 Q90 30 90 40 L90 60 Q90 70 80 70 L50 70 Q30 70 20 50Z" 
                    fill="url(#logoGradient2)"
                  />
                  <defs>
                    <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6B46C1"/>
                      <stop offset="100%" stopColor="#F6AD55"/>
                    </linearGradient>
                  </defs>
                </svg>
                <span>Wolk</span>
              </div>
              <p>Together, We Wolk. Experience messaging like never before.</p>
            </div>
            <div className="footer-links">
              <h3>Product</h3>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#download">Download</a></li>
                <li><a href="#security">Security</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legal</h3>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Wolk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;