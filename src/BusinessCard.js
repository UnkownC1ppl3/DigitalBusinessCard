import React, { useState } from 'react';
import './BusinessCard.css';

const BusinessCard = () => {
  const [hover, setHover] = useState(false);
  const [socialHover, setSocialHover] = useState(false);

  return (
    <div 
      className="hover-container" 
      onMouseMove={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
    >
      <div className={`card-container ${hover ? 'hover' : ''} ${socialHover ? 'social-hover' : ''}`}>
        <div className={`business-card ${hover ? 'hover' : ''}`}>
          <div className="card-front">
            <h1 className="typing-animation">Cr1ppl3</h1>
            <h2>Developer from Sydney, Australia</h2>
            <p>Contact me for cheat rebrands </p>
            <p>Counter-Strike 2, Rust, Fortnite, Apex, EFT</p>
            <p>nextcheat.xyz Developer</p>
          </div>
          <div className="card-back">
            <h1>About Me</h1>
            <p>Age: 27</p>
            <p>Born in South Africa <span className="flag-icon">🇿🇦</span></p>
            <p>Based in Sydney, Australia <span className="flag-icon">🇦🇺</span></p>
            <p>10 years of coding experience</p>
            <div className="skills">
              <h2>Skilled in</h2>
              <p>C++, C#, Python, PHP, HTML, JS, Java</p>
            </div>
          </div>
        </div>
        <div className={`social-icons ${hover ? 'hover' : ''}`}>
          <a 
            href="https://github.com/UnkownC1ppl3" 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => setSocialHover(true)}
            onMouseLeave={() => setSocialHover(false)}
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://discord.com/users/cr1ppl3_" 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => setSocialHover(true)}
            onMouseLeave={() => setSocialHover(false)}
          >
            <i className="fab fa-discord"></i>
          </a>
          <a 
            href="https://youtube.com/channel/UCkAs2DRLF9COmL62SWDsXzQ" 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => setSocialHover(true)}
            onMouseLeave={() => setSocialHover(false)}
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
