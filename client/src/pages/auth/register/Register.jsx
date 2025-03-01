import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./register.css"

function Register() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    setErrorMessage('');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="register-page">
  <div className="register-container">
    <h2 className="register-title">Register</h2>
    <form onSubmit={handleSubmit} className="register-form">
      <div className="form-group">
        <label className="form-label">Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Confirm Password:</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
          className="form-input"
        />
      </div>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
      <button 
        type="submit" 
        className="x-register-button"
      >
        Register
      </button>
    </form>
    <div className="register-footer">
      <p>Already have an account? <Link to="/login" className="login-link">Login here</Link></p>
    </div>
  </div>
</div>

  );
}

export default Register;
