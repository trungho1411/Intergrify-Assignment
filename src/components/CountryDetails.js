import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import './../App.css';
import { CountryInformation } from './CountryInformation';

export const CountryDetails = ({
  loading,
  error,
  showCountries,
  setSearch,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const history = useHistory();

  const headerStyle = {
    backgroundColor: '#2CA0F0',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
  };

  const searchContainer = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: '5px',
    padding: '5px 10px',
  };

  const searchInput = {
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    marginLeft: '10px',
  };

  const searchIcon = {
    fontSize: '18px',
    marginRight: '10px',
    color: 'grey',
  };

  const menuIcon = {
    fontSize: '18px',
    marginRight: '10px',
  };

  const arrowRightIcon = {
    fontSize: '15px',
    cursor: 'pointer',
    color: 'grey',
    transition: '0.1s ease-in-out',
    verticalAlign: 'middle',
    textAlign: 'left',
  };

  const arrowIconHover = {
    ...arrowRightIcon,
    color: 'black',
  };

  const countryBox = {
    backgroundColor: 'white',
    border: '1px solid grey',
    margin: '10px 0',
    padding: '20px',
  };

  const handleClick = (country) => {
    setSelectedCountry(country);
    history.push(`/name/${country.name.common}`);
  };

  return (
    <div>
      <div>
        <header style={headerStyle}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className='fa fa-bars' style={{ menuIcon }} />
            <h3 style={{ marginLeft: '10px', color: 'white' }}>Country</h3>
          </div>
          <div style={searchContainer}>
            <i className='fa fa-search' style={searchIcon} />
            <input
              type='text'
              style={searchInput}
              placeholder='Search by country name'
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </header>

        {loading && <div>Loading...</div>}
        {error && <div>Error!</div>}
        {!loading && !error && (
          <Table>
            <thead>
              <tr>
                <th>Flags</th>
                <th>Name</th>
                <th>Region</th>
                <th>Population</th>
                <th>Language</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {showCountries.map((country) => (
                <tr key={country.name.common}>
                  <td>
                    <img
                      src={country.flags.png}
                      alt={country.flags.alt}
                      style={{ width: '30%', height: '50%' }}
                    />
                  </td>
                  <td>{country.name.common}</td>
                  <td>{country.region}</td>
                  <td>{country.population}</td>
                  <td>
                    <ul>
                      {country.languages &&
                        Object.values(country.languages).map((p) => (
                          <li values={p}>{p}</li>
                        ))}
                    </ul>
                  </td>
                  <td onClick={() => handleClick(country)}>
                    <i
                      className='fa fa-chevron-right'
                      style={
                        country === selectedCountry
                          ? arrowIconHover
                          : arrowRightIcon
                      }
                      onMouseEnter={() => setSelectedCountry(country)}
                      onMouseLeave={() => setSelectedCountry(null)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        {/* {selectedCountry && (
          <div style={countryBox}>
            <h3>{selectedCountry.name.common}</h3>
            <p>
              <strong>Region:</strong> {selectedCountry.region}
            </p>
            <p>
              <strong>Population:</strong> {selectedCountry.population}
            </p>
            <p>
              <strong>Languages:</strong>{' '}
              {Object.values(selectedCountry.languages).join(', ')}
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};
