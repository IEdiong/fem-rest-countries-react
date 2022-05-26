import SearchBar from './common/SearchBar';
import Filter from './common/Filter';

const CountriesToolbar = ({ name, onSearch, regionSelected }) => {
  return (
    <div aria-label='toolbar' className='px-4 '>
      <div className='container mx-auto mt-5 h-40 flex flex-col md:flex-row justify-between items-start'>
        <SearchBar onSearch={onSearch} name={name} />
        <Filter regionSelected={regionSelected}  />
      </div>
    </div>
  );
};

export default CountriesToolbar;
