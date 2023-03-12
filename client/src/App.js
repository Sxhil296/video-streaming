import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from './Home.js';
import Player from './Player.js';
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route path="/player/:id" element={<Player />}></Route>
    </Routes>
  </Router>
  );
}

export default App;
