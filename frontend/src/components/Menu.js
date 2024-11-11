import React from 'react';
import '../styles/Menu.css'; // Создайте CSS файл для стилизации меню, если нужно

function Menu({ onLoginClick }) {
  return (
    <header className="main-header">
      <div className="logo">DDProject</div>
      <button className="login-button" onClick={onLoginClick}>
        Войти в аккаунт
      </button>
    </header>
  );
}

export default Menu;
