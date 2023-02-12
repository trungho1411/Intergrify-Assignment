import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CountryDetails } from './components/CountryDetails';
import { CountryInformation } from './components/CountryInformation';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showCountries, setShowCountries] = useState([]);

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
          />
        )}
      />
      <Route exact path='/name/:name' render={() => <CountryInformation />} />
    </Router>
  );
};

export default App;

