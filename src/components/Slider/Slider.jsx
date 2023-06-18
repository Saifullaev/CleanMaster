import React, { useState, useEffect } from "react";
import divan from "../../components/firstBlock/compon/divan odin.jpg";
import divanSecond from "../../components/firstBlock/compon/divan uglovoi.jpg";
import divanThirt from "../../components/firstBlock/compon/kreslo.jpg";
import divanFourth from "../../components/firstBlock/compon/pufic.jpg";
import "./slider.css";

const Slider = () => {
  const images = [divan, divanSecond, divanThirt, divanFourth];
  const [current, setCurrent] = useState(0);

  const length = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider">
      <button
        className="slider-button prev"
        id="prevButton"
        onClick={prevSlide}
      >
        &lt;
      </button>
      {images.map((image, index) => (
        <div
          className={index === current ? "slide active" : "slide"}
          key={index}
        >
          {index === current && (
            <img className="image" src={image} alt="travel image" />
          )}
        </div>
      ))}
      <button
        className="slider-button next"
        id="nextButton"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </section>
  );
};

export default Slider;
