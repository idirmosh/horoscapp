import React from 'react';
import { Date, Sun, Smile, Keyword, Target, LeftArrouw } from '../../utils/svg';

function Detail(props) {
  return (
    <div className='text-sm text-gray-600'>
      {/* Start Top Secion */}
      <div className='flex mb-6 bg-gray-900 rounded py-2 px-4 mx-4 items-center'>
        <a
          className='flex items-center text-white mr-4 text-xs font-bold'
          href='/'>
          <span className='w-6 mr-2'>
            <LeftArrouw />
          </span>
          Go Back
        </a>
      </div>
      {/* Title Top Secion */}
      <div className='px-4'>
        <h1 className='text-xl font-medium text-gray-900'>
          {props.sunsign} Daily Horoscope
        </h1>
        <div className='flex items-center mt-1'>
          <div className='w-3 mr-2'>
            <Date />
          </div>
          <time className='text-gray-700 text-xs'>{props.date}</time>
        </div>
      </div>
      {/* End Top Secion */}
      <hr className='my-4' />

      <div>
        <p className='px-4 text-base'>{props.horoscope}</p>
      </div>

      <hr className='my-4' />
      {/* Buttom Secion */}
      <div className='flex flex-row'>
        <div className='px-6'>
          <div className='flex'>
            <div className='w-6 mr-2'>
              <Sun />
            </div>
            <h5>
              Sunsign :{' '}
              <span className='font-bold text-gray-800'>{props.sunsign}</span>
            </h5>
          </div>
          <div className='flex'>
            <div className='w-6 mr-2'>
              <Target />
            </div>
            <h5>
              Intensity :{' '}
              <span className='font-bold text-gray-800'>{props.intensity}</span>
            </h5>
          </div>
        </div>
        <div className='px-6'>
          <div>
            <div className='flex'>
              <div className='w-6 mr-2'>
                <Smile />
              </div>
              <h5>
                Mood :{' '}
                <span className='font-bold text-gray-800'>{props.mood}</span>
              </h5>
            </div>
            <div className='flex'>
              <div className='w-6 mr-2'>
                <Keyword />
              </div>
              <h5>
                Keywords :{' '}
                <span className='font-bold text-gray-800'>
                  {props.keywords}
                </span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
