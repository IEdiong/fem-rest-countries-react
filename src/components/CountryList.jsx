import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.com/v2/all';
    // let { url, countries: data } = this.state;
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
    }

    fetchData(url);
  });

  return (
    <main className='px-4'>
      <div className='container mx-auto flex flex-wrap justify-between gap-16'>
        {countries.map((countryData) => (
          <CountryCard key={Number(countryData.numericCode)} country={countryData} />
        ))}
      </div>
    </main>
  );
};

export default CountriesList;

// Come back to this later
/*
getFavouriteCountries = (data) => {
  const fav = ['Germany', 'United States of America', 'Brazil', 'Iceland'];

  return data.filter((countryData) => fav.includes(countryData.name));
};

const favouriteCountry = this.getFavouriteCountries(this.state.countries);
// console.log(this.state.countries);
*/
