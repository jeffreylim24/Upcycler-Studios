import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navigation />
      
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Our Story</h1>
            <p>Building sustainable fashion in Singapore</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mission">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Redefining Fashion</h2>
              <p>At Upcycler Studios, we believe that fashion should be a force for positive change. Every piece in our collection represents a commitment to sustainability, creativity, and craftsmanship.</p>
              <p>Founded with a vision to transform discarded garments into statement pieces, we honor both style and the environment. What began as a passion project has evolved into a movement that challenges the fast fashion industry.</p>
              <p>Our mission is simple: create unique, sustainable fashion that tells a story—your story.</p>
            </div>
            <div className="story-values">
              <div className="value-item">
                <h3>Sustainability</h3>
                <p>Every piece diverts textiles from landfills and reduces demand for new production.</p>
              </div>
              <div className="value-item">
                <h3>Craftsmanship</h3>
                <p>Each garment is carefully crafted with attention to detail and quality.</p>
              </div>
              <div className="value-item">
                <h3>Uniqueness</h3>
                <p>No two pieces are exactly alike—invest in one-of-a-kind fashion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="visit-us">
        <div className="container">
          <div className="visit-content">
            <h2 className="section-title">Visit Our Store</h2>
            <div className="location-info">
              <div className="location-text">
                <h3>Peninsula Shopping Centre</h3>
                <p>Find us at our physical store where you can see the craftsmanship up close and experience the quality of our upcycled pieces firsthand. Every visit is an opportunity to discover something truly unique.</p>
                <div className="store-details">
                  <p><strong>Location:</strong> Peninsula Shopping Centre, Singapore</p>
                  <p><strong>Philosophy:</strong> Fashion should become an infinite loop</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Own Something One-of-a-Kind?</h2>
            <p>Discover pieces that challenge you to style them in your own unique way.</p>
            <div className="cta-buttons">
              <a href="/#shop" className="cta-button">Shop Collection</a>
              <a href="/contact" className="cta-button-outline">Visit Our Store</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;