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
          {/* <div className='filter-wrapper w-48 h-14 drop-shadow rounded-md overflow-hidden'> */}
          {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
          <div class='relative inline-block text-left w-56'>
            <div>
              <button
                type='button'
                class='inline-flex justify-between items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 h-14 drop-shadow'
                id='filterByRegion-button'
                aria-expanded='true'
                aria-haspopup='true'
              >
                Filter by Region
                {/* <!-- Heroicon name: solid/chevron-down --> */}
                <svg class='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
                  <path fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' />
                </svg>
              </button>
            </div>

            {/* Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95" */}

            <div
              class='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='filterByRegion-button'
              tabindex='-1'
            >
              <div class='py-1' role='none'>
                {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
                <a href='/' class='text-gray-700 block px-4 py-2 text-sm transition-all ease-in-out hover:bg-gray-100 hover:text-gray-900 hover:pl-6' role='menuitem' tabindex='-1' id='menu-item-0'>
                  Africa
                </a>
                <a href='/' class='text-gray-700 block px-4 py-2 text-sm transition-all ease-in-out hover:bg-gray-100 hover:text-gray-900 hover:pl-6' role='menuitem' tabindex='-1' id='menu-item-1'>
                  America
                </a>
                <a href='/' class='text-gray-700 block px-4 py-2 text-sm transition-all ease-in-out hover:bg-gray-100 hover:text-gray-900 hover:pl-6' role='menuitem' tabindex='-1' id='menu-item-2'>
                  Asia
                </a>
                <a href='/' class='text-gray-700 block px-4 py-2 text-sm transition-all ease-in-out hover:bg-gray-100 hover:text-gray-900 hover:pl-6' role='menuitem' tabindex='-1' id='menu-item-2'>
                  Europe
                </a>
                <a href='/' class='text-gray-700 block px-4 py-2 text-sm transition-all ease-in-out hover:bg-gray-100 hover:text-gray-900 hover:pl-6' role='menuitem' tabindex='-1' id='menu-item-2'>
                  Oceania
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </header>
  );
};

export default Header;
