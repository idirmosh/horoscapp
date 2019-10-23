import React, { useContext } from 'react';
import FetchContext from '../../context/AppContext';
import { Link } from 'react-router-dom';

function Card({ name, icon }) {
  const { HandleGetData } = useContext(FetchContext);

  return (
    <div className='flex flex-col items-center w-1/3 md:w-1/4 p-2 mb-6'>
      <Link
        to={`/${name.toLowerCase()}/today`}
        onClick={e => HandleGetData(e, name)}
        className='text-gray-600 hover:text-gray-800'>
        <img className='h-12 mb-2 mx-auto' src={icon} alt={name} />
        <h2 className='font-bold text-lg'>{name}</h2>
      </Link>
    </div>
  );
}

export default Card;
