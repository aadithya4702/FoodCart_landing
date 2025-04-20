import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    image:
      "https://i.pinimg.com/736x/e8/68/44/e868440887b9e8c189a598873d4659ad.jpg",
    title: "Welcome to D'square",
    subtitle: "Healthy Food. Happy Life.",
    button: "Learn More",
  },
  {
    image:
      "https://i.pinimg.com/736x/dd/c9/92/ddc992df8e5fcb6324560c4c13f71b00.jpg",
    title: "Fuel your body, feed your soul",
    subtitle:
      "At D'square, we create meals that are as nutritious as they are delicious—made from clean, wholesome ingredients that nourish you from the inside out.",
    button: "Start Exploring",
  },
  {
    image:
      "https://i.pinimg.com/736x/0c/0e/76/0c0e76e4ad64cced6a1f7085ac83b67f.jpg",
    title: "🥗 Fresh. Organic. Flavorful.",
    subtitle:
      "Every ingredient we use is carefully selected—organic, locally sourced, and free from artificial preservatives. Our goal? To help you eat better and feel amazing.",
    button: "Book Now",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const slideTo = (index) => {
    setCurrent((index + slides.length) % slides.length);
  };

  const nextSlide = () => slideTo(current + 1);
  const prevSlide = () => slideTo(current - 1);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => nextSlide(), 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative w-full  h-screen overflow-hidden">
      {/* Slide Wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 text-center">
              <div className="rounded-xl p-8 max-w-[90%] md:max-w-2xl lg:max-w-3xl  text-white animate-fade-in">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r text-white bg-clip-text text-transparent drop-shadow-md">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg lg:text-xl leading-loose tracking-wide text-gray-300 mb-6 whitespace-pre-line">
                  {slide.subtitle}
                </p>
                {/* <button className="mt-4 px-6 py-3 bg-gradient-to-r from-lime-400 to-green-500 text-black font-bold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
                  {slide.button}
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-6 left-1/2 space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => slideTo(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === current ? "bg-green-400 scale-110" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>

      {/* Prev/Next Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/50 hover:scale-110 transition-transform duration-300">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/50 hover:scale-110 transition-transform duration-300">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 6 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
