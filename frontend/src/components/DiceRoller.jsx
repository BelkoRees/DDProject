import React from 'react';
//import './DiceRoller.css'; // Add CSS

const DiceRoller = () => {
  return (
    <div className="dice-roller-container">
      <div className="dice-buttons">
        {['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100'].map((dice) => (
          <button key={dice} className="dice-button">{dice}</button>
        ))}
      </div>
      <div className="modifier-controls">
        <button>-</button>
        <span>1d</span>
        <button>+</button>
        <button>-0</button>
        <button>+</button>
      </div>
      <div className="chat-input-container">
        <input type="text" placeholder="Пиши текст в чат сюда" />
        <button className="upload-button">📷</button>
        <button className="send-button">➤</button>
      </div>
    </div>
  );
};

export default DiceRoller;
