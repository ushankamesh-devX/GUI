import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-myBlack">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input 
              type='email' 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-myBlackLite"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password:</label>
            <input 
              type='password' 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-myBlackLite"
            />
          </div>
          <button 
            type='submit' 
            className="w-full bg-myBlack text-white p-2 rounded-md hover:bg-myBlackLite transition duration-200"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm">Don't have an account? <Link to='/register' className="text-myBlack text-opacity-50 hover:underline">Register here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;