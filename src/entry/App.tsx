import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from '../views/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <MainPage />} />
    </div>
  );
}

export default App;
