import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryDetails } from './components/CountryDetails';
import { CountryInformation } from './components/CountryInformation';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showCountries, setShowCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(5);

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setLoading(false);
        setCountries(response.data);
      } catch (e) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCountries();
    console.log(countries);
  }, []);

  useEffect(() => {
    if (countries.length > 0) {
      const filteredCountries = countries.filter(
        (country) =>
          country.name.common.toLowerCase().indexOf(search.toLowerCase()) !== -1
      );
      setShowCountries(filteredCountries.slice(0, 5));
    }
  }, [countries, search]);

  //logic for displaying current countries
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = showCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  //change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //logic for displaying page numbers
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(showCountries.length / countriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <Router>
      <Route
        exact
        path='/'
        render={() => (
          <CountryDetails
            search={search}
            setSearch={setSearch}
            loading={loading}
            error={error}
            showCountries={showCountries}
            pageNumbers={pageNumbers}
            paginate={paginate}
          />
        )}
      />
      <Route exact path='/name/:name' render={() => <CountryInformation />} />
    </Router>
  );
};

export default App;

