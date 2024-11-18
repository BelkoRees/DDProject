import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SideMenu.css';

function SideMenu({ onClose, onEditProfile }) {
  const navigate = useNavigate(); // Инициализация хука для навигации

  const handleExit = () => {
    navigate('/'); // Навигация на главную страницу
  };

  return (
    <div className="side-menu">
      <div className="menu-header">
        <h2>Меню</h2>
        <button className="close-button" onClick={onClose}>Закрыть</button>
      </div>

      <div className="menu-body">
        <button className="edit-profile-button" onClick={onEditProfile}>
          Редактировать профиль
        </button>
      </div>

      <div className="menu-footer">
        <button className="exit-button" onClick={handleExit}>Выйти из игры</button>
      </div>
    </div>
  );
}

export default SideMenu;
