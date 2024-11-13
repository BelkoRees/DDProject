import React from 'react';
import Inventory from './Inventory';
//import DiceRoller from './DiceRoller';
//import ChatBox from './ChatBox';
import ChatApp from './ChatApp';
import '../styles/PlayerScreen.css';

const PlayerScreen = () => {
  return (
    <div className="player-screen-container">
      <div className="inventory-section">
        <Inventory />
      </div>
      <div className="main-section">
        <ChatApp />
      </div>
    </div>
  );
};

export default PlayerScreen;
