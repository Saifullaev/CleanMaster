import React from 'react';
import './css/App.css';
import Container from './components/container';
import Header from './components/header';
import PriceBlok from './components/firstBlock/PriceBlok';

function App() {
  return (
    <div>
      <Header />
      <Container />
      <div>
        <h1>Наши цены по химчистке:</h1>
        <PriceBlok
          image={require('../src/components/firstBlock/compon/divan uglovoi.jpg')}
          price="7000 тенге."
        />
        <PriceBlok
          image={require('../src/components/firstBlock/compon/divan odin.jpg')}
          price="5000 тенге."
        />
        <PriceBlok
          image={require('../src/components/firstBlock/compon/kreslo.jpg')}
          price="3000 тенге."
        />
        <PriceBlok
          image={require('../src/components/firstBlock/compon/pufic.jpg')}
          price="1000 тенге."
        />
      </div>
    </div>
  );
}

export default App;
