import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  getCountriesWithMostNeighbours,
  getCountriesInHemispheres,
  getCountriesInRegions,
  getCountriesWithMostTimezones,
} from '../utils/dataTransform';
import {
  mostNeighboursOptions,
  countriesHemispheresOptions,
  countriesInRegionsOptions,
  mostTimezonesOptions,
} from '../utils/chartsOptions';
import ChartsWraper from '../shared/ChartsWraper/ChartsWraper';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import './Countries.scss';

const Countries = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');
  const [countriesWithMostNeighbors, setCountriesWithMostNeighbors] = useState(
    [],
  );
  const [countriesInHemispheres, setCountriesInHemispheres] = useState([]);
  const [countriesInRegions, setCountriesInRegions] = useState([]);
  const [countriesWithMostTimezones, setCountriesWithMostTimezones] = useState(
    [],
  );

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const { data } = res;
        if (data) {
          setDataLoading(false);
          setCountriesWithMostNeighbors(
            getCountriesWithMostNeighbours(data, 21),
          );
          setCountriesInHemispheres(getCountriesInHemispheres(data));
          setCountriesInRegions(getCountriesInRegions(data));
          setCountriesWithMostTimezones(
            getCountriesWithMostTimezones(data, 25),
          );
        }
      })
      .catch(() => {
        setDataLoading(false);
        setDataErrorMsg('Error while trying to get data!');
      });
  };

  if (dataLoading) {
    return <Spinner />;
  }

  return (
    <ChartsWraper>
      {dataErrorMsg ? (
        <ErrorMessage label={dataErrorMsg} />
      ) : (
        <>
          <CustomChart
            initialType="Doughnut"
            availableTypes={['Pie', 'Doughnut']}
            data={countriesInHemispheres}
            options={countriesHemispheresOptions}
          />
          <CustomChart
            initialType="Pie"
            availableTypes={['Doughnut', 'Pie']}
            data={countriesInRegions}
            options={countriesInRegionsOptions}
          />
          <CustomChart
            initialType="Horizontal Bars"
            availableTypes={['Vertical Bars', 'Horizontal Bars']}
            data={countriesWithMostTimezones}
            options={mostTimezonesOptions}
          />
          <CustomChart
            initialType="Vertical Bars"
            availableTypes={['Horizontal Bars', 'Vertical Bars']}
            data={countriesWithMostNeighbors}
            options={mostNeighboursOptions}
          />
        </>
      )}
    </ChartsWraper>
  );
};

export default Countries;
