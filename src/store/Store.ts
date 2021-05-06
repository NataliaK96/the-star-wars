import { flow, types } from 'mobx-state-tree';
import {
  MSections,
  MFilm,
  MMan,
  MPlanet,
  MSpecies,
  MStarship,
  MVehicle,
  MContext,
} from 'models';
import {
  getSections,
  getFilms,
  getPeople,
  getPlanets,
  getSpecies,
  getStarships,
  getVehicles,
} from 'api';
import { createContext } from 'utils';

const Store = types
  .model({
    sections: types.maybeNull(MSections),
    films: types.optional(
      types.model({
        data: types.array(MFilm),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    people: types.optional(
      types.model({
        data: types.array(MMan),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    planets: types.optional(
      types.model({
        data: types.array(MPlanet),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    species: types.optional(
      types.model({
        data: types.array(MSpecies),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    starships: types.optional(
      types.model({
        data: types.array(MStarship),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
    vehicles: types.optional(
      types.model({
        data: types.array(MVehicle),
        context: types.optional(MContext, {}),
      }),
      {}
    ),
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
        const { count, next, previous, results } = yield getFilms();
        self.films.context = createContext(count, next, previous);
        self.films.data = results;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchPeople: flow(function* () {
      try {
        const { count, next, previous, results } = yield getPeople();
        self.people.context = createContext(count, next, previous);
        const people = results.map((man: any) => {
          const splitedUrl = man.url?.split('/');
          const id = Number(splitedUrl[splitedUrl.length - 2]);
          return { ...man, id };
        });
        self.people.data = people;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchPlanets: flow(function* () {
      try {
        const { count, next, previous, results } = yield getPlanets();
        self.planets.context = createContext(count, next, previous);
        self.planets.data = results;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchSpecies: flow(function* () {
      try {
        const { count, next, previous, results } = yield getSpecies();
        self.species.context = createContext(count, next, previous);
        self.species.data = results;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchStarships: flow(function* () {
      try {
        const starships = yield getStarships();
        console.log('starships:', starships);
        self.starships = starships;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchVehicles: flow(function* () {
      try {
        const vehicles = yield getVehicles();
        console.log('vehicles:', vehicles);
        self.vehicles = vehicles;
      } catch (error) {
        console.error(error);
      }
    }),
  }));

export default Store;
