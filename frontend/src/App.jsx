import './styles/App.css';
import React from 'react';
import MainPage from './MainPage';
import PlayerScreen from './components/PlayerScreen.jsx';
import MasterScreen from './components/MasterScreen.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Главная страница */}
          <Route path="/player" element={<PlayerScreen />} /> {/* Страница с экраном игрока */}
          <Route path="/master" element={<MasterScreen />} /> {/* Страница с экраном мастера */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
