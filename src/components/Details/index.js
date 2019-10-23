import React, { useContext } from 'react';
import FetchContext from '../../context/AppContext';
import Loading from '../Loading';
import Detail from '../Detail';

function Details({ match }) {
  const { data, isLoading } = useContext(FetchContext);
  return (
    <div className='flex flex-wrap justify-around bg-white rounded mt-6 shadow p-2 max-w-xl mx-auto py-6'>
      {isLoading ? (
        <Loading />
      ) : (
        <Detail
          date={data.date}
          sunsign={data.sunsign}
          intensity={data.meta.intensity}
          mood={data.meta.mood}
          keywords={data.meta.keywords}
          horoscope={data.horoscope}
        />
      )}
    </div>
  );
}

export default Details;
