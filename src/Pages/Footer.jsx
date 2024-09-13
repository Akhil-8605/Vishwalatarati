import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-list">
              {['Software Development', 'Mobile Applications', 'Website Development', 'Data & Analytics', 'Digital Strategy & Design', 'Industrial Training'].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Contact Us</h3>
            <ul className="footer-list">
              <li className="contact-item">📧 vishwalarati@gmail.com</li>
              <li className="contact-item">☎ +91 7620131908</li>
              <li className="contact-item">☎ +91 9146099742</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Address</h3>
            <p className="address">
              783, Swami Vivekananda Nagar, Near Solapur Airport, Solapur-413002, Maharashtra.
            </p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              {['Home', 'About Us', 'Our Services', 'Contact', 'Career'].map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Vishwalatarati Digital Solutions Pvt Ltd, Solapur | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;