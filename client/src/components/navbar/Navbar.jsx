import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { RiSearch2Line, RiArrowDropDownLine, RiUser3Line, RiFacebookBoxFill, RiWhatsappFill, RiMailFill, RiListUnordered } from "react-icons/ri";
import { FaMobileAlt, FaHamburger, FaTshirt, FaChild } from "react-icons/fa";
import "./navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCatagoryOpen, setIsCatagoryOpen] = useState(false);
  const dropdownRef = useRef(null);
  const catagoryRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleCatagory = () => setIsCatagoryOpen(!isCatagoryOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const handleClickOutsideCat = (event) => {
    if (catagoryRef.current && !catagoryRef.current.contains(event.target)) {
      setIsCatagoryOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideCat);
    return () => document.removeEventListener("mousedown", handleClickOutsideCat);
  }, []);

  return (
    <div className="navbar-container">
      <nav>
        <section className="contact">
          <h2 title="Contact within 8:00 am - 5:00 pm">
            Contact: <span className="contact-link">0764511038</span>
          </h2>
          <div className="contact-icons">
            <Link title="Follow us on Facebook"><RiFacebookBoxFill /></Link>
            <Link title="Contact via WhatsApp"><RiWhatsappFill /></Link>
            <Link title="Send us an Email"><RiMailFill /></Link>
          </div>
        </section>
        <section className="navbar-upper">
          <Link to="/" title="BuyNest" className="brand-logo">
            <span className="brand-highlight">Buy</span>Nest
          </Link>

          <div className="search-bar">
            <input type="text" placeholder="Search..." className="search-input" />
            <button type="submit" className="search-button">
              <p>Search</p>
              <RiSearch2Line className="search-i"/>
            </button>
          </div>

          <div className="auth">
            <RiUser3Line className="auth-icon" />
            <div className="auth-details">
              <p className="welcome-text">Welcome,</p>
              <button onClick={toggleDropdown} className="auth-button">
                <p>Register/Login</p>
                <RiArrowDropDownLine className="dropdown-icon" />
              </button>
            </div>
          </div>

          {isDropdownOpen && (
            <div ref={dropdownRef} className="dropdown-menu">
              <div className="dropdown-header">
                <img src="https://placehold.co/64x64" alt="" className="user-avatar" />
                <h2 className="dropdown-welcome">Welcome</h2>
                <p>Register/Login</p>
              </div>
              <ul className="dropdown-links">
                <li><Link>Profile</Link></li>
                <li><Link>Cart</Link></li>
                <li><Link>Order History</Link></li>
                <li><Link>Become Seller</Link></li>
              </ul>
              <div className="dropdown-actions">
                <Link to="/register"><button className="a-register-button">Register</button></Link>
                <Link to="/login"><button className="x-login-button">Login</button></Link>
              </div>
            </div>
          )}

          <Link to="/cart" title="Go to Cart" className="cart">
            <FaCartShopping className="cart-icon" />
            <div className="cart-count">4</div>
          </Link>
        </section>

        <section className="nav-footer">
          <button onClick={toggleCatagory} className="category-button">
            <p>All Categories</p>
            <RiListUnordered />
          </button>
          {isCatagoryOpen && (
            <ul ref={catagoryRef} className="category-menu">
              <Link to="store/electronics"><li><FaMobileAlt /> Electronics Items</li></Link>
              <Link to="store/food"><li><FaHamburger /> Food Items</li></Link>
              <Link to="store/clothing"><li><FaTshirt /> Clothing Items</li></Link>
              <Link to="store/kids"><li><FaChild /> Kids Items</li></Link>
            </ul>
          )}
          <ul className="nav-links">
            <li><Link>Home</Link></li>
            <li><Link>Newly Arrived</Link></li>
            <li><Link>Best Deal</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link>About us</Link></li>
          </ul>
        </section>
      </nav>
    </div>
  );
}

export default Navbar;
