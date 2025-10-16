import React from 'react';

const Hero = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    if (shopSection) {
      shopSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-main">upcycler</span>
            <span className="title-main">studios</span>
          </h1>
          <p className="hero-subtitle">WHERE FASHION MEETS INFINITE LOOP.</p>
          <button onClick={scrollToShop} className="cta-button">
            SHOP NOW
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;