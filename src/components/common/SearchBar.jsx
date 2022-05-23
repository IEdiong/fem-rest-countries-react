import React from 'react';

const SearchBar = ({ name, onSearch }) => {

  return (
    <div className='relative flex items-center justify-start input-wrapper w-full md:w-96 h-14 drop-shadow rounded-md overflow-hidden bg-white'>
      <svg xmlns='http://www.w3.org/2000/svg' className='absolute h-6 w-6 mx-6 text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
        <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
      </svg>
      {/* TODO: fix the focus state */}
      <input className='w-full h-full pl-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
      type='text'
      id='search'
      placeholder='Search for a country...'
      value={name}
      onChange={(event) => onSearch(event.target.value)}
      />
      <label htmlFor='search'
      className='sr-only'>Search</label>
    </div>
  );
};

export default SearchBar;
