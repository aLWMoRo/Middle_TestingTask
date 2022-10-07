import React, { Fragment, useState } from 'react';
import DataFetching from './Api/DataFetching';
import './assets/styles/app.scss';
import Card from './components/Card/Card';
import Container from './components/Container/Container';
import H1 from './components/Text/Headline/H1';

const App = () =>
{
  const [limit, setLimit] = useState(20);

  return (
    <Fragment>
      <div className="app">
        <H1 text={'Специализированные дисциплины'} />
        <Container
          FirstList=
          {
            [<DataFetching limit={limit} page={1} />]
          }
          SecondList=
          {
            [<DataFetching limit={limit} page={2} />]
          }
          title={'Управление малым бизнесом'}
        />
        <Container
          FirstList=
          {
            [<DataFetching limit={limit} page={3} />]
          }
          SecondList=
          {
            [<DataFetching limit={limit} page={4} />]
          }
          title={'Управление малым бизнесом'}
        />
        <Card />
      </div>
    </Fragment>
  );
}

export default App;
