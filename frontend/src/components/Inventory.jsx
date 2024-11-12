import React from 'react';
//import './Inventory.css'; // Add CSS 

const Inventory = () => {
  return (
    <div className="inventory-container">
      <h3>Инвентарь</h3>
      <ul className="inventory-list">
        {Array(10).fill().map((_, i) => (
          <li key={i} className="inventory-item">Item {i + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
