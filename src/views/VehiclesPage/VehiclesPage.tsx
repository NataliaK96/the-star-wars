import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main, WrapperVehicles } from './Vehicles.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card'
import { TVehicle } from 'types';
import { CardListInfo } from 'components/CardListInfo';

const VehiclesPage = () => {
  const { vehicles, fetchVehicles } = store;
  const { data, context } = vehicles;

  const init = useCallback(async () => {
    await fetchVehicles();
  }, [fetchVehicles]);
  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;
const CardItem = data.map((vehicle: TVehicle) => {
    const {
      name,
  model,
  vehicle_class ,
  manufacturer,
  length,
  cost_in_credits,
  crew,
  passengers,
  max_atmosphering_speed,
  cargo_capacity,
  consumables,
  created,
  edited,
    } = vehicle;
    const info = [
      { title: 'Model', value: model },
      { title: 'Vehicle class', value: vehicle_class },
      { title: 'Manufacturer', value: manufacturer },
      { title: 'Length', value: length },
      { title: 'Cost in credits', value: cost_in_credits },
      { title: 'Crew', value: crew },
      { title: 'Passengers', value: passengers },
      { title: 'Max atmosphering speed', value: max_atmosphering_speed },
      { title: 'Cargo capacity', value: cargo_capacity },
      { title: 'Consumables', value: consumables },
      { title: 'Created', value: created },
      { title: 'Edited', value: edited },
    ];
    return (
      <Card key={name} title={name}>
        <CardListInfo data={info} />
      </Card>
    );
  });
  return (
    <Main>
      <WrapperVehicles>{CardItem}</WrapperVehicles>
      <Footer />
    </Main>
  );
};

export default observer(VehiclesPage);
