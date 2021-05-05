import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Planets.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'

const PlanetsPage = () => {
  const { planets, fetchPlanets } = store;
  const data = planets;
  const init = useCallback(async () => {
    fetchPlanets();
  }, [fetchPlanets]);
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

export default observer(PlanetsPage);
