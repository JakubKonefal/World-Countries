import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  getCountriesWithMostNeighbours,
  getCountriesPerHemisphere,
  getCountriesPerRegion,
  getCountriesWithMostTimezones,
} from '../utils/dataTransform';
import {
  countriesPerHemisphereOptions,
  mostTimezonesOptions,
  countriesPerRegionOptions,
  mostNeighboursOptions,
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
    {},
  );
  const [countriesInHemispheres, setCountriesInHemispheres] = useState({});
  const [countriesInRegions, setCountriesInRegions] = useState({});
  const [countriesWithMostTimezones, setCountriesWithMostTimezones] = useState(
    {},
  );

  const getInitialData = () => {
    axios
      .get(
        'https://restcountries.eu/rest/v2/all?fields=name;population;timezones;borders;region;latlng',
      )
      .then(res => {
        const { data } = res;
        if (data) {
          setDataLoading(false);
          setCountriesWithMostNeighbors(
            getCountriesWithMostNeighbours(data, 21),
          );
          setCountriesInHemispheres(getCountriesPerHemisphere(data));
          setCountriesInRegions(getCountriesPerRegion(data));
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
    <div data-aos="fade-down">
      {dataErrorMsg ? (
        <ErrorMessage label={dataErrorMsg} />
      ) : (
        <>
          <div className="Countries__Header">
            <h5 className="Countries__HeaderText">
              How many countries are there in the world? The best answer is
              probably 196. There are 193 member states in the United Nations.
              The 3 missing countries are: Vatican, Palestinian Authority and
              Taiwan. Those members have limited status at the United Nations,
              but are recognized as independent entities. However, United
              Nations recognizes 250 countries and
              <mark className="Countries__TerritoriesLabel"> territories</mark>.
              These territories / colonies don't count, because they are
              governed by other countries. I decided to include all of the 250
              territories in graphs below.
            </h5>
          </div>
          <ChartsWraper>
            <CustomChart
              initialType="Pie"
              availableTypes={['Doughnut', 'Pie']}
              data={countriesInRegions}
              options={countriesPerRegionOptions}
            />
            <CustomChart
              initialType="Doughnut"
              availableTypes={['Pie', 'Doughnut']}
              data={countriesInHemispheres}
              options={countriesPerHemisphereOptions}
            />
            <CustomChart
              initialType="Vertical Bars"
              availableTypes={['Horizontal Bars', 'Vertical Bars']}
              data={countriesWithMostNeighbors}
              options={mostNeighboursOptions}
            />
            <CustomChart
              initialType="Horizontal Bars"
              availableTypes={['Vertical Bars', 'Horizontal Bars']}
              data={countriesWithMostTimezones}
              options={mostTimezonesOptions}
            />
          </ChartsWraper>
        </>
      )}
    </div>
  );
};

export default Countries;
