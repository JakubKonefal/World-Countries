const setOf20Colors = [
  '#56536B',
  '#575C55',
  '#6C7D47',
  '#96a13a',
  '#ACC12F',
  '#F1A208',
  '#B86f52',
  '#F78764',
  '#D87CAC',
  '#F9B9C3',
  '#D2E4C4',
  '#E4E9B2',
  '#6C7D47',
  '#E7E08B',
  '#00A7E1',
  '#D7263D',
  '#D138BF',
  '#61FF7E',
  '#F7CB15',
  '#FF7F11',
];

export const getCountriesWithMostNeighbours = (data, number) => {
  const countriesWithMostNeighbours = data.map(country => {
    const { name, borders } = country;
    return { name, neighbours: borders.length };
  });
  const sortedCountriesWithMostNeighbours = countriesWithMostNeighbours
    .sort((a, b) => b.neighbours - a.neighbours)
    .slice(0, number);

  const labels = sortedCountriesWithMostNeighbours.map(country => country.name);
  const chartData = sortedCountriesWithMostNeighbours.map(
    country => country.neighbours,
  );

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Neighbours',
        data: chartData,
        backgroundColor: setOf20Colors,
      },
    ],
  };

  return dataForChart;
};

export const getCountriesInHemispheres = data => {
  let northernHemisphereCountries = 0;
  let southernHemisphereCountries = 0;

  data.forEach(country => {
    country.latlng[0] >= 0
      ? northernHemisphereCountries++
      : southernHemisphereCountries++;
  });

  const labels = ['Northern Hemisphere', 'Southern Hemisphere'];

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Countires on hemispheres (N/S)',
        data: [northernHemisphereCountries, southernHemisphereCountries],
        backgroundColor: ['green', 'yellow'],
      },
    ],
  };
  return dataForChart;
};

export const getCountriesInRegions = data => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'];
  const numberOfCountriesForRegion = {
    Africa: 0,
    Americas: 0,
    Asia: 0,
    Europe: 0,
    Oceania: 0,
    Polar: 0,
  };

  data.forEach(country => {
    const { region } = country;
    if (region) {
      numberOfCountriesForRegion[region]++;
    }
  });

  const dataForChart = {
    labels: regions,
    datasets: [
      {
        label: 'Number of countries in region',
        data: Object.values(numberOfCountriesForRegion),
        backgroundColor: setOf20Colors,
      },
    ],
  };

  return dataForChart;
};

export const getGiniIndexesForCountries = (data, number) => {
  const x = data.reduce((results, item) => {
    const { name, gini } = item;
    if (gini) {
      results.push({ [name]: gini });
    }
    return results;
  }, []);

  return x;
};
