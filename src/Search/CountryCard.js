import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.scss';

const CountryCard = ({ name, capital, language, currency, alpha3Code }) => (
  <Link className="CountryCard__Link" to={`/search/${alpha3Code}`}>
    <div className="CountryCard">
      <div className="CountryCard__Header">
        <span className="CountryCard__Name">{name}</span>
        <span>({alpha3Code})</span>
      </div>
      <div className="CountryCard__Content">
        <div className="CountryCard__ContentItem">
          <span className="CountryCard__CountryProp">Capital:</span>
          <span className="CountryCard__CountryPropName">{capital}</span>
        </div>
        <div className="CountryCard__ContentItem">
          <span className="CountryCard__CountryProp"> Language: </span>
          <span className="CountryCard__CountryPropName">{language}</span>
        </div>
        <div className="CountryCard__ContentItem">
          <span className="CountryCard__CountryProp"> Currency: </span>
          <span className="CountryCard__CountryPropName">{currency}</span>
        </div>
      </div>
    </div>
  </Link>
);

export default CountryCard;
