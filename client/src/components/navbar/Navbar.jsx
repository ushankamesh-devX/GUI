import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import './navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <section className="navbar-upper">
          <div className="logo">
            <img src="https://placehold.co/200x50" alt="" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button type="submit">Search</button>
          </div>
          <div className="auth">
            <button className="login">Login</button>
            <button className="register">Register</button>
          </div>
          <Link className="cart">
            <div className="cart-icon">
            <FaCartShopping/>
            </div>
            <div className="cart-stat">
                <div className="cart-count">4</div>
                <div className="cart-name">Cart</div>
            </div>
          </Link>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
