import React, { useState } from 'react';
import Cross from '../assets/icons/cross.svg'; // Иконка крестика для закрытия
import '../styles/ProfileModal.css'; // Стили для модального окна

const ProfileModal = ({ isVisible, onClose, onSave }) => {
  const [profilePic, setProfilePic] = useState(null); // Состояние для фото профиля
  const [nickname, setNickname] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Устанавливаем временное изображение
    }
  };

  const handleImageRemove = () => {
    setProfilePic(null); // Удаляем фото
  };

  const handleSaveChanges = () => {
    // Логика сохранения изменений
    alert('Изменения сохранены!');
    onSave(nickname); // Сохраняем никнейм в родительском компоненте
    onClose(); // Закрываем окно после сохранения
  };

  if (!isVisible) return null; // Если окно не видно, не рендерим

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <img 
            src={Cross} 
            alt="Cross" 
            className="profile-close" 
          />
        </button>

        <div className="profile-pic-container">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="profile-pic" 
          />
          <div className="profile-pic-actions">
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="upload-button"
            />
            {profilePic && (
              <button className="remove-button" onClick={handleImageRemove}>
                Удалить фото
              </button>
            )}
          </div>
        </div>

        <form className="profile-form">
          <label>
            Никнейм
            <input 
              type="text" 
              value={nickname} 
              onChange={(e) => setNickname(e.target.value)} 
              placeholder="Никнейм"
            />
          </label>
          <label>
            Логин
            <input 
              type="text" 
              value={login} 
              onChange={(e) => setLogin(e.target.value)} 
              placeholder="Логин"
            />
          </label>
          <label>
            Пароль
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Пароль"
            />
          </label>

          <button type="button" onClick={handleSaveChanges} className="save-button">
            Сохранить изменения
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfileModal;
