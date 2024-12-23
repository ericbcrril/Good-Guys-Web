import React, { useState, useEffect } from 'react';

const Carousel = ({ images, autoSlide = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Función para avanzar al siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Función para ir a un slide específico
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Efecto para auto deslizar
  useEffect(() => {
    if (!autoSlide) return;

    const slideInterval = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(slideInterval);
  }, [currentIndex, autoSlide, interval]);

  return (
    <div className="carousel">
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-image" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;

//#region Ejemplo de uso
/* 
import React from 'react';
import Carousel from './Carousel';

const App = () => {
  const images = [
    'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/600x400/33C1FF/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/600x400/75FF33/FFFFFF?text=Slide+3',
    // Añade más URLs de imágenes según necesites
  ];

  return (
    <div>
      <h1>Mi Carrusel de Imágenes</h1>
      <Carousel images={images} autoSlide={true} interval={5000} />
    </div>
  );
};

export default App;

*/