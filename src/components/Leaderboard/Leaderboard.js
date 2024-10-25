import React from 'react';
// import './Leaderboard.css';

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h3>Top Players</h3>
      <div className="player-list">
        {[
          { rank: 1, name: 'ProGamer123', score: 2850 },
          { rank: 2, name: 'EpicWarrior', score: 2720 },
          { rank: 3, name: 'LegendSlayer', score: 2695 }
        ].map(player => (
          <div key={player.rank} className="player-item">
            <div className="player-info">
              <span className="rank">#{player.rank}</span>
              <span className="name">{player.name}</span>
            </div>
            <span className="score">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;