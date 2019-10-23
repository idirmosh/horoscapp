import React from 'react';
import { Logo } from '../../utils/svg';

function Header() {
  return (
    <nav className='bg-black'>
      <ul className='flex justify-between max-w-xl mx-auto py-6'>
        <div className='flex'>
          <Logo />
          <a href='/' className='text-white uppercase'>
            Horosc<span className='font-bold text-white uppercase'>App</span>
          </a>
        </div>
        <div className='flex'>
          <li className='mr-6'>
            <a className='text-white hover:text-gray-300' href='/'>
              Github Repo
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Header;
