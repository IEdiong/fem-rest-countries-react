import React from 'react';

// import Filter from './common/Filter';
import SearchBar from './common/SearchBar';

const Header = () => {
  return (
    <header className='w-full'>
      <div aria-label='banner' className='shadow-md w-full px-4 bg-white'>
        <div className='container mx-auto flex items-center justify-between py-10 '>
          <h1 className='font-extrabold dark:text-white'>Where in the world?</h1>
          <button className='capitalize'>dark mode</button>
        </div>
      </div>
      <div aria-label='toolbar' className='px-4 '>
        <div className='container mx-auto mt-5 h-40 flex flex-col md:flex-row justify-between items-start'>
          <SearchBar />
          {/* <Filter /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
