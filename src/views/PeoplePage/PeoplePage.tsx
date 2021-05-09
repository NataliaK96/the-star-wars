import React, { useCallback, useEffect, useState } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import {
  Main,
  WrapperPeople,
  WrapperGender,
  WrapperButtons,
  GenderTitle,
  GenderImage,
} from './People.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card';
import { TMan } from 'types';
import { CardListInfo } from 'components/CardListInfo';
import { NavLink } from 'react-router-dom';
import { GoBack } from 'components/Buttons';
import { Paginator } from 'components/Paginator';
import male from 'assets/images/male.png';
import female from 'assets/images/female.png';
import unknown from 'assets/images/unknown.png';
import { dateFormatting } from 'utils';
import { Loader } from 'components/Loader';

const PeoplePage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const { people, fetchPeople } = store;
  const { data, context } = people;

  const init = useCallback(async () => {
    setLoading(true);
    await fetchPeople(1);
    setLoading(false);
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
      created,
      edited,
    } = man;
    const info = [
      { title: 'Birth Year', value: birth_year },
      { title: 'Eye Color', value: eye_color },
      { title: 'Hair Color', value: hair_color },
      { title: 'Height', value: height },
      { title: 'Mass', value: mass },
      { title: 'Skin Color', value: skin_color },
      { title: 'Created', value: dateFormatting(created) },
      { title: 'Edited', value: dateFormatting(edited) },
    ];
    return (
      <Card key={id} title={name}>
        <WrapperGender>
          <GenderTitle>Gender</GenderTitle>
          <GenderImage
            src={
              gender === 'male' ? male : gender === 'female' ? female : unknown
            }
            alt="gender"
          />
        </WrapperGender>
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
            fetchPeople(page);
          }}
        />
      </WrapperButtons>
      <WrapperPeople>{isLoading ? <Loader /> : CardItem}</WrapperPeople>
      <Footer />
    </Main>
  );
};
export default observer(PeoplePage);
