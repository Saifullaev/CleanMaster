import React from "react";
import "./PriceBlok.css";

const PriceBlok = ({ image, price }) => {
  return (
    <div className="price-blok" style={{ width: "100%" }}>
      <div className="image" style={{ width: "100%", height: "72vh" }}>
        <img src={image} alt="Product" />
      </div>
      <div className="text">
        <h2 className='price'>Цена: {price}</h2>
      </div>
    </div>
  );
};

export default PriceBlok;
