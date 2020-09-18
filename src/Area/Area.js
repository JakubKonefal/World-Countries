import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  getLargestCountries,
  getAreaPerRegion,
  getAreaPerHemisphere,
} from '../utils/dataTransform';
import {
  largestCountiresOptions,
  areaPerRegionOptions,
  areaPerHemisphereOptions,
} from '../utils/chartsOptions';
import ChartsWraper from '../shared/ChartsWraper/ChartsWraper';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';

const Area = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');

  const [largestCountries, setLargestCountries] = useState([]);
  const [areaPerRegion, setAreaPerRegion] = useState([]);
  const [areaPerHemisphere, setAreaPerHemisphere] = useState([]);

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const { data } = res;
        if (data) {
          console.log(data);
          setDataLoading(false);
          setLargestCountries(getLargestCountries(data));
          setAreaPerRegion(getAreaPerRegion(data));
          setAreaPerHemisphere(getAreaPerHemisphere(data));
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
            data={largestCountries}
            options={largestCountiresOptions}
            initialType="Horizontal Bars"
            availableTypes={['Vertical Bars', 'Horizontal Bars']}
          />
          <CustomChart
            data={areaPerRegion}
            options={areaPerRegionOptions}
            initialType="Pie"
            availableTypes={['Doughnut', 'Pie']}
          />
          <CustomChart
            data={areaPerHemisphere}
            options={areaPerHemisphereOptions}
            initialType="Pie"
            availableTypes={['Doughnut', 'Pie']}
          />
        </>
      )}
    </ChartsWraper>
  );
};

export default Area;
