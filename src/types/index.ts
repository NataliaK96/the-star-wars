import { Instance } from 'mobx-state-tree';
import { MFilm, MContext } from 'models';

export type TTableData = {
  title: string;
  api: string;
  key: string;
};

export type TContext = Instance<typeof MContext>;

export type TFilm = Instance<typeof MFilm>;

export type TCardData = {
  title: JSX.Element | string;
};

