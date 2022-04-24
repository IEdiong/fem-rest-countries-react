import React, { Component } from 'react';
import CountryCard from './CountryCard';

class CountryList extends Component {
  state = {
    url: 'https://restcountries.com/v2/all',
    countries: [],
  };

  async componentDidMount() {
    let { url, countries: data } = this.state;
    const response = await fetch(url);

    data = await response.json();

    this.setState({ countries: data });
  }

  getFavouriteCountries = (data) => {
    const fav = ['Germany', 'United States of America', 'Brazil', 'Iceland'];

    return data.filter((countryData) => fav.includes(countryData.name));
  };

  render() {
    const favouriteCountry = this.getFavouriteCountries(this.state.countries);
    // console.log(this.state.countries);
    return (
      <main className='px-4'>
        <div className='container mx-auto flex flex-wrap justify-between gap-16'>
          {favouriteCountry.map((countryData) => (
            <CountryCard key={Number(countryData.numericCode)} country={countryData} />
          ))}
        </div>
      </main>
    );
  }
}

export default CountryList;
