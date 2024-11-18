import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/MainPage.css';
import MainImage from './assets/MainImg.png';
import AuthModal from './components/AuthModal.jsx';
import Menu2 from './components/Menu2.jsx'; 
import GameListModal from './components/GameListModal.jsx';  

function MainPage() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isGameListModalVisible, setIsGameListModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleEnterGame = () => {
    setIsGameListModalVisible(false);
    navigate('/player'); // Переход на страницу PlayerScreen
  };

  const handleOpenGameListModal = () => {
    setIsGameListModalVisible(true);
  };

  return (
    <div className="main-page">
      <Menu2 
        onLoginClick={handleLoginClick} 
        onEnterGame={handleOpenGameListModal}  // Передаем сюда функцию
      />
      <div className="image-container">
        <img 
          src={MainImage} 
          alt="Main Visual" 
          className="main-image" 
          width="1200" 
          height="620"
        />
      </div>
      <AuthModal isVisible={isModalVisible} onClose={handleCloseModal} />

      {/* Модальное окно списка игр */}
      <GameListModal 
        isVisible={isGameListModalVisible} 
        onClose={() => setIsGameListModalVisible(false)} 
        onEnterGame={handleEnterGame}  
      />
    </div>
  );
}

export default MainPage;
