import React, { useEffect, useState } from 'react';
import './css/App.css';
import Container from './components/container';
import Header from './components/header';
import Info from './components/info/Info';
import Carta from './components/carta/Carta';

import './components/firstBlock/PriceBlok.css';
import ShapkaLow from './components/shapkalow/ShapkaLow';
import './components/shapkalow/shapkaLow.css';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="app">
      <Header />
      <Container />
      <Info />

      <Slider />
      <Carta />
      <ShapkaLow />
    </div>
  );
}

export default App;
