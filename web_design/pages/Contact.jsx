import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Navigation />
      
      {/* Contact Hero */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <p>Let's create something beautiful together</p>
          </div>
        </div>
      </section>

      {/* Contact Main */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-section">
              <h2>Send us a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="wholesale">Wholesale</option>
                    <option value="press">Press & Media</option>
                    <option value="support">Customer Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="6" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    placeholder="Tell us about your project, questions, or how we can help..."
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info-section">
              <h2>Visit Our Studio</h2>
              <div className="contact-info">
                <div className="info-item">
                  <h3>Location</h3>
                  <p>Excelsior Shopping Centre<br />
                  3 Coleman St, B1-14<br />
                  Peninsula Shopping Centre<br />
                  Singapore 179804</p>
                </div>
                <div className="info-item">
                  <h3>Hours</h3>
                  <p>Monday - Tuesday: 2:00 PM - 8:00 PM<br />
                  Wednesday: 2:00 PM - 5:00 PM<br />
                  Thursday - Sunday: 2:00 PM - 8:00 PM</p>
                </div>
                <div className="info-item">
                  <h3>Contact</h3>
                  <p>Email: hello@upcyclerstudios.com<br />
                  Phone: (555) 123-4567<br />
                  Instagram: @upcyclerstudios</p>
                </div>
                <div className="info-item">
                  <h3>Services</h3>
                  <p>• Personal Shopping<br />
                  • Custom Upcycling<br />
                  • Fashion Consultation<br />
                  • Wardrobe Sustainability Audit</p>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="map-section">
                <h3>Find Us</h3>
                <div className="map-placeholder">
                  <p>Interactive Map</p>
                  <span>Peninsula Shopping Centre, 3 Coleman St, Singapore</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;