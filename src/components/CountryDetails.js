import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

export const CountryDetails = ({
  loading,
  error,
  showCountries,
  setSearch,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

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

  const countryBox = {
    backgroundColor: 'white',
    border: '1px solid grey',
    margin: '10px 0',
    padding: '20px',
  };

  const handleClick = (country) => {
    setSelectedCountry(country);
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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Flags</th>
                <th>Name</th>
                <th>Region</th>
                <th>Population</th>
                <th>Language</th>
                <th>Details</th>
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
                  <td onClick={() => handleClick(country)}>
                    <i
                      className='fa fa-chevron-right'
                      style={
                        country === selectedCountry ? arrowIconHover : arrowIcon
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
// export const CountryDetails = ({
//   search,
//   loading,
//   error,
//   showCountries,
//   setSearch,
// }) => {
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handleClick = (country) => {
//     setSelectedCountry(country);
//   };

//   return (
//     <Container>
//       <Row className='justify-content-md-center'>
//         <Col md={12}>
//           <InputGroup className='mb-3'>
//             <InputGroup.Prepend>
//               <InputGroup.Text id='basic-addon1'>
//                 <i className='fa fa-search' />
//               </InputGroup.Text>
//             </InputGroup.Prepend>
//             <FormControl
//               placeholder='Search by country name'
//               aria-label='Search by country name'
//               aria-describedby='basic-addon1'
//               onChange={(event) => setSearch(event.target.value)}
//             />
//           </InputGroup>
//         </Col>
//       </Row>
//       <Row>
//         <Col md={12}>
//           {loading && <div>Loading...</div>}
//           {error && <div>Error!</div>}
//           {!loading && !error && (
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Flags</th>
//                   <th>Name</th>
//                   <th>Region</th>
//                   <th>Population</th>
//                   <th>Language</th>
//                   <th>Details</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {showCountries.map((country) => (
//                   <tr key={country.name.common}>
//                     <td>
//                       <img src={country.flags.png} alt={country.flags.alt} />
//                     </td>
//                     <td>{country.name.common}</td>
//                     <td>{country.region}</td>
//                     <td>{country.population}</td>
//                     <td>{Object.values(country.languages)}</td>
//                     <td>
//                       <i
//                         className='fa fa-chevron-right'
//                         style={
//                           country === selectedCountry
//                             ? {
//                                 fontSize: '20px',
//                                 cursor: 'pointer',
//                                 color: 'black',
//                                 transition: '0.1s ease-in-out',
//                               }
//                             : {
//                                 fontSize: '20px',
//                                 cursor: 'pointer',
//                                 color: 'grey',
//                                 transition: '0.1s ease-in-out',
//                               }
//                         }
//                         onClick={() => handleClick(country)}
//                         onMouseEnter={() => setSelectedCountry(country)}
//                         onMouseLeave={() => setSelectedCountry(null)}
//                       ></i>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </Table>
//           )}
//         </Col>
//       </Row>
//       {selectedCountry && (
//         <Row>
//           <Col md={12}>
//             {/* <CountryInformation country={selectedCountry} /> */}
//           </Col>
//         </Row>
//       )}
//     </Container>
//   );
// };
