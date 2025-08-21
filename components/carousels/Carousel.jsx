"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

// Image data array
const carouselImages = [
  { id: 1, title: "Wedding Photography", src: "/hero-carousel/caro-1.jpg" },
  { id: 2, title: "Kids Photography", src: "/hero-carousel/caro-2.jpg" },
  { id: 3, title: "Fashion Shoot", src: "/hero-carousel/caro-3.jpg" },
  { id: 4, title: "Product Photography", src: "/hero-carousel/caro-4.jpg" },
  { id: 5, title: "Event Coverage", src: "/hero-carousel/caro-5.jpg" },
];

const Carousel = ({ slides = carouselImages, autoScroll = true, interval = 3000 }) => {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Next/Prev
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto scroll
  useEffect(() => {
    if (!autoScroll || slides.length === 0) return;
    const id = setInterval(nextSlide, interval);
    return () => clearInterval(id);
  }, [current, autoScroll, interval, slides.length]);

  // Swipe handlers
  const handleTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX.current) return;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();
  };

  if (!slides || slides.length === 0) return null;

  return (
    <div className="m-3">
      <div className="relative w-full overflow-hidden rounded-xl xl:my-0">
      {/* Slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div key={slide.id} className="min-w-full h-48 md:h-[55vh] relative">
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <MdKeyboardArrowLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
      >
        <MdKeyboardArrowRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Carousel;
