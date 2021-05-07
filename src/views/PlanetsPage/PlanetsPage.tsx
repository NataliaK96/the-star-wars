import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import {
  Main,
  WrapperPlanets,
  WrapperButtons,
  BackAndFilter,
} from './Planets.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card';
import { TPlanet } from 'types';
import { CardListInfo } from 'components/CardListInfo';
import { NavLink } from 'react-router-dom';
import { GoBack } from 'components/Buttons';
import { Filter } from 'components/Filter';
import { Paginator } from 'components/Paginator';
import { dateFormatting } from 'utils';

const PlanetsPage = () => {
  const { planets, fetchPlanets } = store;
  const { data, context } = planets;

  const init = useCallback(async () => {
    await fetchPlanets();
  }, [fetchPlanets]);
  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;

  const CardItem = data.map((planet: TPlanet) => {
    const {
      name,
      diameter,
      rotation_period,
      orbital_period,
      gravity,
      population,
      climate,
      terrain,
      surface_water,
      created,
      edited,
    } = planet;
    const info = [
      { title: 'Diameter', value: diameter },
      { title: 'Rotation period ', value: rotation_period },
      { title: 'Orbital period', value: orbital_period },
      { title: 'Gravity', value: gravity },
      { title: 'Population', value: population },
      { title: 'Climate', value: climate },
      { title: 'Terrain', value: terrain },
      { title: 'Surface Water', value: surface_water },
      { title: 'Created', value: dateFormatting(created) },
      { title: 'Edited', value: dateFormatting(edited) },
    ];
    return (
      <Card key={name} title={name}>
        <CardListInfo data={info} />
      </Card>
    );
  });
  return (
    <Main>
      <WrapperButtons>
        <BackAndFilter>
          <NavLink to="/">
            <GoBack />
          </NavLink>
          <Filter />
        </BackAndFilter>
        <Paginator />
      </WrapperButtons>
      <WrapperPlanets>{CardItem}</WrapperPlanets>
      <Footer />
    </Main>
  );
};

export default observer(PlanetsPage);
