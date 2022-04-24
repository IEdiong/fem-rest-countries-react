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

  render() {
    console.log(this.state.countries[0]);
    return <CountryCard />;
  }
}

export default CountryList;
