import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  getMostPopulatedCountries,
  getCountriesWithHighestPopDensity,
  getPopulationInRegions,
  getPopulationInHemispheres,
} from '../utils/dataTransform';
import {
  mostPopulatedOptions,
  highestPopDensityOptions,
  populationInRegionsOptions,
  populationInHemispheresOptions,
} from '../utils/chartsOptions';
import ChartsWraper from '../shared/ChartsWraper/ChartsWraper';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';

const Population = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');
  const [mostPopulatedCountries, setMostPopulatedCountries] = useState([]);

  const [
    highestPopulationDensityCountries,
    setHighestPopulationDensityCountries,
  ] = useState([]);
  const [populationInRegions, setPopulationInRegions] = useState([]);
  const [populationInHemispheres, setPopulationInHemispheres] = useState([]);

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const { data } = res;
        if (data) {
          setDataLoading(false);
          setMostPopulatedCountries(getMostPopulatedCountries(data));
          setHighestPopulationDensityCountries(
            getCountriesWithHighestPopDensity(data),
          );
          setPopulationInRegions(getPopulationInRegions(data));
          setPopulationInHemispheres(getPopulationInHemispheres(data));
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
            data={mostPopulatedCountries}
            options={mostPopulatedOptions}
            initialType="Horizontal Bars"
            availableTypes={['Vertical Bars', 'Horizontal Bars', 'Pie']}
          />
          <CustomChart
            data={highestPopulationDensityCountries}
            options={highestPopDensityOptions}
            initialType="Vertical Bars"
            availableTypes={['Horizontal Bars', 'Vertical Bars']}
          />
          <CustomChart
            data={populationInRegions}
            options={populationInRegionsOptions}
            initialType="Pie"
            availableTypes={['Vertical Bars', 'Horizontal Bars', 'Pie']}
          />
          <CustomChart
            data={populationInHemispheres}
            options={populationInHemispheresOptions}
            initialType="Pie"
            availableTypes={['Doughnut', 'Pie']}
          />
        </>
      )}
    </ChartsWraper>
  );
};

export default Population;
