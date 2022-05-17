import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = 'https://restcountries.com/v2/all';
    async function fetchData(url) {
      const response = await fetch(url);
      let data = await response.json();
      let favArr = [];
    
      if (data) {
        ['Germany', 'United States of America', 'Brazil', 'Iceland'].forEach((el) => {
          let tempData = data.find((cty) => cty.name === el);
          favArr.push(tempData);
          data = data.filter((cty) => cty.name !== el);
        });
    
        const fav = [...favArr, ...data];
        setCountries(fav);
      }
    }
    
    fetchData(url);
    console.log('fetch work');
  }, []);

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
