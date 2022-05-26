import {useEffect} from 'react';
import CountriesList from './CountryList';

function Countries() {
  

  useEffect(() => {
    document.title = 'Where in the world | Countries';
  }, [])

  return (
    <>
      <CountriesList />
    </>
  );
}

export default Countries;
