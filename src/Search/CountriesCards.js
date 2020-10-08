import React, { useEffect } from 'react';
import CountryCard from './CountryCard';
import './CountriesCards.scss';

const CountriesCards = ({ countries }) => {
  useEffect(() => {}, [countries]);
  return (
    <div className="CountriesCards">
      {countries.map(country => {
        const { name, capital, currencies, languages, alpha3Code } = country;
        return (
          <CountryCard
            key={alpha3Code}
            name={name}
            capital={capital}
            language={languages[0].name}
            currency={currencies[0].name}
            alpha3Code={alpha3Code}
          />
        );
      })}
    </div>
  );
};

export default CountriesCards;
