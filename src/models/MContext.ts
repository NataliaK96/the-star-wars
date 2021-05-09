import { types } from 'mobx-state-tree';

export const MContext = types.model({
  count: types.maybeNull(types.number),
  next: types.maybeNull(types.number),
  previous: types.maybeNull(types.number),
  current: types.maybeNull(types.number),
});
