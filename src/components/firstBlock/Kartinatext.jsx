import React from 'react';
//import '../css/Kartinatext.css';

const Kartinatext = () => {
  return (
    <div className="kartinatext">
      <div className="image"></div>
      <div className="text">
        <h2>Заголовок</h2>
        <p>Текстовый блок с описанием.</p>
      </div>
      <a href="#" className="button">
        Узнать подробнее
      </a>
    </div>
  );
};

export default Kartinatext;
