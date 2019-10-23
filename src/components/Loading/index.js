import React from 'react';
import { Spinner } from '../../utils/svg';

function Loading() {
  return (
    <div className='flex flex-row items-center p-2 mb-6'>
      <div className='mr-4'>
        <Spinner />
      </div>
      <div>
        <h1>Please wait while the data loads...</h1>
      </div>
    </div>
  );
}

export default Loading;
