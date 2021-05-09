import React, { useCallback, useEffect, useState } from 'react';
import { Table } from 'components/Table';
import store from 'store';
import { observer } from 'mobx-react';
import { Main } from './Main.styles';
import { Footer } from 'components/Footer';
import { Loader } from 'components/Loader';

const MainPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const { sections, fetchSections } = store;
  const data =
    sections &&
    Object.entries(sections).map((i) => ({
      title: i[0],
      api: i[1],
      key: i[1],
    }));
  const init = useCallback(async () => {
    setLoading(true);
    await fetchSections();
    setLoading(false);
  }, [fetchSections]);
  useEffect(() => {
    init();
  }, [init]);
  if (!data) return null;
  return (
    <Main>
      {isLoading ? <Loader /> : <Table data={data} />}
      <Footer />
    </Main>
  );
};
export default observer(MainPage);
