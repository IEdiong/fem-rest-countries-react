// import logo from './logo.svg';
import './App.css';
import CountryList from './components/CountryList';

import Header from './components/Header';

function App() {
  return (
    <div className='pb-48'>
      <Header />
      <CountryList />
    </div>
  );
}

export default App;
