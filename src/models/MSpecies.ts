import { types } from 'mobx-state-tree';

export const MSpecies = types.model({
  name: types.string,
  classification: types.string,
  designation: types.string,
  average_height: types.string,
  average_lifespan: types.string,
  eye_colors: types.string,
  hair_colors: types.string,
  skin_colors: types.string,
  language: types.string,
  homeworld: types.maybeNull(types.string),
  people: types.array(types.string),
  films: types.array(types.string),
  url: types.string,
  created: types.string,
  edited: types.string,
});
