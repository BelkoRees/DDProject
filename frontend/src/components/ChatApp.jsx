import React, { useState } from 'react';

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // Состояние для хранения сообщений
  const [input, setInput] = useState(''); // Состояние для хранения текста в поле ввода

  // Функция для отправки сообщения
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, input]); // Добавляем новое сообщение в список сообщений
      setInput(''); // Очищаем поле ввода
    }
  };

  // Функция для обработки нажатия клавиши Enter
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage(); // Отправляем сообщение при нажатии Enter
    }
  };

  // Функция для генерации случайного числа в диапазоне от 1 до max
  const rollDice = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  // Функция для обработки броска кубика и отправки результата в чат
  const handleDiceRoll = (sides) => {
    const rollResult = rollDice(sides);
    setMessages([...messages, `Бросок d${sides}: ${rollResult}`]); // Отправляем результат броска в чат
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Окно чата с сообщениями */}
      <div style={{ flex: 1, borderRight: '1px solid #ccc', padding: '10px', overflowY: 'auto' }}>
        <h2>Чат</h2>
        <div style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          {messages.length === 0 ? (
            <p>Нет сообщений. Начните чат!</p>
          ) : (
            messages.map((message, index) => (
              <div key={index} style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>
                {message}
              </div>
            ))
          )}
        </div>
      </div>

      {/* Окно для ввода сообщения и кнопок с кубиками */}
      <div style={{ width: '300px', padding: '10px' }}>
        <h2>Введите сообщение</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Введите сообщение"
          rows="4"
          style={{ width: '100%', padding: '10px', fontSize: '16px' }}
        />
        <button
          onClick={handleSendMessage}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Отправить
        </button>

        {/* Кнопки для броска кубиков */}
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={() => handleDiceRoll(4)}
            style={buttonStyle}
          >
            d4
          </button>
          <button
            onClick={() => handleDiceRoll(6)}
            style={buttonStyle}
          >
            d6
          </button>
          <button
            onClick={() => handleDiceRoll(10)}
            style={buttonStyle}
          >
            d10
          </button>
          <button
            onClick={() => handleDiceRoll(12)}
            style={buttonStyle}
          >
            d12
          </button>
          <button
            onClick={() => handleDiceRoll(20)}
            style={buttonStyle}
          >
            d20
          </button>
          <button
            onClick={() => handleDiceRoll(100)}
            style={buttonStyle}
          >
            d100
          </button>
        </div>
      </div>
    </div>
  );
};

// Стиль для кнопок кубиков
const buttonStyle = {
  width: '48%',
  padding: '10px',
  backgroundColor: '#2196F3',
  color: 'white',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '5px 1%',
};

export default ChatApp;
