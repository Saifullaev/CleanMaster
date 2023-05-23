import React from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <h1>TEST</h1>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все что надо знать о химчистке</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
