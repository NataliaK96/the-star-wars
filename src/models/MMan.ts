import { types } from 'mobx-state-tree';

export const MMan = types.model({
  name: types.string,
  birth_year: types.string,
  eye_color: types.string,
  gender: types.string,
  hair_color: types.string,
  height: types.string,
  mass: types.string,
  skin_color: types.string,
  homeworld: types.string,
  films: types.array(types.string),
  species: types.array(types.string),
  starships: types.array(types.string),
  vehicles: types.array(types.string),
  url: types.string,
  created: types.string,
  edited: types.string,
  id: types.maybeNull(types.number),
});
