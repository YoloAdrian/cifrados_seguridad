// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router';  

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />  
      </Router>
    </div>
  );
}

export default App;
