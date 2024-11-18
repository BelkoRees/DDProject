import React, { useState } from 'react';
import '../styles/Inventory.css';
import Cross from '../assets/icons/cross.svg';
import Edit from '../assets/icons/UserEdit.svg';
import PlusIcon from '../assets/icons/Plus.svg';
import MinusIcon from '../assets/icons/Minus.svg';
import SideMenu from './SideMenu';
import MenuIcon from '../assets/icons/menu.svg';

const Inventory = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingText, setEditingText] = useState('');
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [showMenu, setShowMenu] = useState(false);  // Меню скрыто по умолчанию

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleEditItem = (index) => {
    setEditingIndex(index);
    setEditingText(items[index]);
  };

  const handleSaveEdit = () => {
    if (editingText.trim() !== '') {
      const updatedItems = items.map((item, i) =>
        i === editingIndex ? editingText : item
      );
      setItems(updatedItems);
      setEditingIndex(null);
      setEditingText('');
    }
  };

  const handleEditKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSaveEdit();
    }
  };

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const decrementCounter1 = () => {
    setCounter1(counter1 - 1);
  };

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const decrementCounter2 = () => {
    setCounter2(counter2 - 1);
  };

  const incrementCounter3 = () => {
    setCounter3(counter3 + 1);
  };

  const decrementCounter3 = () => {
    setCounter3(counter3 - 1);
  };

  const incrementCounter4 = () => {
    setCounter4(counter4 + 1);
  };

  const decrementCounter4 = () => {
    setCounter4(counter4 - 1);
  };

  return (
    <div className="inventory-container">
      <div className="inventory-header">
        <h3>Инвентарь</h3>
        {/* Кнопка для открытия бокового меню */}
        <button onClick={() => setShowMenu(true)} className="menu-button">
          <img src={MenuIcon} alt="Menu" />
        </button>
      </div>
      <div className="inventory-items">
        <ul className="inventory-list">
          {items.map((item, i) => (
            <li key={i} className="inventory-item">
              {editingIndex === i ? (
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                  onKeyDown={handleEditKeyDown}
                  placeholder="Редактировать предмет"
                />
              ) : (
                <>
                  {item}
                  <img
                    src={Edit}
                    alt="Редактировать"
                    className="icon edit-icon"
                    onClick={() => handleEditItem(i)}
                  />
                  <img
                    src={Cross}
                    alt="Удалить"
                    className="icon delete-icon"
                    onClick={() => handleDeleteItem(i)}
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="input-section">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Введите предмет"
        />
        <button onClick={handleAddItem}>Добавить</button>
      </div>

      <div className="Coins">
        <div className="counter-section">
          <div className="number">{counter1}</div>
          <div className="text">
            <button onClick={decrementCounter1}>
              <img src={MinusIcon} alt="Minus" />
            </button>
            <p>мм</p>
            <button onClick={incrementCounter1}>
              <img src={PlusIcon} alt="Plus" />
            </button>
          </div> 
        </div>
        <div className="counter-section">
          <div className="number">{counter2}</div>
          <div className="text">
            <button onClick={decrementCounter2}>
              <img src={MinusIcon} alt="Minus" />
            </button>
            <p>cм</p>
            <button onClick={incrementCounter2}>
              <img src={PlusIcon} alt="Plus" />
            </button>
          </div> 
        </div>
        <div className="counter-section">
          <div className="number">{counter3}</div>
          <div className="text">
            <button onClick={decrementCounter3}>
              <img src={MinusIcon} alt="Minus" />
            </button>
            <p>зм</p>
            <button onClick={incrementCounter3}>
              <img src={PlusIcon} alt="Plus" />
            </button>
          </div> 
        </div>
        <div className="counter-section">
          <div className="number">{counter4}</div>
          <div className="text">
            <button onClick={decrementCounter4}>
              <img src={MinusIcon} alt="Minus" />
            </button>
            <p>пм</p>
            <button onClick={incrementCounter4}>
              <img src={PlusIcon} alt="Plus" />
            </button>
          </div> 
        </div>
      </div>

      {/* Показать меню только если состояние showMenu истинно */}
      {showMenu && <SideMenu onClose={() => setShowMenu(false)} />}
    </div>
  );
};

export default Inventory;
