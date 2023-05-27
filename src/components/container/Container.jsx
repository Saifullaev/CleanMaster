import React from "react";

export const Container = () => {
  return (
    <div className="container">
      <h1>
        <div className="centered-text">
          ДОМАШНИЙ МАСТЕР
          <br /> С ВЫЕЗДОМ НА ДОМ
        </div>
      </h1>
      <p>
        Наши профессиональные мастера оперативно выезжают к клиенту с <br />
        полным набором инструментов. Электрики, сантехники, плотники и <br />
        специалисты в других направлениях своевременно выполняют <br />
        монтажно-строительные работы, при этом соблюдая все необходимые
        <br />
        меры безопасности.{" "}
      </p>
      <div className="buttons">
        <button style={{ marginRight: "5px" }}>Рассчитать стоимость</button>
        <button style={{ marginLeft: "5px" }}>Вызвать мастера</button>
      </div>
    </div>
  );
};
