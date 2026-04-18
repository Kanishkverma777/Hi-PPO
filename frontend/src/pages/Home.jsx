import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">
      <div className="main-container">
        <div style={{ position: 'absolute', top: '30px', right: '40px', zIndex: 10 }}>
          <button className="brutal-btn" onClick={() => navigate('/about')}>About</button>
        </div>
        
        <div className="home-content content-area">
          <div className="home-title-section">
            <h1 className="hero-title title-large">Hi-PPO</h1>
          </div>

          <div className="home-cards stack-cards">
            <div className="home-card btn-blue" onClick={() => navigate('/feed')}>
              <h2>Feed</h2>
              <p>See what's happening →</p>
            </div>
            <div className="home-card btn-orange" onClick={() => navigate('/create-post')}>
              <h2>Create</h2>
              <p>Start a new post →</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
