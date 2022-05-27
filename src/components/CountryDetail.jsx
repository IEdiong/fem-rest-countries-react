import { useParams, Link } from 'react-router-dom';

const CountryDetail = ({ countries }) => {
  const param = useParams();

  const [country] = countries.filter((c) => c.name.toLowerCase() === param.name);
  // console.log(country);

  const borderCountries = () => {
    const { borders } = country;

    return borders.map((b) => countries.filter((c) => c.alpha3Code === b)[0].name);
  };

  return (
    <main className='mt-14'>
      <div className='container mx-auto'>
        <Link to='/' className='shadow-3xl px-8 py-2 rounded-md'>
          &larr; <span className='ml-2'>Back</span>
        </Link>
        <div>
          <section>
            <div className='container mx-auto mt-5 flex flex-col md:flex-row justify-between items-start gap-36'>
              <img src={country.flag} alt={`flag of ${country.name}`} className='aspect-[4/3] w-2/5' />
              <div className='flex-1 py-10'>
                <h1 className='font-black text-2xl mb-10'>{country.name}</h1>

                <div className='flex justify-between'>
                  <ul className='flex flex-col gap-2'>
                    <li>
                      <span className='font-semibold mr-2'>Native Name:</span>
                      {country.nativeName}
                    </li>
                    <li>
                      <span className='font-semibold mr-2'>Population:</span>
                      {country.population}
                    </li>
                    <li>
                      <span className='font-semibold mr-2'>Region:</span>
                      {country.region}
                    </li>
                    <li>
                      <span className='font-semibold mr-2'>Sub Region:</span>
                      {country.subregion}
                    </li>
                    <li>
                      <span className='font-semibold mr-2'>Capital:</span>
                      {country.capital}
                    </li>
                  </ul>
                  <ul className='flex flex-col gap-2'>
                    <li>
                      <span className='font-semibold mr-2'>Top Level Domain:</span>
                      {country.topLevelDomain}
                    </li>
                    <li>
                      <span className='font-semibold mr-2'>Currencies:</span>
                      {country.currencies[0].name}
                    </li>
                    <li>
                      <span className='font-semibold mr-2'>Languages:</span>
                      {country.languages.map((lng) => lng.name).join(', ')}
                    </li>
                  </ul>
                </div>

                <p className='mt-10'>
                  <span className='font-semibold mr-2'>Border Countries:</span>
                  {borderCountries().map((cou, id) => (
                    <Link to={`/${cou}`} className='shadow-md px-6 py-2 rounded-md' key={id}>{cou}</Link>
                  ))}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CountryDetail;
