import React, { useCallback, useEffect, useState } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main, WrapperButtons, WrapperStarship } from './Starships.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card';
import { TStarship } from 'types';
import { CardListInfo } from 'components/CardListInfo';
import { NavLink } from 'react-router-dom';
import { GoBack } from 'components/Buttons';
import { dateFormatting } from 'utils';
import { Paginator } from 'components/Paginator';
import { Loader } from 'components/Loader';

const StarshipsPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const { starships, fetchStarships } = store;
  const { data, context } = starships;

  const init = useCallback(async () => {
    setLoading(true);
    await fetchStarships(1);
    setLoading(false);
  }, [fetchStarships]);
  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;
  const CardItem = data.map((starship: TStarship) => {
    const {
      name,
      model,
      starship_class,
      manufacturer,
      cost_in_credits,
      length,
      crew,
      passengers,
      max_atmosphering_speed,
      hyperdrive_rating,
      MGLT,
      cargo_capacity,
      consumables,
      created,
      edited,
    } = starship;
    const info = [
      { title: 'Model', value: model },
      { title: 'Starship class', value: starship_class },
      { title: 'Manufacturer', value: manufacturer },
      { title: 'Cost in credits', value: cost_in_credits },
      { title: 'Length', value: length },
      { title: 'Crew', value: crew },
      { title: 'Passengers', value: passengers },
      { title: 'Max atmosphering speed', value: max_atmosphering_speed },
      { title: 'Hyperdrive rating', value: hyperdrive_rating },
      { title: 'MGLT', value: MGLT },
      { title: 'Cargo capacity', value: cargo_capacity },
      { title: 'Consumables', value: consumables },
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
            fetchStarships(page);
          }}
        />
      </WrapperButtons>
      <WrapperStarship>{isLoading ? <Loader /> : CardItem}</WrapperStarship>
      <Footer />
    </Main>
  );
};

export default observer(StarshipsPage);
