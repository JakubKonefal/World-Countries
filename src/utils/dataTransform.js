import setOfColors from '../config/chartsColorSet';

export const getCountriesPerRegion = data => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'];
  const numberOfCountriesPerRegion = {
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
      numberOfCountriesPerRegion[region]++;
    }
  });

  const dataForChart = {
    labels: regions,
    datasets: [
      {
        label: 'Number of countries in region',
        data: Object.values(numberOfCountriesPerRegion),
        backgroundColor: setOfColors,
        borderWidth: 3,
        borderColor: '#000',
        hoverBorderColor: '#fff',
      },
    ],
  };

  return dataForChart;
};

export const getCountriesPerHemisphere = data => {
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
        borderWidth: 3,
        borderColor: '#000',
        hoverBorderColor: '#fff',
      },
    ],
  };
  return dataForChart;
};

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
        backgroundColor: setOfColors,
        hoverBorderColor: '#fff',
      },
    ],
  };

  return dataForChart;
};

export const getCountriesWithMostTimezones = (data, number) => {
  const countriesWithNumberOfTimezones = data.map(country => {
    const { name, timezones } = country;
    return { name, timezones: timezones.length };
  });
  countriesWithNumberOfTimezones.sort((a, b) => b.timezones - a.timezones);

  const countriesWithMoreThanOneTimezone = countriesWithNumberOfTimezones.slice(
    0,
    number,
  );

  const labels = countriesWithMoreThanOneTimezone.map(country => country.name);
  const chartData = countriesWithMoreThanOneTimezone.map(
    country => country.timezones,
  );

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Timezones',
        data: chartData,
        backgroundColor: setOfColors,
        hoverBorderColor: '#fff',
        barPercentage: '0.75',
        categoryPercentage: '0.7',
      },
    ],
  };

  return dataForChart;
};

export const populationOverTime = {
  labels: [
    '0',
    '200',
    '600',
    '1000',
    '1400',
    '1800',
    '1900',
    '1950',
    '1970',
    '1990',
    '2000',
    '2010',
    '2020',
  ],
  datasets: [
    {
      label: 'Population',
      data: [
        170000000,
        190000000,
        200000000,
        275000000,
        350000000,
        1000000000,
        1600000000,
        2584034261,
        3700437046,
        5327231061,
        6143493823,
        6956823603,
        7794798739,
      ],
      backgroundColor: setOfColors,
      lineTension: '0.01',
      pointRadius: '5',
    },
  ],
};

export const populationDensityOverTime = {
  labels: [
    '0',
    '200',
    '600',
    '1000',
    '1400',
    '1800',
    '1900',
    '1950',
    '1970',
    '1990',
    '2000',
    '2010',
    '2020',
  ],
  datasets: [
    {
      label: 'People per square km',
      data: [1.14, 1.27, 1.34, 1.84, 2.34, 7, 11, 17, 25, 36, 41, 47, 52],
      backgroundColor: setOfColors,
      lineTension: '0.55',
      fill: 'false',
      pointStyle: 'triangle',
      pointRadius: '6',
    },
  ],
};

export const getMostPopulatedCountries = data => {
  const countriesWithPopulation = data
    .map(country => {
      const { name, population } = country;
      return { name, population };
    })
    .sort((a, b) => b.population - a.population);

  let totalPopulation = 0;

  data.forEach(country => {
    totalPopulation += country.population;
  });

  const top10PopulatedCountries = countriesWithPopulation.slice(0, 10);
  let top10CountriesPopulation = 0;
  top10PopulatedCountries.forEach(country => {
    top10CountriesPopulation += country.population;
  });

  const restOfTheWordldPopulation = totalPopulation - top10CountriesPopulation;

  const labels = top10PopulatedCountries.map(country => country.name);
  labels.push('Rest');
  const chartData = top10PopulatedCountries.map(country => country.population);
  chartData.push(restOfTheWordldPopulation);

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Population',
        data: chartData,
        backgroundColor: setOfColors,
      },
    ],
  };

  return dataForChart;
};

