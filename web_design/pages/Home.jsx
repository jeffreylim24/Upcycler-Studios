import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <FeaturedSection />
      
      {/* Philosophy Section */}
      <section className="philosophy">
        <div className="container">
          <div className="philosophy-content">
            <div className="philosophy-text">
              <h2>Sustainable Fashion.</h2>
              <h2>Infinite Possibilities.</h2>
              <p>At Upcycler Studios, we believe that fashion should be both beautiful and responsible. Every piece tells a story of transformation, creativity, and environmental consciousness.</p>
              <a href="/about" className="learn-more">Learn More About Our Mission</a>
            </div>
            <div className="philosophy-visual">
              <div className="stats">
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Pieces Transformed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Sustainable</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3</span>
                  <span className="stat-label">Years Creating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <h2>Stay in the Loop</h2>
            <p>Get updates on new arrivals, exclusive pieces, and sustainable fashion insights.</p>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button type="submit" className="newsletter-button">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;