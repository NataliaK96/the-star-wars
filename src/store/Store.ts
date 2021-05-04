import { flow, types } from 'mobx-state-tree';
import { MSections } from './../models/MSections';
import { getSections } from './../api';

const Store = types
  .model({
    sections: types.maybeNull(MSections),
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
  }));

export default Store;
