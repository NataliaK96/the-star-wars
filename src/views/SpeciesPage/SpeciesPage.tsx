import React, { useCallback, useEffect, useState } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main, WrapperButtons, WrapperSpecies } from './Species.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card';
import { TSpecies } from 'types';
import { CardListInfo } from 'components/CardListInfo';
import { NavLink } from 'react-router-dom';
import { GoBack } from 'components/Buttons';
import { dateFormatting } from 'utils';
import { Paginator } from 'components/Paginator';
import { Loader } from 'components/Loader';

const SpeciesPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const { species, fetchSpecies } = store;
  const { data, context } = species;

  const init = useCallback(async () => {
    setLoading(true);
    await fetchSpecies(1);
    setLoading(false);
  }, [fetchSpecies]);
  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;

  const CardItem = data.map((species: TSpecies) => {
    const {
      name,
      classification,
      designation,
      average_height,
      average_lifespan,
      eye_colors,
      hair_colors,
      skin_colors,
      language,
      created,
      edited,
    } = species;
    const info = [
      { title: 'Classification', value: classification },
      { title: 'Designation', value: designation },
      { title: 'Average height', value: average_height },
      { title: 'Average lifespan', value: average_lifespan },
      { title: 'Eye colors', value: eye_colors },
      { title: 'Hair colors', value: hair_colors },
      { title: 'Skin colors', value: skin_colors },
      { title: 'Language', value: language },
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
        <NavLink to="/">
          <GoBack />
        </NavLink>
        <Paginator
          current={context?.current || 1}
          total={context?.count || 0}
          onChange={(page) => {
            fetchSpecies(page);
          }}
        />
      </WrapperButtons>
      <WrapperSpecies>{isLoading ? <Loader /> : CardItem}</WrapperSpecies>
      <Footer />
    </Main>
  );
};

export default observer(SpeciesPage);
