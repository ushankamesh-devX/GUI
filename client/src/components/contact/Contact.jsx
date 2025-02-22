import React from "react";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import imgContact from "../../assets/contact-image.png";
import "./contact.css"; // Import the new CSS file

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-image-container">
        <img
          src={imgContact}
          alt="Contact Us"
          className="contact-image"
        />
      </div>

      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-heading">Get in Touch</h2>
              <p className="contact-description">
                We'd love to hear from you! Whether you have a question about
                our products, pricing, or anything else, our team is ready to
                answer all your questions.
              </p>
              <div className="contact-details">
                <p className="contact-detail">
                  <HiMail className="contact-icon" />
                  support@buynest.com
                </p>
                <p className="contact-detail">
                  <HiPhone className="contact-icon" />
                  (800) 123-4567
                </p>
                <p className="contact-detail">
                  <HiLocationMarker className="contact-icon" />
                  789 Market St, Shopville, USA
                </p>
              </div>
              <div className="contact-social-icons">
                <a className="contact-social-link" href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a className="contact-social-link" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="contact-social-link" href="#">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            <div className="contact-form-container">
              <h2 className="contact-heading">Send Us a Message</h2>
              <form className="contact-form">
                <div className="contact-form-group">
                  <label className="contact-label" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="contact-input"
                    id="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="contact-input"
                    id="email"
                    placeholder="Your Email"
                    type="email"
                  />
                </div>
                <div className="contact-form-group">
                  <label className="contact-label" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="contact-textarea"
                    id="message"
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>
                <div className="contact-form-action">
                  <button
                    className="contact-submit-button"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
