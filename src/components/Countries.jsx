import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {useEffect, useState} from 'react';
import CountryDetail from './CountryDetail';
import CountriesList from './CountryList';

function Countries() {
  const [countries, setCountries] = useState([]);

  
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
        }
      } catch (err) {
        console.log(err.message);
      }
    } 
    
    fetchData(url);
    document.title = 'Where in the world | Countries';
    console.log('fetch work');
  }, []);


  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<CountriesList countries={countries} />}> 
          </Route>
          <Route path='/:name' element={<CountryDetail countries={countries} />}>
          </Route>
      </Routes>
    </Router>
  );
}

export default Countries;
