import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import GameCard from './components/GameCard/GameCard';
import TournamentSection from './components/TournamentSection/TournamentSection';
import Leaderboard from './components/Leaderboard/Leaderboard';
import Footer from './components/Footer/Footer';

const App = () => {
  const games = [
    {
      title: 'Cyber Legends',
      genre: 'Multiplayer • Action',
      rating: '4.9',
      image: 'https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg'
    },
    {
      title: 'GOD of WAR',
      genre: 'RPG • Adventure',
      rating: '4.7',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2g4FDBu_CxIOwtqwpUK0DelJO-_mL7IaEg&s'
    },
    {
      title: 'Cyberpunk',
      genre: 'Strategy • MMO',
      rating: '4.8',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAO7vlLgE3BNaIpNahaEaAVNjm0bTRi-VpQ&s'
    },
    {
      title: 'GTA',
      genre: 'Battle Royale',
      rating: '4.6',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYD-Fa3NK8oWJ55eFgOX_TCzRfVMTfDJiqmQ&s'
    }
  ];

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <main className="main-content">
        <section className="games-section">
          <h3>Trending Games</h3>
          <div className="games-grid">
            {games.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
        </section>
        <div className="tournament-leaderboard-grid">
          <TournamentSection />
          <Leaderboard />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;