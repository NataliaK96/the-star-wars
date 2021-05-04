import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import MainPage from '../views/MainPage/MainPage';
import FilmsPage from './../views/FilmsPage';
import PeoplePage from './../views/PeoplePage';
import PlanetsPage from './../views/PlanetsPage';
import SpeciesPage from './../views/SpeciesPage';
import StarshipPage from './../views/StarshipsPage';
import VehiclesPage from './../views/VehiclesPage';

function App() {
  return (
    <div className="App">
      <Route path="/" exact render={() => <MainPage />} />
      <Route path="/films" render={() => <FilmsPage />} />
      <Route path="/people" render={() => <PeoplePage />} />
      <Route path="/planets" render={() => <PlanetsPage />} />
      <Route path="/species" render={() => <SpeciesPage />} />
      <Route path="/starships" render={() => <StarshipPage />} />
      <Route path="/vehicles" render={() => <VehiclesPage />} />
    </div>
  );
}

export default App;
