import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Your Smarter <span className="text-gradient">Drink Tracking</span> Companion
          </h1>
          <p className="hero-subtitle">
            Gain insights into your drinking habits, set healthy goals,
            and make more informed choices with DrinkSmart's intelligent tracking.
          </p>
          <div className="hero-buttons">
            <a href="#download" className="btn btn-primary">Download Now</a>
            <a href="#how-it-works" className="btn btn-secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Users</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8</span>
              <span className="stat-label">App Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30M+</span>
              <span className="stat-label">Drinks Tracked</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-screen">
                <div className="screen-content">
                  <div className="app-header">
                    <div className="app-logo"></div>
                    <div className="app-nav"></div>
                  </div>
                  <div className="app-stats">
                    <div className="stat-block"></div>
                    <div className="stat-block"></div>
                  </div>
                  <div className="app-chart">
                    <div className="chart-bars">
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                      <div className="chart-bar"></div>
                    </div>
                  </div>
                  <div className="app-list">
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-frame"></div>
          </div>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;
