import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InputAdornment, TextField, Tooltip } from '@material-ui/core';
import { SearchOutlined, Casino } from '@material-ui/icons';
import StylesProvider from '@material-ui/styles/StylesProvider';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import CountriesCards from './CountriesCards';
import './Search.scss';

const Search = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [searchedValue, setSearchedValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const { data } = res;
        if (data) {
          setDataLoading(false);
          setAllCountries(data);
        }
      })
      .catch(() => {
        setDataLoading(false);
        setDataErrorMsg('Error while trying to get data!');
      });
  };

  const handleSearchbarChange = e => {
    setSearchedValue(e.target.value);
    const results = allCountries.filter(
      country =>
        country.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        country.alpha3Code.toLowerCase().includes(e.target.value.toLowerCase()),
    );
    setSearchResults(results);
  };

  const handleCountryRandomize = () => {
    const randomIndex =
      Math.floor(Math.random() * (allCountries.length - 1)) + 1;
    const randomCountry = allCountries[randomIndex];
    setSearchedValue(randomCountry.name);
    setSearchResults([randomCountry]);
  };

  const handleClearInput = () => {
    setSearchedValue('');
  };

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <div data-aos="fade-down">
      {dataErrorMsg ? (
        <ErrorMessage label={dataErrorMsg} />
      ) : (
        <StylesProvider injectFirst>
          <div className="Search__Header">
            <h5 className="Search__HeaderText">
              If you'd like to know more about any given country, you can find
              much more information here. For example currencies, languages,
              flags and different types of codes. Use searchbar to find the
              country you want to know more about and click it.
            </h5>
          </div>
          <div className="Search__SearchBarWraper">
            <TextField
              className="Search__SearchBar"
              onChange={handleSearchbarChange}
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              }}
              value={searchedValue}
            />
            <Tooltip
              className="Search__RandomCountryTooltip"
              title="Random country"
              placement="top"
              onClick={handleCountryRandomize}
            >
              <Casino className="Search__RandomCountryIcon" />
            </Tooltip>
            <span
              className={searchedValue ? 'Search__ClearBtn' : 'Hidden'}
              onClick={handleClearInput}
            >
              Clear
            </span>
          </div>
          <CountriesCards
            countries={searchedValue ? searchResults : allCountries}
          />
        </StylesProvider>
      )}
    </div>
  );
};

export default Search;
