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
        label: 'Countries with most neighbours',
        data: chartData,
        backgroundColor: setOf20Colors,
      },
    ],
  };

  return dataForChart;
};

export const getCountriesOnSouthAndNorth = data => {
  let northHemisphere = 0;
  let southHemisphere = 0;

  data.forEach(country => {
    country.latlng[0] >= 0 ? northHemisphere++ : southHemisphere++;
  });

  const labels = ['Northern Hemisphere', 'SouthernHemisphere'];
};
