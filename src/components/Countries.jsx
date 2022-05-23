import {useEffect, useState} from 'react';
import CountriesToolbar from './CountriesToolbar';
import CountriesList from './CountryList';

function Countries() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (countryName) => {
    // console.log(countryName);
    setSearchQuery(countryName);
  }

  useEffect(() => {
    document.title = 'Where in the world | Countries';
  })

  return (
    <>
      <CountriesToolbar
      onSearch={handleSearch}
      name={searchQuery} />
      <CountriesList name={searchQuery} />
    </>
  );
}

export default Countries;
