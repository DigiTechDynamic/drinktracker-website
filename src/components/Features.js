import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: 'fa-camera-retro',
      title: 'Drink Scanner',
      description: 'Simply take a photo of any drink label and automatically track it with AI-powered recognition.'
    },
    {
      icon: 'fa-chart-line',
      title: 'Personal Analytics',
      description: 'Get detailed insights about your drinking patterns with easy-to-understand visualizations.'
    },
    {
      icon: 'fa-bullseye',
      title: 'Goal Setting',
      description: 'Set customized drinking goals and track your progress with achievement milestones.'
    },
    {
      icon: 'fa-bell',
      title: 'Smart Reminders',
      description: 'Receive gentle notifications to help you stay on track with your drinking goals.'
    },
    {
      icon: 'fa-trophy',
      title: 'Achievement System',
      description: 'Earn badges and celebrate milestones as you build healthier drinking habits.'
    },
    {
      icon: 'fa-lock',
      title: 'Privacy Focused',
      description: 'Your data is encrypted and never shared. Control exactly what you track and share.'
    }
  ];

  return (
    <section id="features" className="features-section section">
      <div className="container">
        <h2 className="section-title">Powerful Features</h2>
        <p className="section-subtitle">
          DrinkSmart combines cutting-edge technology with thoughtful design to help you better understand your relationship with alcohol.
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="features-bg">
        <div className="features-shape-1"></div>
        <div className="features-shape-2"></div>
      </div>
    </section>
  );
};

export default Features;
