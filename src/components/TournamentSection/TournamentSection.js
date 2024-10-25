import React from 'react';
import './TournamentSection.css';

const TournamentSection = () => {
  return (
    <div className="tournament-section">
      <h3>Live Tournaments</h3>
      <div className="tournament-list">
        <div className="tournament-card">
          <div>
            <h4>Cyber Legends Championship</h4>
            <p>Prize Pool: $10,000</p>
          </div>
          <button>Join Now</button>
        </div>
        <div className="tournament-card">
          <div>
            <h4>Space Warriors League</h4>
            <p>Prize Pool: $5,000</p>
          </div>
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default TournamentSection;