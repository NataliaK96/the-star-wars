import React, { useCallback, useEffect } from 'react';
import { Table } from 'components/Table';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Main.styles';
import { Footer } from 'components/Footer';

const MainPage = () => {
  const { sections, fetchSections } = store;
  const data =
    sections &&
    Object.entries(sections).map((i) => ({ title: i[0], api: i[1] }));
  const init = useCallback(async () => {
    fetchSections();
  }, [fetchSections]);
  useEffect(() => {
    init();
  }, [init]);
  if (!data) return null;
  return (
    <Main>
      <Table data={data} />
      <Footer/>
    </Main>
  );
};
export default observer(MainPage);
