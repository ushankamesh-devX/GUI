import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            BuyNest is your one-stop shop for quality products at unbeatable prices. 
            Explore our wide range of categories and enjoy a seamless shopping experience.
          </p>
        </div>
        

        <div className="footer-links">
          <h3 className="footer-heading">Quick Links</h3>
          <ul>
            <li className="footer-link-item">
              <a href="/home" className="footer-link">Home</a>
            </li>
            <li className="footer-link-item">
              <a href="/newly-arrived" className="footer-link">Newly Arrived</a>
            </li>
            <li className="footer-link-item">
              <a href="/best-deal" className="footer-link">Best Deals</a>
            </li>
            <li className="footer-link-item">
              <a href="/support" className="footer-link">Support</a>
            </li>
            <li className="footer-link-item">
              <a href="/about-us" className="footer-link">About Us</a>
            </li>
          </ul>
        </div>


        <div className="footer-contact">
          <h3 className="footer-heading">Contact Us</h3>
          <ul>
            <li className="footer-contact-item">
              Phone: <span className="footer-highlight">0764511038</span>
            </li>
            <li className="footer-contact-item">
              Email: <span className="footer-highlight">support@buynest.com</span>
            </li>
            <li className="footer-social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2025 BuyNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
