import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
        <img src="https://images.ladbible.com/resize?type=webp&quality=70&width=1920&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltbc1876152fcd9f07/blt30e345e2b05015a0/66100af1d4ee6cd3d7d74449/Cyber.png" 
     alt="Featured Game" />
      <div className="hero-overlay">
        
        <div className="hero-content">
            
          <span className="new-release">NEW RELEASE</span>
          <h2>Epic Adventure Awaits</h2>
          <p>Embark on an incredible journey through mystical realms and face legendary challenges in this groundbreaking new release.</p>
          <div className="hero-buttons">
            <button className="primary-btn">Play Now</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;