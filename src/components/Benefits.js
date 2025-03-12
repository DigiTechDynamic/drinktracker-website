import React from 'react';
import './Benefits.css';

const Benefits = () => {
  return (
    <section id="benefits" className="benefits-section section">
      <div className="container">
        <h2 className="section-title">Why Choose DrinkSmart?</h2>
        <p className="section-subtitle">
          Our app helps you build a healthier relationship with alcohol through 
          awareness, insights, and positive reinforcement.
        </p>

        <div className="benefits-container">
          <div className="benefits-image">
            <div className="dashboard-mockup">
              <div className="mockup-header">
                <div className="mock-dot"></div>
                <div className="mock-dot"></div>
                <div className="mock-dot"></div>
              </div>
              <div className="dashboard-content">
                <div className="dash-sidebar">
                  <div className="sidebar-item active"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                  <div className="sidebar-item"></div>
                </div>
                <div className="dash-main">
                  <div className="dash-header">
                    <div className="dash-title"></div>
                    <div className="dash-menu"></div>
                  </div>
                  <div className="dash-metrics">
                    <div className="metric-card">
                      <div className="metric-icon"></div>
                      <div className="metric-data"></div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-icon"></div>
                      <div className="metric-data"></div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-icon"></div>
                      <div className="metric-data"></div>
                    </div>
                  </div>
                  <div className="dash-chart">
                    <div className="chart-header"></div>
                    <div className="chart-body">
                      <div className="chart-line"></div>
                      <div className="chart-bars">
                        <div className="chart-bar"></div>
                        <div className="chart-bar"></div>
                        <div className="chart-bar"></div>
                        <div className="chart-bar"></div>
                        <div className="chart-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="benefits-content">
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-brain"></i>
                </div>
                <div className="benefit-text">
                  <h3>Better Self-Awareness</h3>
                  <p>Understand your drinking patterns and recognize triggers that lead to excessive consumption.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <div className="benefit-text">
                  <h3>Improved Health</h3>
                  <p>Track and reduce alcohol intake to experience better sleep, increased energy, and improved overall health.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <div className="benefit-text">
                  <h3>Data-Driven Insights</h3>
                  <p>Get personalized recommendations based on your unique drinking habits and health goals.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="fas fa-wallet"></i>
                </div>
                <div className="benefit-text">
                  <h3>Save Money</h3>
                  <p>Reduce your alcohol spending with clear visualizations of how much you're spending on drinks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;