import React from 'react';
import Inventory from './Inventory';
import DiceRoller from './DiceRoller';
import ChatBox from './ChatBox';
import '../styles/PlayerScreen.css';

const PlayerScreen = () => {
  return (
    <div className="player-screen-container">
      <div className="inventory-section">
        <Inventory />
      </div>
      <div className="main-section">
        <div className="chat-section">
          <ChatBox />
        </div>
        <div className="dice-roller-section">
          <DiceRoller />
        </div>
      </div>
    </div>
  );
};

export default PlayerScreen;
