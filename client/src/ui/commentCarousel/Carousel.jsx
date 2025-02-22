import React, { useState, useEffect } from "react";
import "./carousel.css"; // Import the new CSS file

const Carousel = ({
  slides,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [currentIndex, autoPlay, interval]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="carousel-slide"
          >
            <div className="carousel-slide-header">
              <img
                src={slide.avatar}
                alt={slide.name}
                className="carousel-avatar"
              />
              <div className="carousel-slide-info">
                <p className="carousel-role">{slide.role}</p>
                <h2 className="carousel-name">{slide.name}</h2>
              </div>
            </div>

            <p className="carousel-comment">{slide.comment}</p>
          </div>
        ))}
      </div>

      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="carousel-arrow carousel-arrow-left"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="carousel-arrow carousel-arrow-right"
          >
            &#10095;
          </button>
        </>
      )}

      {showIndicators && (
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-indicator ${
                currentIndex === index ? "carousel-indicator-active" : ""
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
