import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import CountriesToolbar from './CountriesToolbar';

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRegionSelect = (region) => {
    const countriesData = [...countries];
    setFilteredCountries(countriesData.filter((cou) => cou.region === region));
  };

  const handleSearch = (countryName) => {
    const countriesData = [...countries];
    setSearchQuery(countryName);
    setFilteredCountries(countriesData.filter((cou) => cou.name.toLowerCase().includes(searchQuery.toLowerCase())));
  };

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

  useEffect(() => {
    setFilteredCountries(countries);
  }, [countries])


  return (
    <>
      <CountriesToolbar
        onSearch={handleSearch}
        name={searchQuery}
        regionSelected={handleRegionSelect} />
      <main className='px-4'>
        <div className='container mx-auto flex flex-wrap gap-16'>
          {isLoading && <div>Fetching data, Please wait...</div>}
          {filteredCountries.map((countryData) => (
            <CountryCard key={Number(countryData.numericCode)} country={countryData} />
          ))}
        </div>
      </main>
    </>
  );
};

export default CountriesList;

// TODO: wrapper each CountryCard in an anchor tag, making it a list of links rather than a list of CountryCard

// TODO: work on a better loading screen