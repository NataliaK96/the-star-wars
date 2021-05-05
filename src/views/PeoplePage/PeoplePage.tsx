import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './People.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'

const PeoplePage = () => {
  const { people, fetchPeople } = store;
  const data = people;
  const init = useCallback(async () => {
    fetchPeople();
  }, [fetchPeople]);
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
export default observer(PeoplePage);
