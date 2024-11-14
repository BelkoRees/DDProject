import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем хук
import '../styles/SideMenu.css';

function SideMenu({ onClose }) {
  const navigate = useNavigate(); // Инициализируем хук навигации

  const handleExit = () => {
    // Навигация на главную страницу
    navigate('/');
  };

  return (
    <div className="side-menu">
      <div className="menu-header">
        <h2>Меню</h2>
        <button className="close-button" onClick={onClose}>Закрыть</button>
      </div>
      <div className="menu-footer">
        <button className="exit-button" onClick={handleExit}>Выйти из игры</button>
      </div>
    </div>
  );
}

export default SideMenu;
