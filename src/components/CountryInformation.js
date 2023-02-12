import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

export const CountryInformation = () => {
  const [country, setCountry] = useState({});
  const { name } = useParams();

  const highlight = {
    color: 'blue',
  };

  const arrowLeftIcon = {
    fontSize: '15px',
    cursor: 'pointer',
    color: 'grey',
    transition: '0.1s ease-in-out',
    verticalAlign: 'middle',
    textAlign: 'left',
  };

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3/name/${name}`)
      .then((response) => setCountry(response.data[0]))
      .catch((error) => console.error(error));
  }, [name]);

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h1>{country.name && country.name.common}</h1>
      <p>Capital: {country.capital && country.capital}</p>
      <p>
        <img
          src={country.flags && country.flags[0]}
          alt={country.flags && country.flags[0]}
          style={{ width: '30%', height: '50%' }}
        />
      </p>
      <p>
        The country belongs to{' '}
        <span style={highlight}>{country.region && country.region}</span> region
        and{' '}
        <span style={highlight}>{country.subregion && country.subregion}</span>{' '}
        sub-region.
      </p>
      <p>
        Located at the{' '}
        <span style={highlight}>{country.latlng && country.latlng[0]}</span> °N
        and <span style={highlight}>{country.latlng && country.latlng[1]}</span>{' '}
        °W, this country has a population of{' '}
        <span style={highlight}>
          {country.population && country.population}
        </span>{' '}
        and it has gained the independence, according to the CIA World Factbook
      </p>
      <Link to={`/`}>
        <i className='fa fa-chevron-left' style={arrowLeftIcon}></i>
      </Link>
    </div>
  );
};
