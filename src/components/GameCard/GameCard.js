import React from 'react';
import './GameCard.css';

const GameCard = ({ title, genre, rating, image }) => {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <div className="game-overlay">
        <h4>{title}</h4>
        <p>{genre}</p>
        <div className="game-card-footer">
          <span className="rating">{rating} ★</span>
          <button className="play-btn">Play Now</button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;