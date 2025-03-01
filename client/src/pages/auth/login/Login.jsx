import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="login-input-group">
            <label className="login-label">Email:</label>
            <input 
              type='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="login-input"
            />
          </div>
          <div className="login-input-group">
            <label className="login-label">Password:</label>
            <input 
              type='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="login-input"
            />
          </div>
          <button 
            type='submit' 
            className="x-login-button"
          >
            Login
          </button>
        </form>
        <div className="login-footer">
          <p className="login-footer-text">
            Don't have an account? 
            <Link to='/register' className="login-footer-link"> Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