export const getCountriesWithHighestPopDensity = data => {
  const countriesWithPopulationDensities = data
    .map(country => {
      const { name, population, area } = country;
      if (population && area) {
        const density = (population / area).toFixed();
        return { name, density };
      }
    })
    .sort((a, b) => b.density - a.density);

  const topCountriesWithPopulationDensity = countriesWithPopulationDensities.slice(
    0,
    11,
  );

  const labels = topCountriesWithPopulationDensity.map(country => country.name);
  const chartData = topCountriesWithPopulationDensity.map(
    country => country.density,
  );

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'People per square km',
        data: chartData,
        backgroundColor: setOfColors,
      },
    ],
  };

  return dataForChart;
};

export const getPopulationPerRegion = data => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'];
  const numberOfPeoplePerRegion = {
    Africa: 0,
    Americas: 0,
    Asia: 0,
    Europe: 0,
    Oceania: 0,
    Polar: 0,
  };

  data.forEach(country => {
    const { region, population } = country;
    if (population) {
      numberOfPeoplePerRegion[region] += population;
    }
  });

  const dataForChart = {
    labels: regions,
    datasets: [
      {
        label: 'People',
        data: Object.values(numberOfPeoplePerRegion),
        backgroundColor: setOfColors,
      },
    ],
  };

  return dataForChart;
};

export const getPopulationPerHemisphere = data => {
  let northernHemispherePopulation = 0;
  let southernHemispherePopulation = 0;

  data.forEach(country => {
    const { population } = country;
    country.latlng[0] >= 0
      ? (northernHemispherePopulation += population)
      : (southernHemispherePopulation += population);
  });

  const labels = ['Northern Hemisphere', 'Southern Hemisphere'];

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Population on hemispheres (N/S)',
        data: [northernHemispherePopulation, southernHemispherePopulation],
        backgroundColor: ['green', 'yellow'],
      },
    ],
  };
  return dataForChart;
};

export const getLargestCountries = data => {
  const countriesWithAreas = data
    .map(country => {
      const { name, area } = country;
      return { name, area };
    })
    .sort((a, b) => b.area - a.area);

  const top15LargestCountries = countriesWithAreas.slice(0, 15);

  const labels = top15LargestCountries.map(country => country.name);
  const chartData = top15LargestCountries.map(country => country.area);

  const dataForChart = {
    labels,
    datasets: [
      {
        labels: 'Area',
        data: chartData,
        backgroundColor: setOfColors,
      },
    ],
  };

  return dataForChart;
};

export const getAreaPerRegion = data => {
  const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Polar'];
  const areaPerRegion = {
    Africa: 0,
    Americas: 0,
    Asia: 0,
    Europe: 0,
    Oceania: 0,
    Polar: 0,
  };

  data.forEach(country => {
    const { region, area } = country;
    if (area) {
      areaPerRegion[region] += area;
    }
  });

  const dataForChart = {
    labels: regions,
    datasets: [
      {
        label: 'People',
        data: Object.values(areaPerRegion),
        backgroundColor: setOfColors,
        borderWidth: '4',
        borderAlign: 'inner',
        hoverBorderColor: '#000',
      },
    ],
  };

  return dataForChart;
};

export const getAreaPerHemisphere = data => {
  let northernHemisphereArea = 0;
  let southernHemisphereArea = 0;

  data.forEach(country => {
    const { area } = country;
    country.latlng[0] >= 0
      ? (northernHemisphereArea += area)
      : (southernHemisphereArea += area);
  });

  const labels = ['Northern Hemisphere', 'Southern Hemisphere'];

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Area per hemisphere (square km)',
        data: [northernHemisphereArea, southernHemisphereArea],
        backgroundColor: ['green', 'yellow'],
        hoverBackgroundColor: '#ccc',
      },
    ],
  };
  return dataForChart;
};

export const getEarthSurface = () => {
  const labels = ['Lands', 'Water'];
  const chartData = [148940000, 361132000];

  const dataForChart = {
    labels,
    datasets: [
      {
        label: 'Area',
        data: chartData,
        backgroundColor: ['green', 'blue'],
        hoverBackgroundColor: '#ccc',
      },
    ],
  };

  return dataForChart;
};
