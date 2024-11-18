import React from 'react';
import Inventory from './Inventory';
import ChatApp from './ChatApp';
import '../styles/MasterScreen.css';

const MasterScreen = () => {
  return (
    <div className="master-screen-container">
      <div className="inventory-section">
        <Inventory />
      </div>
      <div className="main-section">
        <ChatApp />
      </div>
    </div>
  );
};

export default MasterScreen;
