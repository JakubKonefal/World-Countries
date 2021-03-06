import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomChart from '../shared/CustomChart/CustomChart';
import {
  getLargestCountries,
  getAreaPerRegion,
  getAreaPerHemisphere,
  getEarthSurface,
} from '../utils/dataTransform';
import {
  largestCountiresOptions,
  areaPerRegionOptions,
  areaPerHemisphereOptions,
  earthSurfaceOptions,
} from '../utils/chartsOptions';
import ChartsWraper from '../shared/ChartsWraper/ChartsWraper';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import './Area.scss';

const Area = () => {
  useEffect(() => {
    getInitialData();
  }, []);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');

  const [largestCountries, setLargestCountries] = useState({});
  const [areaPerRegion, setAreaPerRegion] = useState({});
  const [areaPerHemisphere, setAreaPerHemisphere] = useState({});
  const [earthSurface, setEarthSurface] = useState({});

  const getInitialData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const { data } = res;
        if (data) {
          setDataLoading(false);
          setLargestCountries(getLargestCountries(data));
          setAreaPerRegion(getAreaPerRegion(data));
          setAreaPerHemisphere(getAreaPerHemisphere(data));
          setEarthSurface(getEarthSurface());
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
          <div className="Area__Header">
            <h5 className="Area__HeaderText">
              Total earth's surface is approximately 510 100 000 square
              kilometers. Almost all the land except Antarctica is divided into
              countries. This uppermost layer of Earth on which we live is
              called crust and is just 35-70km thick on the lands, and 5-10km in
              ocean basins. The entire crust occupies only 1% of Earth's volume.
            </h5>
          </div>
          <ChartsWraper>
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
            <CustomChart
              data={earthSurface}
              options={earthSurfaceOptions}
              initialType="Pie"
              availableTypes={['Doughnut', 'Pie']}
            />
          </ChartsWraper>
        </>
      )}
    </div>
  );
};

export default Area;
