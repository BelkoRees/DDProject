import React, { useState } from 'react';
import ProfileModal from './ProfileModal';
import UserCircle from '../assets/icons/UserCircle.svg';
import PencilEdit from '../assets/icons/UserEdit.svg';
import DoorExit from '../assets/icons/UserExit.svg';
import '../styles/Menu2.css';

const Menu2 = () => {
    const [isModalVisible, setModalVisible] = useState(false);

  const handleEditClick = () => {
    setModalVisible(true); // Показываем модальное окно
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Закрываем модальное окно
  };

  return (
    <div className="menu-container">
      <div className="menu-logo">DDProject</div>
      <div className="menu-item">Список игр</div>
      <div className="menu-item">Мои персонажи</div>
      <div className="menu-profile">
        <img 
          src={UserCircle} 
          className="profile-icon"
          alt="AccImg"
        />
        <div className="profile-info">
          <span className="profile-name">Никнейм</span>
          <span className="profile-login">My_login</span>
        </div>
      </div>
      <div className="menu-icon" onClick={handleEditClick}>
        <img 
          src={PencilEdit} 
          className="edit-icon"
          alt="Edit"
        />
      </div>
      <div className="menu-icon">
        <img 
          src={DoorExit} 
          className="exit-icon"
          alt="Exit"
        />
      </div>
      {/* Модальное окно для редактирования профиля */}
      <ProfileModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Menu2;
