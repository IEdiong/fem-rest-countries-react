import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {useEffect} from 'react';
import CountryDetail from './CountryDetail';
import CountriesList from './CountryList';

function Countries() {
  

  useEffect(() => {
    document.title = 'Where in the world | Countries';
  }, [])

  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<CountriesList />}> 
          </Route>
          <Route path='/:name' element={<CountryDetail />}>
          </Route>
      </Routes>
    </Router>
  );
}

export default Countries;
