import { useState } from 'react';

const Filter = ({ regionSelected }) => {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const styles = () => {
    if (menuIsOpen) {
      return 'transition-opacity ease-out duration-200 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 focus:outline-none transform opacity-100 scale-100'
    } else {
      return 'origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-0 focus:outline-none overflow-hidden h-0 mt-0 duration-150'
    }
  }

  const handleToggle = () => {
    setMenuIsOpen(!menuIsOpen);
  }


  return (
    <div className='relative inline-block text-left w-56'>
      <div>
        <button
          type='button'
          className='inline-flex justify-between items-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 h-14 drop-shadow'
          id='filterByRegion-button'
          aria-expanded='true'
          aria-haspopup='true'
          onClick={handleToggle}
        >
          Filter by Region
          <svg className='-mr-1 ml-2 h-5 w-5' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' aria-hidden='true'>
            <path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
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
        className={styles()}
        role='menu'
        aria-orientation='vertical'
        aria-labelledby='filterByRegion-button'
        tabIndex='-1'
      >
        <div className='py-1' role='none'>
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          {regions.map((region, id) => (
            <button 
            key={id}
            className='text-gray-700 block px-4 py-2 text-sm transition-all ease-in-out w-full text-left hover:bg-gray-100 hover:text-gray-900 hover:pl-6'
            role='menuitem'
            tabIndex='-1'
            id='menu-item-0'
            onClick={() => {
              handleToggle() 
              return regionSelected(region)}}
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
