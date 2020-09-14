import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../shared/Spinner/Spinner';
import './Countries.scss';

const Countries = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [allCountries, setAllCountries] = useState(0);

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setDataLoading(false);
        setAllCountries(res.data.length);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (dataLoading) {
    return <Spinner />;
  }

  return <div>ALL COUNTRIES = {allCountries}</div>;
};

export default Countries;
