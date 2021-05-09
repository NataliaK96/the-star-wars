import React from 'react'
import { Route } from 'react-router-dom'
import { Main, Wrapper } from './App.styles'
import MainPage from 'views/MainPage/MainPage'
import FilmsPage from 'views/FilmsPage'
import PeoplePage from 'views/PeoplePage'
import PlanetsPage from 'views/PlanetsPage'
import SpeciesPage from 'views/SpeciesPage'
import StarshipsPage from 'views/StarshipsPage'
import VehiclesPage from 'views/VehiclesPage'
import { Header } from 'components/Header'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Route path="/" exact render={() => <MainPage />} />
        <Route path="/films" render={() => <FilmsPage />} />
        <Route path="/people" render={() => <PeoplePage />} />
        <Route path="/planets" render={() => <PlanetsPage />} />
        <Route path="/species" render={() => <SpeciesPage />} />
        <Route path="/starships" render={() => <StarshipsPage />} />
        <Route path="/vehicles" render={() => <VehiclesPage />} />
      </Main>
    </Wrapper>
  )
}

export default App
