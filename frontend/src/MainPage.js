import React, { useState } from 'react';
import './styles/MainPage.css';
import MainImage from './assets/MainImg.png';
import AuthModal from './components/AuthModal.js';
import Menu from './components/Menu.js';

function MainPage() {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const handleLoginClick = () => {
      setModalVisible(true);
    };
  
    const handleCloseModal = () => {
      setModalVisible(false);
    };

  return (
    <div className="main-page">
      <Menu onLoginClick={handleLoginClick} />
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
    </div>
  );
}

export default MainPage;
