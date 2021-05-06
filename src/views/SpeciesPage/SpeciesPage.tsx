import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Species.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'

const SpeciesPage = () => {
  const { species, fetchSpecies } = store;
  const data = species;
  const init = useCallback(async () => {
    fetchSpecies();
  }, [fetchSpecies]);
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

export default observer(SpeciesPage);
