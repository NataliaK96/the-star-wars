import { flow, types } from 'mobx-state-tree';
import { MSections, MFilm } from './../models';
import { getSections, getFilms } from './../api';

const Store = types
  .model({
    sections: types.maybeNull(MSections),
    films: types.array(MFilm)
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
  }));

export default Store;
