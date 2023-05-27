import React, { useEffect, useState } from "react";
import Svg from "./component/Svg";

export const Header = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const array = [
      "О компании",
      "Сотрудники",
      "Услуги",
      "Отзывы",
      "Контакты",
      "Связаться с нами",
    ];
    setLinks(array);
  }, []);

  return (
    <header className="header">
      <div className="logo">
        <Svg />
      </div>
      {!!links && (
        <nav>
          <ul>
            {links?.map((i, index) => (
              <li key={index}>
                <a href="/">{i}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
