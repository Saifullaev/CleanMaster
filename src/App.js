import React from 'react';
import './css/App.css';
import Container from './components/container';
import Header from './components/header';
import Info from './components/info/Info';
import Carta from './components/carta/Carta';
import PriceBlok from './components/firstBlock/PriceBlok';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import divan from './components/firstBlock/compon/divan odin.jpg';
import divanSecond from './components/firstBlock/compon/divan uglovoi.jpg';
import divanThirt from './components/firstBlock/compon/kreslo.jpg';
import divanFourth from './components/firstBlock/compon/pufic.jpg';

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="app">
      <Header />
      <Container />
      <Info />
      <div className="price-section">
        <h1>Наши цены по химчистке:</h1>
        <Slider {...settings}>
          <PriceBlok image={divan} price="5000 тенге." />
          <PriceBlok image={divanSecond} price="5000 тенге." />
          <PriceBlok image={divanThirt} price="3000 тенге." />
          <PriceBlok image={divanFourth} price="1000 тенге." />
        </Slider>
      </div>
      <Carta />
    </div>
  );
}

export default App;
