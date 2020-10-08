import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ArrowRightAlt } from '@material-ui/icons';
import Spinner from '../shared/Spinner/Spinner';
import ErrorMessage from '../shared/ErrorMessage/ErrorMessage';
import './Country.scss';

const Country = ({
  match: {
    params: { alpha3Code },
  },
}) => {
  useEffect(() => {
    getCountryData();
  }, [alpha3Code]);

  const [dataLoading, setDataLoading] = useState(true);
  const [dataErrorMsg, setDataErrorMsg] = useState('');
  const [country, setCountry] = useState({});

  const getCountryData = () => {
    axios
      .get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
      .then(res => {
        const { data } = res;
        if (data) {
          setCountry(data);
          setDataLoading(false);
        }
      })
      .catch(() => {
        setDataErrorMsg('Error while trying to get data!');
        setDataLoading(false);
      });
  };

  if (dataLoading) {
    return <Spinner />;
  }

  return dataErrorMsg ? (
    <ErrorMessage label={dataErrorMsg} />
  ) : (
    <section className="Country" data-aos="fade-down">
      <div className="Country__Header">
        <h1 className="Country__Name">{country.name}</h1>
        <Link className="Country__GoBackBtnWraper" to="/search">
          <ArrowRightAlt className="Country__ArrowLefIcon" />{' '}
          <button className="Country__GoBackBtn">
            <span className="Country__GoBackBtnLabel">Go back</span>
          </button>
        </Link>
      </div>

      <h3 className="Country__InfoLabel">Names</h3>
      <div className="Country__GridContainer">
        <span className="Country__GridItem Country__GridItem_InfoType">
          Common
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.name}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Native
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.nativeName}
        </span>
      </div>
      <h3 className="Country__InfoLabel">Languages</h3>
      <div className="Country__GridContainer">
        {country.languages.map(lng => (
          <Fragment key={lng.iso639_1}>
            <span className="Country__GridItem Country__GridItem_InfoType">
              {lng.iso639_1}
            </span>
            <span className="Country__GridItem Country__GridItem_Info">
              {lng.name}
            </span>
          </Fragment>
        ))}
      </div>
      <h3 className="Country__InfoLabel">Currencies</h3>
      <div className="Country__GridContainer">
        {country.currencies.map(currency => (
          <Fragment key={currency.code}>
            <span className="Country__GridItem Country__GridItem_InfoType">
              {currency.code}
            </span>
            <span className="Country__GridItem Country__GridItem_Info">
              {currency.name}
            </span>
          </Fragment>
        ))}
      </div>
      <h3 className="Country__InfoLabel">Codes</h3>
      <div className="Country__GridContainer">
        <span className="Country__GridItem Country__GridItem_InfoType">
          Alpha-2 code
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.alpha2Code}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Alpha-3 code
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.alpha3Code}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Numeric code
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.numericCode}
        </span>
        {country.callingCodes.map((code, index) => (
          <Fragment key={code}>
            <span className="Country__GridItem Country__GridItem_InfoType">
              {`Calling code ${country.callingCodes.length > 1 ? index : ''}`}
            </span>
            <span className="Country__GridItem Country__GridItem_Info">
              {code}
            </span>
          </Fragment>
        ))}
        {country.topLevelDomain.map((domain, index) => (
          <Fragment key={domain}>
            <span className="Country__GridItem Country__GridItem_InfoType">
              {`Top level domain ${
                country.topLevelDomain.length > 1 ? index : ''
              }`}
            </span>
            <span className="Country__GridItem Country__GridItem_Info">
              {domain}
            </span>
          </Fragment>
        ))}
      </div>
      <h3 className="Country__InfoLabel">Geography</h3>
      <div className="Country__GridContainer">
        <span className="Country__GridItem Country__GridItem_InfoType">
          Region
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.region}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Subregion
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.subregion}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Capital
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.capital}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Demonym
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.demonym}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Area
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.area} square km
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Lat/Lng
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.latlng.map((val, index) =>
            country.latlng.length - 1 === index ? val : `${val}, `,
          )}
        </span>
        <span className="Country__GridItem Country__GridItem_InfoType">
          Borders
        </span>
        <span className="Country__GridItem Country__GridItem_Info">
          {country.borders.map((border, index) => (
            <Link
              key={border}
              className="Country__Border_Link"
              to={`/search/${border}`}
            >
              {country.borders.length - 1 === index ? border : `${border}, `}
            </Link>
          ))}
        </span>
      </div>
      <img
        className="Country__Flag"
        src={country.flag}
        alt={`${country.name}-flag`}
      />
    </section>
  );
};

export default Country;
