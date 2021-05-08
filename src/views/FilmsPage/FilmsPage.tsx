import React, { useCallback, useEffect } from 'react';
import store from 'store';
import { observer } from 'mobx-react';
import { Main, WrapperFilms, WrapperButtons } from './Films.styles';
import { Footer } from 'components/Footer';
import { Card } from 'components/Card';
import { TFilm } from 'types';
import { CardListInfo } from 'components/CardListInfo';
import { NavLink } from 'react-router-dom';
import { GoBack } from 'components/Buttons';
import { dateFormatting } from 'utils';

const FilmsPage = () => {
  const { films, fetchFilms } = store;
  const { data } = films;
  const init = useCallback(async () => {
    await fetchFilms(1);
  }, [fetchFilms]);

  useEffect(() => {
    init();
  }, [init]);

  if (!data) return null;

  const CardItem = data.map((film: TFilm) => {
    const {
      title,
      episode_id,
      opening_crawl,
      director,
      producer,
      release_date,
    } = film;
    const info = [
      { title: 'Plot', value: opening_crawl },
      { title: 'Director', value: director },
      { title: 'Producer ', value: producer },
      { title: 'Release', value: dateFormatting(release_date) },
    ];
    return (
      <Card key={episode_id} title={title}>
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
      </WrapperButtons>
      <WrapperFilms>{CardItem}</WrapperFilms>
      <Footer />
    </Main>
  );
};
export default observer(FilmsPage);
