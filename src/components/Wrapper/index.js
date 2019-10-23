import React from 'react';
import Card from '../Card';
import items from '../../utils/LocalData';

function Wrapper() {
  return (
    <div className='flex flex-wrap justify-around bg-white rounded mt-6 shadow p-2 max-w-xl mx-auto py-6'>
      {items.map(item => (
        <Card key={item.id} name={item.name} icon={item.icon} />
      ))}
    </div>
  );
}

export default Wrapper;
