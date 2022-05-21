import {useState} from 'react';
import CountriesToolbar from './CountriesToolbar';
import CountriesList from './CountryList';

function Countries() {
  const [searchName, setSearchName] = useState('');
  const handleSearch = (countryName) => {
    setSearchName(countryName);
    console.log(searchName);
  }

  return (
    <>
      <CountriesToolbar
      onSearch={handleSearch}
      name={searchName} />
      <CountriesList name={searchName} />
    </>
  );
}

export default Countries;
