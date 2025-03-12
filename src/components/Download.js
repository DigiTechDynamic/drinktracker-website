import React from 'react';
import './Download.css';

const Download = () => {
  return (
    <section id="download" className="download-section section">
      <div className="container">
        <div className="download-container">
          <div className="download-content">
            <h2>Download DrinkSmart Today</h2>
            <p>
              Start your journey to healthier drinking habits with our intuitive and powerful tracking app.
              Available on iOS and Android.
            </p>
            
            <div className="app-features">
              <div className="feature">
                <i className="fas fa-lock"></i>
                <span>Secure & Private</span>
              </div>
              <div className="feature">
                <i className="fas fa-sync"></i>
                <span>Regular Updates</span>
              </div>
              <div className="feature">
                <i className="fas fa-headset"></i>
                <span>24/7 Support</span>
              </div>
            </div>
            
            <div className="store-buttons">
              <a href="#" className="store-button app-store">
                <i className="fab fa-apple"></i>
                <div className="store-text">
                  <span className="small-text">Download on the</span>
                  <span className="big-text">App Store</span>
                </div>
              </a>
              
              <a href="#" className="store-button play-store">
                <i className="fab fa-google-play"></i>
                <div className="store-text">
                  <span className="small-text">GET IT ON</span>
                  <span className="big-text">Google Play</span>
                </div>
              </a>
            </div>
          </div>
          
          <div className="download-image">
            <div className="app-screenshot">
              <div className="screenshot-content">
                <div className="screenshot-header">
                  <div className="header-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                  </div>
                </div>
                <div className="screenshot-body">
                  <div className="app-metrics">
                    <div className="metric">
                      <div className="metric-header"></div>
                      <div className="metric-value"></div>
                    </div>
                    <div className="metric">
                      <div className="metric-header"></div>
                      <div className="metric-value"></div>
                    </div>
                  </div>
                  <div className="app-graph">
                    <div className="graph-header"></div>
                    <div className="graph-content">
                      <div className="graph-bar"></div>
                      <div className="graph-bar"></div>
                      <div className="graph-bar"></div>
                      <div className="graph-bar"></div>
                    </div>
                  </div>
                  <div className="app-list">
                    <div className="list-item"></div>
                    <div className="list-item"></div>
                  </div>
                </div>
                <div className="screenshot-reflection"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="download-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
    </section>
  );
};

export default Download;
