// src/components/Slideshow.js
import React, { useState, useEffect } from "react";
import sharecommunity from "./sharecommunity.jpeg";
// Example images, replace with actual URLs or import images
const slides = [
  {
    text: "Now you can share your subscription and save money.",
    image: sharecommunity,
  },
  { text: "or you can buy from here .", image: sharecommunity },
  {
    text: "See all your bought and shared subscriptions in the My Profile section.",
    image: sharecommunity,
  },
];

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative p-0 h-[300px] max-w-full mx-auto text-center overflow-hidden">
      <img
        src={slides[currentSlide].image}
        alt="Slide"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <p
          className="text-2xl font-bold text-balck mb-8"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {slides[currentSlide].text}
        </p>
        <div
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-balck cursor-pointer"
          onClick={() =>
            setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)
          }
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-balck cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
