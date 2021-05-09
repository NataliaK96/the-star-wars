import { types } from 'mobx-state-tree';

export const MPlanet = types.model({
  name: types.string,
  diameter: types.string,
  rotation_period: types.string,
  orbital_period: types.string,
  gravity: types.string,
  population: types.string,
  climate: types.string,
  terrain: types.string,
  surface_water: types.string,
  residents: types.array(types.string),
  films: types.array(types.string),
  url: types.string,
  created: types.string,
  edited: types.string,
});
