export const mostNeighborsOptions = {
  'Horizontal Bars': {
    scales: {
      xAxes: [{ ticks: { stepSize: 1, max: 20, min: 1 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
  'Vertical Bars': {
    scales: {
      yAxes: [{ ticks: { stepSize: 2, max: 20, min: 0 } }],
    },
    responsive: true,
    maintainAspectRatio: false,
  },
};
