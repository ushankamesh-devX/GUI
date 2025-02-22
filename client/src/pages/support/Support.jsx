import React from 'react';
import { Ri24HoursFill } from "react-icons/ri";
import './support.css'; // Import the new CSS file

const Support = () => {
  return (
    <div className="support-section">
      {/* Header */}
      <div className="support-header">
        <h1 className="support-title">Support</h1>
      </div>

      {/* Support Form */}
      <main className="support-main">
        <h2 className="support-subtitle">How can we help you?</h2>
        <form className="support-form">
          <div className="support-form-group">
            <label className="support-label" htmlFor="name">Name</label>
            <input type="text" id="name" className="support-input" required />
          </div>
          <div className="support-form-group">
            <label className="support-label" htmlFor="email">Email</label>
            <input type="email" id="email" className="support-input" required />
          </div>
          <div className="support-form-group">
            <label className="support-label" htmlFor="subject">Subject</label>
            <input type="text" id="subject" className="support-input" required />
          </div>
          <div className="support-form-group">
            <label className="support-label" htmlFor="message">Message</label>
            <textarea id="message" className="support-textarea" rows="4" required></textarea>
          </div>
          <button type="submit" className="support-submit-button">Submit</button>
        </form>
      </main>

      
    </div>
  );
};

export default Support;
