import { useParams, Link } from 'react-router-dom';

const CountryDetail = () => {
  const param = useParams();

  return (
    <div>
        <Link to='/'>&larr; Back</Link>
      <h1>Country Detail for: {param.name}</h1>
    </div>
  );
};

export default CountryDetail;
