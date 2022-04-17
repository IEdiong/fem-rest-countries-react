import React from 'react';

import Filter from './common/Filter';

const Header = () => {
  return (
    <header className='w-full'>
      <div aria-label='banner' className='shadow-md w-full px-4 bg-white'>
        <div className='container mx-auto flex items-center justify-between py-10 '>
          <h1 className='font-extrabold dark:text-white'>Where in the world?</h1>
          <div className='capitalize'>dark mode</div>
        </div>
      </div>
      <div aria-label='toolbar' className='px-4 '>
        <div className='container mx-auto mt-5 h-40 flex flex-col md:flex-row justify-between items-start'>
          <div className='relative flex items-center justify-start input-wrapper w-full md:w-96 h-14 drop-shadow rounded-md overflow-hidden bg-white'>
            <svg xmlns='http://www.w3.org/2000/svg' className='absolute h-6 w-6 mx-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
            {/* TODO: fix the focus state */}
            <input className='w-full h-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500' type='search' name='search' id='search' placeholder='Search for a country...' />
          </div>
          <Filter />
        </div>
      </div>
    </header>
  );
};

export default Header;
