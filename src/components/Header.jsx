import React from 'react';

const Header = () => {
  return (
    <header className='w-full'>
      <div aria-label='banner' className='shadow-md w-full px-4 bg-white'>
        <div className='container mx-auto flex items-center justify-between py-10 '>
          <h1 className='font-extrabold dark:text-white'>Where in the world?</h1>
          <button className='capitalize'>dark mode</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
