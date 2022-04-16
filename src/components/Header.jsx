import React from 'react';

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
          <div className='input-wrapper w-full md:w-96 h-14 drop-shadow rounded-md overflow-hidden'>
            <input className='w-full h-full px-6' type='search' name='search' id='search' placeholder='Search for a country...' />
          </div>
          <div className='filter-wrapper w-48 h-14 drop-shadow rounded-md overflow-hidden'>
            <select className='block w-full h-full bg-white px-4' name='region' id='region'>
              <label htmlFor='region'>Filter by Region</label>
              <option value='africa'>Africa</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
