import React from 'react';

export const CountryDetails = ({
  searchTerm,
  loading,
  error,
  showCountries,
  setSearch,
}) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search by country name'
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <div>Loading...</div>}
      {error && <div>An error occurred while loading the countries.</div>}
      {!loading && !error && (
        <ul>
          {showCountries.map((country) => (
            <p key={country.name.common}>
              <img src={country.flags.png} alt={country.flags.alt} />
              {country.name.common}
              {country.region}
              {country.population}
              {Object.values(country.languages)}
            </p>
          ))}
        </ul>
      )}
    </div>
  );
};
