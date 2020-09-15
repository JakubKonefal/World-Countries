import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  getCountriesWithMostNeighbours,
  getCountriesOnSouthAndNorth,
} from '../utils/dataTransform';
import { mostNeighborsOptions } from '../utils/chartsOptions';
import Spinner from '../shared/Spinner/Spinner';
import './Countries.scss';

const Countries = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [countriesWithMostNeighbors, setCountriesWithMostNeighbors] = useState(
    [],
  );

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        console.log(res.data);
        setDataLoading(false);
        setCountriesWithMostNeighbors(
          getCountriesWithMostNeighbours(res.data, 20),
        );
        getCountriesOnSouthAndNorth(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <div className="Countries">
      <CustomChart
        initialType="Vertical Bars"
        availableTypes={['Horizontal Bars', 'Vertical Bars']}
        data={countriesWithMostNeighbors}
        options={mostNeighborsOptions}
      />
      <CustomChart
        initialType="Horizontal Bars"
        availableTypes={['Horizontal Bars', 'Vertical Bars']}
        data={countriesWithMostNeighbors}
        options={mostNeighborsOptions}
      />
      <CustomChart
        initialType="Vertical Bars"
        availableTypes={['Horizontal Bars', 'Vertical Bars']}
        data={countriesWithMostNeighbors}
        options={mostNeighborsOptions}
      />
      <CustomChart
        initialType="Horizontal Bars"
        availableTypes={['Horizontal Bars', 'Vertical Bars']}
        data={countriesWithMostNeighbors}
        options={mostNeighborsOptions}
      />
    </div>
  );
};

export default Countries;
