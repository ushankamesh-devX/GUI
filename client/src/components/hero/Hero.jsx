import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import Carousel from "../../ui/commentCarousel/Carousel";
import imgHero from "../../assets/heroImage.png";
import heroFooter from "../../assets/heroFooter.png";

function Hero() {
  const slides = [
    {
      avatar: "https://via.placeholder.com/150",
      name: "John Doe",
      role: "Seller",
      comment:
        "This carousel is super customizable and works perfectly!,lorem10l ",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Buyer",
      comment:
        "Loving the text-only design with user details!This carousel is super customizable and works perfectly!",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Buyer",
      comment:
        "Loving the text-only design with user details!This carousel is super customizable and works perfectly!",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Jane Smith",
      role: "Buyer",
      comment:
        "Loving the text-only design with user details!This carousel is super customizable and works perfectly!",
    },
    {
      avatar: "https://via.placeholder.com/150",
      name: "Alice Brown",
      role: "Seller",
      comment:
        "The integration with avatars and dates is just awesome!This carousel is super customizable and works perfectly!",
    },
  ];

  return (
    <div className="hero-section">
    <div className="hero-top-space"></div>
    <section className="hero-grid">
      <div className="hero-left-column">
        <h1 className="hero-heading">
          Discover Endless <br /> Choices, All in One Place!
        </h1>
        <div className="auth-card">
          <div className="auth-header">
            <img
              src="https://placehold.co/40"
              alt=""
              className="auth-avatar"
            />
            <div className="auth-text">
              <h3 className="auth-welcome">Welcome,</h3>
              <h2 className="auth-title">Register/Login</h2>
            </div>
          </div>
          <div className="auth-buttons">
            <Link>
              <button className="register-button">
                Register
              </button>
            </Link>
            <Link>
              <button className="login-button">
                Login
              </button>
            </Link>
          </div>
        </div>
        <h3 className="feedback-title">General Positive Feedback</h3>
        <div className="carousel-wrapper">
          <Carousel
            slides={slides}
            autoPlay={true}
            interval={2000}
            showArrows={false}
            showIndicators={true}
          />
        </div>
      </div>
      <div className="hero-right-column">
        <img src={imgHero} alt="" className="hero-image"/>
      </div>
    </section>
    <section className="hero-footer">
      <img src={heroFooter} alt="" />
    </section>

    <hr />
  </div>
  );
}

export default Hero;
