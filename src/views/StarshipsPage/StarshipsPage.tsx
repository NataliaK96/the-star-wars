import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Starships.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'

const StarshipsPage = () => {
  const { starships, fetchStarships } = store;
  const data = starships;
  const init = useCallback(async () => {
    fetchStarships();
  }, [fetchStarships]);
  useEffect(() => {
    init();
  }, [init]);
  if (!data) return null;

  return (
    <Main>
      <Card title=''>
    </Card>
      <Footer />
    </Main>
  );
};

export default observer(StarshipsPage);