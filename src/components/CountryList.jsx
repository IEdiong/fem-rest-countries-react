import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountryCard from './CountryCard';
import CountriesToolbar from './CountriesToolbar';

const CountriesList = ({ countries }) => {
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
    setFilteredCountries(countries);
    setIsLoading(false);
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
            <Link to={countryData.name.toLowerCase()}
            key={Number(countryData.numericCode)}>
              <CountryCard country={countryData} />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default CountriesList;

// TODO: wrapper each CountryCard in an anchor tag, making it a list of links rather than a list of CountryCard

// TODO: work on a better loading screen