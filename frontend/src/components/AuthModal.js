import React from 'react';
import '../styles/AuthModal.css';
import crossIcon from '../assets/icons/cross.svg';

function AuthModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Авторизация</h2>
        <form>
          <div className="form-group">
            <label htmlFor="login">Логин:</label>
            <input type="text" id="login" placeholder="Введите логин" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль:</label>
            <input type="password" id="password" placeholder="Введите пароль" />
          </div>
          <div className="button-group">
            <button type="submit">Войти</button>
            <button type="button">Зарегистрироваться</button>
          </div>
        </form>
        <img 
          src={crossIcon} 
          alt="Close" 
          className="close-icon" 
          onClick={onClose}
        />
      </div>
    </div>
  );
}

export default AuthModal;
