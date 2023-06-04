import React from 'react';
import './css/App.css';
import Container from './components/container';
import Header from './components/header';
import Info from './components/info/Info';
import Carta from './components/carta/Carta';

function App() {
  return (
    <div>
      <Header />
      <Container />
      <Info/>
      <Carta/>
      {/* <Kartinatext /> */}
    </div>
  );
}

export default App;
