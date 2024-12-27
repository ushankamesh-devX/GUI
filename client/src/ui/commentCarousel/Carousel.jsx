import React, { useState } from "react";

const Carousel = ({
  slides,
  autoPlay = false,
  interval = 3000,
  showArrows = true,
  showIndicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  React.useEffect(() => {
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
    <div className=" relative w-full max-w-lg mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full mb-2 flex flex-col items-start justify-start bg-myWhite p-6 rounded-lg shadow-md border text-center"
          >
            <div className="flex flex-row space-x-1">
              <img
                src={slide.avatar}
                alt={slide.name}
                className="size-12 rounded-full  border"
              />

              <div className="flex flex-col items-start">
                <p className="text-sm text-gray-500">{slide.role}</p>
                <h2 className="text-myBlackLite text-lg font-bold">{slide.name}</h2>

              </div>
            </div>

            <p className="text-justify text-gray-600 text-sm">{slide.comment}</p>
          </div>
        ))}
      </div>


      {showArrows && (
        <>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10095;
          </button>
        </>
      )}


      {showIndicators && (
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full ${
                currentIndex === index ? "bg-gray-400 w-4" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
