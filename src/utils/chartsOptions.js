export const mostNeighboursOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Countries with most neighbours',
    },
    scales: {
      xAxes: [{ ticks: { stepSize: 1, max: 20, min: 1 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    title: {
      display: true,
      text: 'Countries with most neighbours',
    },
    scales: {
      yAxes: [{ ticks: { stepSize: 2, max: 20, min: 0 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const countriesHemispheresOptions = {
  Doughnut: {
    title: {
      display: true,
      text: 'Number of countries in hemispheres (N/S)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    title: {
      display: true,
      text: 'Number of countries in hemispheres (N/S)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const countriesInRegionsOptions = {
  Doughnut: {
    title: {
      display: true,
      text: 'Number of countries in region',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    title: {
      display: true,
      text: 'Number of countries in region',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const mostTimezonesOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Countries with more than 1 timezone',
    },
    scales: {
      xAxes: [{ ticks: { stepSize: 1, max: 14, min: 1 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    title: {
      display: true,
      text: 'Countries with more than 1 timezone',
    },
    scales: {
      yAxes: [{ ticks: { stepSize: 2, max: 14, min: 0 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const mostPopulatedOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Most populated countries',
    },
    scales: {
      xAxes: [{ ticks: { min: 50000000 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    title: {
      display: true,
      text: 'Most populated countries',
    },
    scales: {
      yAxes: [{ ticks: { min: 50000000 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalPopulation = 7349137231;
          const percentage = ((currentVal / totalPopulation) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Most populated countries',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const highestPopDensityOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Countries with highest population density',
    },
    scales: {
      xAxes: [{ ticks: { min: 150, max: 30000 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    title: {
      display: true,
      text: 'Countries with highest population density',
    },
    scales: {
      yAxes: [{ ticks: { min: 150, max: 30000 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    title: {
      display: true,
      text: 'Countries with highest population density',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const populationInRegionsOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Population in regions',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    title: {
      display: true,
      text: 'Population in regions',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalPopulation = 7349137231;
          const percentage = ((currentVal / totalPopulation) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Population in regions',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const populationInHemispheresOptions = {
  Doughnut: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalPopulation = 7349137231;
          const percentage = ((currentVal / totalPopulation) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Number of people in hemispheres (N/S)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalPopulation = 7349137231;
          const percentage = ((currentVal / totalPopulation) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Number of people in hemispheres (N/S)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const largestCountiresOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Largest countries (areas in square km)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    title: {
      display: true,
      text: 'Largest countries (areas in square km)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const areaPerRegionOptions = {
  Pie: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalLandsArea = 150290562;
          const percentage = ((currentVal / totalLandsArea) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Area per region (square km)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Doughnut: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalLandsArea = 150290562;
          const percentage = ((currentVal / totalLandsArea) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Area per region (square km)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};

export const areaPerHemisphereOptions = {
  Doughnut: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalLandsArea = 150290562;
          const percentage = ((currentVal / totalLandsArea) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Area per hemisphere (square km)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const currentVal = dataset.data[tooltipItem.index];
          const currentName = data.labels[tooltipItem.index];
          const totalLandsArea = 150290562;
          const percentage = ((currentVal / totalLandsArea) * 100).toFixed(0);
          return `${currentName}: ${currentVal} (${percentage}%)`;
        },
      },
    },
    title: {
      display: true,
      text: 'Area per hemisphere (square km)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};
