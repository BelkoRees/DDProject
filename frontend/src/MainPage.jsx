import React, { useState } from 'react';
import './styles/MainPage.css';
import MainImage from './assets/MainImg.png';
import AuthModal from './components/AuthModal.jsx';
import Menu2 from './components/Menu2.jsx';  // Импортируем Menu2
import GameListModal from './components/GameListModal.jsx';  // Импортируем GameListModal
import PlayerScreen from './components/PlayerScreen.jsx'; // Import the PlayerScreen component

function MainPage() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isPlayerScreenVisible, setIsPlayerScreenVisible] = useState(false);
  const [isGameListModalVisible, setIsGameListModalVisible] = useState(false);

  const handleLoginClick = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleEnterGame = () => {
    setIsPlayerScreenVisible(true); // Set state to show PlayerScreen
    setIsGameListModalVisible(false); // Закрыть модальное окно списка игр
  };

  const handleOpenGameListModal = () => {
    setIsGameListModalVisible(true);
  };

  // Если экран игрока активен, рендерим PlayerScreen
  if (isPlayerScreenVisible) {
    return <PlayerScreen />;
  }

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
        onEnterGame={handleEnterGame}  // Передаем обработчик в GameListModal
      />
    </div>
  );
}

export default MainPage;
