import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
export const CountryDetails = ({
  search,
  loading,
  error,
  showCountries,
  setSearch,
}) => {
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
  };
  return (
    <div>
      <header style={headerStyle}>
        <h3>Country</h3>
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
      {error && <div>An error occurred while loading the countries.</div>}
      {!loading && !error && (
        <table>
          <thead>
            <tr>
              <th>Flags</th>
              <th>Name</th>
              <th>Region</th>
              <th>Population</th>
              <th>Language</th>
            </tr>
          </thead>
          <tbody>
            {showCountries.map((country) => (
              <tr key={country.name.common}>
                <td>
                  <img src={country.flags.png} alt={country.flags.alt} />
                </td>
                <td>{country.name.common}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>{Object.values(country.languages)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
