import React from 'react';
/*
const countryData = [
  {
    name: 'Germany',
    capital: 'Berlin',
    region: 'Europe',
    population: 83240525,
    flags: {
      svg: 'https://flagcdn.com/de.svg',
      png: 'https://flagcdn.com/w320/de.png',
    },
  },
];
*/

const CountryCard = ({ country }) => {
  // const country = countryData[0];

  return (
    <article className='w-64 rounded-md overflow-hidden bg-white drop-shadow-md'>
      <div className='card-image'>
        <img className='w-full aspect-[5/3]' src={country.flags.png} alt='germany flag' />
      </div>
      <div className='card-body p-6'>
        <h2 className='card-title font-extrabold'>{country.name}</h2>
        <ul className='card-info my-4'>
          <li className='font-semibold'>
            Population: <span className='font-light'>{new Intl.NumberFormat('en-GB', { maximumSignificantDigits: 3 }).format(country.population)}</span>
          </li>
          <li className='font-semibold'>
            Region: <span className='font-light'>{country.region}</span>
          </li>
          <li className='font-semibold'>
            Capital: <span className='font-light'>{country.capital}</span>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default CountryCard;
