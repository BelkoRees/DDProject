import React, { useState } from 'react';
import '../styles/GameListModal.css';
import crossIcon from '../assets/icons/cross.svg';

function GameListModal({ isVisible, onClose, onEnterGame }) { // Добавляем onEnterGame как пропс
  const [games, setGames] = useState([
    { title: 'Пример игры 1', description: 'Описание для игры 1', status: 'Активна', enter: 'Войти' },
    { title: 'Пример игры 2', description: 'Описание для игры 2', status: 'Завершена', enter: 'Войти' },
  ]);
  const [newGame, setNewGame] = useState({ title: '', description: '', status: '', enter: 'Войти' });
  const [isAdding, setIsAdding] = useState(false);

  if (!isVisible) return null;

  // Обработчик для кнопки "Войти"
  const handleEnterClick = () => {
    if (onEnterGame) {
      onEnterGame();  // Вызываем onEnterGame переданный через пропсы
    }
  };

  const handleAddGame = () => {
    setGames([...games, newGame]);
    setNewGame({ title: '', description: '', status: '', enter: 'Войти' });
    setIsAdding(false);
  };

  const handleInputChange = (e, field) => {
    setNewGame({ ...newGame, [field]: e.target.value });
  };

  const handleCreateClick = () => {
    setIsAdding(true);
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img
            src={crossIcon}
            alt="Close"
            className="close-icon"
            onClick={onClose}
          />
          <h2>Список игр</h2>
          <table className="game-table">
            <thead>
              <tr>
                <th>Название игры</th>
                <th>Описание игры</th>
                <th>Статус игры</th>
                <th>Вход</th>
              </tr>
            </thead>
            <tbody>
              {games.map((game, index) => (
                <tr key={index}>
                  <td>{game.title}</td>
                  <td>{game.description}</td>
                  <td>{game.status}</td>
                  <td>
                    <button onClick={handleEnterClick}>{game.enter}</button>
                  </td>
                </tr>
              ))}
              {isAdding && (
                <tr>
                  <td>
                    <input
                      type="text"
                      value={newGame.title}
                      onChange={(e) => handleInputChange(e, 'title')}
                      placeholder="Название игры"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={newGame.description}
                      onChange={(e) => handleInputChange(e, 'description')}
                      placeholder="Описание игры"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={newGame.status}
                      onChange={(e) => handleInputChange(e, 'status')}
                      placeholder="Статус игры"
                    />
                  </td>
                  <td>
                    <button onClick={handleAddGame}>Добавить</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="create-game-button-container">
            <button className="create-game-button" onClick={handleCreateClick}>
              Создать свою партию
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameListModal;
