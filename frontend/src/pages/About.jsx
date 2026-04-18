import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="app-wrapper">
      <div className="main-container">
        
        {/* Shared Header */}
        <header className="shared-header">
          <button type="button" className="brutal-btn" onClick={() => navigate(-1)}>← Back</button>
          <h1 className="hero-title title-medium">About</h1>
          <div style={{width: '90px'}}></div>
        </header>

        {/* Content Area */}
        <div className="content-area" style={{ gap: '40px' }}>
          <div className="home-card" style={{ maxWidth: '800px', width: '100%', cursor: 'default' }}>
            <h2 className="hero-title" style={{ fontSize: '40px', marginBottom: '20px' }}>Hey, I'm Kanishk!</h2>
            <p style={{ fontSize: '24px', fontWeight: '700', lineHeight: '1.6' }}>
              Welcome to Hi-PPO! This is my very first full-stack project. 
              Built with love using React, Node.js, and a whole lot of Neo-Brutalist energy.
            </p>
          </div>

          <div className="home-card" style={{ maxWidth: '800px', width: '100%', cursor: 'default', backgroundColor: '#ffdcb5' }}>
            <h2 className="hero-title" style={{ fontSize: '40px', marginBottom: '20px' }}>What's the goal?</h2>
            <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '20px', fontWeight: '700' }}>
                <strong>Creative Showcase:</strong> Hi-PPO is designed for creators who want to share their work in a bold, distraction-free environment.
              </p>
              <p style={{ fontSize: '20px', fontWeight: '700' }}>
                <strong>Visual Micro-blogging:</strong> Post your daily snapshots or artistic designs with punchy captions that stand out.
              </p>
              <p style={{ fontSize: '20px', fontWeight: '700' }}>
                <strong>Community Vibe:</strong> Explore a feed of vibrant content and connect with other creative minds in the community.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About