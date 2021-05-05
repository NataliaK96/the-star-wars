import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Vehicles.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'

const VehiclesPage = () => {
  const { vehicles, fetchVehicles } = store;
  const data = vehicles;
  const init = useCallback(async () => {
    fetchVehicles();
  }, [fetchVehicles]);
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

export default observer(VehiclesPage);
