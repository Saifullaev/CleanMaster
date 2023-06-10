import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Carta = () => {
  useEffect(() => {
    const map = L.map("map").setView([51.126721, 71.415727], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
      map
    );

    L.marker([51.126721, 71.415727])
      .addTo(map)
      .bindPopup("Адрес: ул. Кабанбай батыра 36");

    const bounds = [
      [51.123, 71.412],
      [51.13, 71.419],
    ];
    map.fitBounds(bounds);
  }, []);

  const handleNavigateToTugiz = () => {
    window.location.href =
      "https://2gis.kz/astana/firm/70000001018129746/71.415727%2C51.126721/tab/info?m=71.415349%2C51.126399%2F16.06";
  };

  return (
    <div>
      <h1>Карта геолокации</h1>
      <div id="map" style={{ width: "400px", height: "400px" }}></div>
      <div>
        <button onClick={handleNavigateToTugiz}>Перейти в 2gis</button>
        <p>Реквизиты</p>
        {/* Добавьте другие реквизиты здесь */}
      </div>
    </div>
  );
};

export default Carta;
