import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Download & Install',
      description: 'Get DrinkSmart from the App Store or Google Play and set up your personal profile with your health goals.',
      icon: 'fa-download'
    },
    {
      number: '02',
      title: 'Track Your Drinks',
      description: 'Use our AI-powered scanner to quickly log drinks by taking a photo of labels, or enter details manually.',
      icon: 'fa-camera'
    },
    {
      number: '03',
      title: 'Get Insights',
      description: 'View personalized analytics about your consumption patterns, health impact, and progress toward goals.',
      icon: 'fa-chart-simple'
    },
    {
      number: '04',
      title: 'Improve Over Time',
      description: 'Set achievable goals, receive tailored recommendations, and track your progress as you build healthier habits.',
      icon: 'fa-arrow-trend-up'
    }
  ];

  return (
    <section id="how-it-works" className="how-it-works-section section">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          Getting started with DrinkSmart is easy. Just follow these simple steps to begin tracking your drinks and improving your habits.
        </p>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                <i className={`fas ${step.icon}`}></i>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="hiw-cta">
          <h3>Ready to get started?</h3>
          <p>Join thousands of users who have already improved their relationship with alcohol.</p>
          <a href="#download" className="btn btn-primary">Download Now</a>
        </div>
      </div>
      
      <div className="connection-lines">
        <svg width="100%" height="100%" viewBox="0 0 1200 200" preserveAspectRatio="none" className="connection-svg">
          <path className="connection-path" d="M 150,100 H 400 C 450,100 450,150 500,150 H 700 C 750,150 750,100 800,100 H 1050" />
        </svg>
      </div>
    </section>
  );
};

export default HowItWorks;