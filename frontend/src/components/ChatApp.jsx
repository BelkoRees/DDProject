import React, { useState } from 'react';
import '../styles/ChatApp.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // Состояние для хранения сообщений
  const [input, setInput] = useState(''); // Состояние для хранения текста в поле ввода
  const [diceCount, setDiceCount] = useState(1); // Количество бросков
  const [modifier, setModifier] = useState(0); // Модификатор к результату

  // Функция для отправки сообщения
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  // Функция для обработки нажатия клавиши Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  // Функция для генерации случайного числа в диапазоне от 1 до max
  const rollDice = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  // Функция для обработки броска кубика с количеством бросков и модификатором
  const handleDiceRoll = (sides) => {
    let total = 0;
    let details = [];

    for (let i = 0; i < diceCount; i++) {
      const rollResult = rollDice(sides);
      total += rollResult;
      details.push(rollResult);
    }

    total += modifier;
    const detailsString = `${total} (${details.join(' + ')}${modifier ? ` + ${modifier}` : ''})`;

    setMessages([...messages, `Бросок ${diceCount}d${sides} + ${modifier}: ${detailsString}`]);
  };

  // Функции для управления количеством кубов и модификатором
  const increaseDiceCount = () => setDiceCount(diceCount + 1);
  const decreaseDiceCount = () => setDiceCount(diceCount > 1 ? diceCount - 1 : 1);

  const increaseModifier = () => setModifier(modifier + 1);
  const decreaseModifier = () => setModifier(modifier > 0 ? modifier - 1 : 0);

  return (
    <div className="chat-app-container">
      {/* Окно чата с сообщениями */}
      <div className="chat-window">
        <h2>Чат</h2>
        <div className="messages-container">
          {messages.length === 0 ? (
            <p>Нет сообщений. Начните чат!</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} className="message-item">
                {message}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Окно для ввода сообщения и кнопок с кубиками */}
      <div className="input-container">
        <h2>Введите сообщение</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Введите сообщение"
          rows="4"
          className="input-textarea"
        />
        <button onClick={handleSendMessage} className="send-button">
          Отправить
        </button>

        {/* Настройки для броска кубиков */}
        <div className="dice-settings">
          <h3>Настройки броска</h3>
          <div className="settings-row">
            <button onClick={decreaseDiceCount} className="adjust-button">-</button>
            <span className="settings-value">{diceCount}</span>
            <button onClick={increaseDiceCount} className="adjust-button">+</button>
            <span className="settings-label">Количество кубов</span>
          </div>
          <div className="settings-row">
            <button onClick={decreaseModifier} className="adjust-button">-</button>
            <span className="settings-value">{modifier}</span>
            <button onClick={increaseModifier} className="adjust-button">+</button>
            <span className="settings-label">Модификатор</span>
          </div>
        </div>

        {/* Кнопки для броска кубиков */}
        <div className="dice-buttons">
          {['d4', 'd6', 'd10', 'd12', 'd20', 'd100'].map((dice) => {
            const sides = parseInt(dice.slice(1), 10);
            return (
              <button key={dice} onClick={() => handleDiceRoll(sides)} className="dice-button">
                {dice}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
