import React, { useState } from 'react';
import Inventory from './Inventory';
import ChatApp from './ChatApp';
import SideMenu from './SideMenu'; // Импортируем боковое меню
import ProfileModal from './ProfileModal'; // Импортируем модальное окно
import '../styles/PlayerScreen.css';

const PlayerScreen = () => {
  const [isProfileVisible, setIsProfileVisible] = useState(false); // Состояние для отображения ProfileModal
  const [nickname, setNickname] = useState(''); // Состояние для никнейма
  const [showMenu, setShowMenu] = useState(false); // Состояние для отображения бокового меню

  // Функция для открытия/закрытия модального окна профиля
  const handleEditProfile = () => {
    setIsProfileVisible(true);
  };

  // Функция для закрытия модального окна
  const handleCloseProfileModal = () => {
    setIsProfileVisible(false);
  };

  // Функция для сохранения изменений в профиле (например, изменение никнейма)
  const handleSaveNickname = (newNickname) => {
    setNickname(newNickname); // Сохраняем новый никнейм
    setIsProfileVisible(false); // Закрываем окно после сохранения
  };

  const handleMenuClose = () => {
    setShowMenu(false); // Закрыть меню
  };

  return (
    <div className="player-screen-container">
      <div className="inventory-section">
        <Inventory />
      </div>

      <div className="main-section">
        <ChatApp nickname={nickname} /> {/* Передаем никнейм в ChatApp */}
      </div>

      <div className="side-menu-section">
        {showMenu && (
          <SideMenu onClose={handleMenuClose} onEditProfile={handleEditProfile} />
        )}
      </div>

      {/* Модальное окно редактирования профиля */}
      <ProfileModal 
        isVisible={isProfileVisible} 
        onClose={handleCloseProfileModal} 
        onSave={handleSaveNickname} 
      />
      
      <h2>Добро пожаловать, {nickname || 'Гость'}</h2>
    </div>
  );
};

export default PlayerScreen;
