import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';

const CountriesList = ({ name }) => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = 'https://restcountries.com/v2/all';
    async function fetchData(url) {
      try {
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
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    
    fetchData(url);
    console.log('fetch work');
  }, []);

  return (
    <main className='px-4'>
      <div className='container mx-auto flex flex-wrap gap-16'>
        {isLoading && <div>Fetching data, Please wait...</div>}
        {countries.filter((cou) => cou.name.toLowerCase().includes(name.toLowerCase())).map((countryData) => (
          <CountryCard key={Number(countryData.numericCode)} country={countryData} />
        ))}
      </div>
    </main>
  );
};

export default CountriesList;

// TODO: wrapper each CountryCard in an anchor tag, making it a list of links rather than a list of CountryCard

// TODO: work on a better loading screen