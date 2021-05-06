import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main, WrapperPeople } from './People.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card';
import { TMan } from 'types';
import { CardListInfo } from 'components/CardListInfo';
import { NavLink } from 'react-router-dom';
import { GoBack } from 'components/Buttons';

const PeoplePage = () => {
  const { people, fetchPeople } = store;
  const { data, context } = people;

  const init = useCallback(async () => {
    await fetchPeople();
  }, [fetchPeople]);

  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;

  const CardItem = data.map((man: TMan) => {
    const {
      name,
      gender,
      birth_year,
      eye_color,
      hair_color,
      height,
      mass,
      skin_color,
      id,
    } = man;
    const info = [
      { title: 'Gender', value: gender },
      { title: 'Birth Year', value: birth_year },
      { title: 'Eye Color', value: eye_color },
      { title: 'Hair Color', value: hair_color },
      { title: 'Height', value: height },
      { title: 'Mass', value: mass },
      { title: 'Skin Color', value: skin_color },
    ];
    return (
      <Card key={id} title={name}>
        <CardListInfo data={info} />
      </Card>
    );
  });
  return (
    <Main>
      <NavLink to="/">
        <GoBack />
      </NavLink>
      <WrapperPeople>{CardItem}</WrapperPeople>
      <Footer />
    </Main>
  );
};
export default observer(PeoplePage);
