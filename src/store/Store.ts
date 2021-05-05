import { flow, types } from 'mobx-state-tree';
import { MSections, MFilm, MMan } from './../models';
import { getSections, getFilms, getPeople } from './../api';

const Store = types
  .model({
    sections: types.maybeNull(MSections),
    films: types.array(MFilm),
    people: types.array(MMan),
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
        console.log(films)
        self.films = films;
      } catch (error) {
        console.error(error);
      }
    }),
    fetchPeople: flow(function* () {
      try {
        const people = yield getPeople();
        console.log(people)
        self.people = people;
      } catch (error) {
        console.error(error);
      }
    }),
  }));

export default Store;
