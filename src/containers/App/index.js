import React, { useState } from 'react';
import Header from '../../components/Header';
import Wrapper from '../../components/Wrapper';
import Details from '../../components/Details';
import { FetchProvider } from '../../context/AppContext';
import { getDataApi } from '../../customHooks/useFetch';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function HandleGetData(e, name) {
    //e.preventDefault();
    const res = await getDataApi(name.toLowerCase());
    setData(res);
    setIsLoading(false);
    if (error) {
      setError(error);
    }
  }
  const initialeState = {
    data,
    isLoading,
    HandleGetData
  };
  return (
    <>
      <FetchProvider value={initialeState}>
        <Header />
        <Switch>
          <Route exact path='/' component={Wrapper} />
          <Route path='/:name/:day' component={Details} />
        </Switch>
      </FetchProvider>
    </>
  );
}

export default App;
