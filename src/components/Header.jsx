import React from 'react';
import logo from '../assets/img/1634274430999_bulletin.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Логотип" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">О компании</a>
          </li>
          <li>
            <a href="/">Сотрудники</a>
          </li>
          <li>
            <a href="/">Услуги</a>
          </li>
          <li>
            <a href="/">Отзывы</a>
          </li>
          <li>
            <a href="/">Контакты</a>
          </li>
          <li>
            <a href="/">Связаться с нами</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
