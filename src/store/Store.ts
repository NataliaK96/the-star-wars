import { flow, types } from 'mobx-state-tree';
import { MSections, MFilm, MMan, MPlanet, MSpecies } from './../models';
import {
  getSections,
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
} from './../api';

const Store = types
  .model({
    sections: types.maybeNull(MSections),
    films: types.array(MFilm),
    people: types.array(MMan),
    planets: types.array(MPlanet),
    species: types.array(MSpecies),
  })
  .actions((self) => ({
    fetchSections: flow(function* () {
      try {
        const sections = yield getSections();
        self.sections = sections;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchFilms: flow(function* () {
      try {
        const films = yield getFilms();
        console.log('films:', films);
        self.films = films;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchPeople: flow(function* () {
      try {
        const people = yield getPeople();
        console.log('people:', people);
        self.people = people;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchPlanets: flow(function* () {
      try {
        const planets = yield getPlanets();
        console.log('planets:', planets);
        self.planets = planets;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchSpecies: flow(function* () {
      try {
        const species = yield getSpecies();
        console.log('species:', species);
        self.species = species;
      } catch (error) {
        console.error(error);
      }
    }),
  }));

export default Store;
