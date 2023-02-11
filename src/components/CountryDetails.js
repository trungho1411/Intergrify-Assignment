import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

export const CountryDetails = ({
  search,
  loading,
  error,
  showCountries,
  setSearch,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  // const [showModal, setShowModal] = useState(false);

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
    color: 'red',
  };

  const arrowIcon = {
    fontSize: '20px',
    cursor: 'pointer',
    color: 'grey',
    transition: '0.1s ease-in-out',
  };

  const arrowIconHover = {
    ...arrowIcon,
    color: 'black',
  };

  const handleClick = (country) => {
    setSelectedCountry(country);
    // setShowModal(true);
  };

  return (
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
        <table>
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
                  <img src={country.flags.png} alt={country.flags.alt} />
                </td>
                <td>{country.name.common}</td>
                <td>{country.region}</td>
                <td>{country.population}</td>
                <td>{Object.values(country.languages)}</td>
                <td>
                  <i
                    className='fa fa-chevron-right'
                    style={
                      country === selectedCountry ? arrowIconHover : arrowIcon
                    }
                    onClick={() => handleClick(country)}
                    onMouseEnter={() => setSelectedCountry(country)}
                    onMouseLeave={() => setSelectedCountry(null)}
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
