import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const Carta = () => {
  useEffect(() => {
    let map;

    map = L.map("map").setView([51.126721, 71.415727], 12);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "",
    }).addTo(map);

    const redDotIcon = L.icon({
      iconUrl:
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTMzLWljb24tMDc1LmpwZw.jpg",
      iconSize: [12, 12],
    });

    L.circleMarker([51.126721, 71.415727], { icon: redDotIcon })
      .addTo(map)
      .bindPopup("Адрес: пр. Кабанбай батыра 36");

    const bounds = [[51.123, 71.412], [51.13, 71.419]];
    map.fitBounds(bounds);
  }, []);

  const handleNavigateToTugiz = () => {
    window.location.href =
      "https://2gis.kz/astana/firm/70000001018129746/71.415727%2C51.126721/tab/info?m=71.415349%2C51.126399%2F16.06";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ marginRight: "50px" }}>
        <h1 className="cartaGeo">Карта геолокации</h1>
        <div
          id="map"
          style={{
            width: "400px",
            height: "400px",
            marginRight: "300px",
            border: "3px solid blue", // Add blue border to the map
            borderRadius: "10px", // Optional: Add border radius for a rounded appearance
          }}
        ></div>
        <button className="click2Giz" onClick={handleNavigateToTugiz}>
          Перейти в Тугиз
        </button>
      </div>
      <div>
        <p className="recviziti">Реквизиты:</p>
        <p className="recviziti">
          Адрес: проспект Кабанбай Батыра 36, <br /> телефон: 8777 1777771{" "}
        </p>
        <p>
          <a
            className="whatsApp"
            href="https://www.whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://avatanplus.com/files/resources/original/5e73979e72bb3170f3884306.png"
              alt="WhatsApp"
              style={{ width: "30px", height: "30px", marginRight: "5px" }}
            />
            WhatsApp
          </a>
        </p>
        <p>
          <a
            className="whatsApp"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/691/original/instagram-logo-instagram-icon-transparent-free-png.png"
              alt="Instagram"
              style={{ width: "40px", height: "30px", marginRight: "5px" }}
            />
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
};

export default Carta;
