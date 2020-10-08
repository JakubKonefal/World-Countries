import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  populationOverTime,
  populationDensityOverTime,
  getMostPopulatedCountries,
  getCountriesWithHighestPopDensity,
  getPopulationPerRegion,
  getPopulationPerHemisphere,
} from '../utils/dataTransform';
import {
  mostPopulatedOptions,
  highestPopDensityOptions,
  populationPerRegionOptions,
  populationPerHemispheresOptions,
  worldPopulationOptions,
  worldPopulationDensityOptions,
} from '../utils/chartsOptions';
import ChartsWraper from '../shared/ChartsWraper/ChartsWraper';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import './Population.scss';

const Population = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');
  const [mostPopulatedCountries, setMostPopulatedCountries] = useState({});

  const [
    highestPopulationDensityCountries,
    setHighestPopulationDensityCountries,
  ] = useState({});
  const [populationInRegions, setPopulationInRegions] = useState({});
  const [populationInHemispheres, setPopulationInHemispheres] = useState({});

  const getInitialData = () => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;population;region;area;latlng',
      )
      .then(res => {
        const { data } = res;
        if (data) {
          setDataLoading(false);
          setMostPopulatedCountries(getMostPopulatedCountries(data));
          setHighestPopulationDensityCountries(
            getCountriesWithHighestPopDensity(data),
          );
          setPopulationInRegions(getPopulationPerRegion(data));
          setPopulationInHemispheres(getPopulationPerHemisphere(data));
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
    <div data-aos="fade-down">
      {dataErrorMsg ? (
        <ErrorMessage label={dataErrorMsg} />
      ) : (
        <>
          <div className="Population__Header">
            <h2 className="Population__HeaderText">
              Total world population is around 7.8 billion. It took over 2
              million years of human history for the world's population to reach
              1 billion, and only 200 years more to reach 7 billion. Number of
              living humans is growing rapidly and long-term global population
              is difficult to predict.
            </h2>
          </div>
          <ChartsWraper>
            <CustomChart
              data={populationOverTime}
              options={worldPopulationOptions}
              initialType="Line"
              availableTypes={['Line']}
            />
            <CustomChart
              data={populationDensityOverTime}
              options={worldPopulationDensityOptions}
              initialType="Line"
              availableTypes={['Line']}
            />
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
              options={populationPerRegionOptions}
              initialType="Pie"
              availableTypes={['Vertical Bars', 'Horizontal Bars', 'Pie']}
            />
            <CustomChart
              data={populationInHemispheres}
              options={populationPerHemispheresOptions}
              initialType="Pie"
              availableTypes={['Doughnut', 'Pie']}
            />
          </ChartsWraper>
        </>
      )}
    </div>
  );
};

export default Population;
