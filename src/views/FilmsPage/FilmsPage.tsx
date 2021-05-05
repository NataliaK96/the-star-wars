import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Films.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'

const FilmsPage = () => {
  const { films, fetchFilms } = store;
  const data = films;
  const init = useCallback(async () => {
    fetchFilms();
  }, [fetchFilms]);
  useEffect(() => {
    init();
  }, [init]);
  if (!data) return null;

  return (
    <Main>
      <Card>
    </Card>
      <Footer />
    </Main>
  );
};
export default observer(FilmsPage);