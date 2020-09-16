export const mostNeighboursOptions = {
  'Horizontal Bars': {
    title: {
      display: true,
      text: 'Top 20 countires with most neighbours',
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
      text: 'Top 20 countires with most neighbours',
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
      text: 'Number of countries on hemispheres (N/S)',
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  Pie: {
    title: {
      display: true,
      text: 'Number of countries on hemispheres (N/S)',
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
