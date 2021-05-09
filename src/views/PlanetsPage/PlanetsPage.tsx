import React, { useCallback, useEffect, useState } from 'react';
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
import { dateFormatting, onlyUnique } from 'utils';
import { Loader } from 'components/Loader';

const PlanetsPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const { planets, fetchPlanets } = store;
  const { data, context } = planets;

  const [filteredData, setFilteredData] = useState<TPlanet[]>(data);

  const init = useCallback(async () => {
    setLoading(true);
    await fetchPlanets(1);
    setLoading(false);
  }, [fetchPlanets]);
  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;

  const climateVariants = data
    .reduce((acc: any[], planet) => {
      return acc.concat(planet.climate.split(',').map((t) => t.trim()));
    }, [])
    .filter(onlyUnique);

  const onFilterByClimate = (climate: string) => {
    const filtered = data.filter((d) => d.climate.indexOf(climate) !== -1);
    setFilteredData(filtered);
  };

  const onFilterByTerrain = (climate: string) => {
    const filtered = data.filter((d) => d.terrain.indexOf(climate) !== -1);
    setFilteredData(filtered);
  };

  const terrainVariants = data
    .reduce((acc: any[], planet) => {
      return acc.concat(planet.terrain.split(',').map((t) => t.trim()));
    }, [])
    .filter(onlyUnique);

  const CardItem = filteredData.map((planet: TPlanet) => {
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
          <Filter
            climateVariants={climateVariants}
            terrainVariants={terrainVariants}
            onFilterByClimate={onFilterByClimate}
            onFilterByTerrain={onFilterByTerrain}
            reset={() => setFilteredData(data)}
          />
        </BackAndFilter>
        <Paginator
          current={context?.current || 1}
          total={context?.count || 0}
          onChange={(page) => {
            fetchPlanets(page);
          }}
        />
      </WrapperButtons>
      <WrapperPlanets>{isLoading ? <Loader /> : CardItem}</WrapperPlanets>
      <Footer />
    </Main>
  );
};

export default observer(PlanetsPage);
