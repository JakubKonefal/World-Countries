import React, { useState } from 'react';
import {
  Line,
  Bar,
  HorizontalBar,
  Doughnut,
  Pie,
  Radar,
} from 'react-chartjs-2';
import './CustomChart.scss';

const CustomChart = ({ initialType, availableTypes, data, options }) => {
  const [chosenType, setChosenType] = useState(initialType);

  const handleSelectChartType = e => {
    setChosenType(e.target.value);
  };

  switch (chosenType || initialType) {
    case 'Line':
      return (
        <div className="CustomChart">
          <div className="CustomChart__SelectWraper">
            <select
              className="CustomChart__Select"
              onChange={handleSelectChartType}
              defaultValue={initialType}
            >
              {availableTypes.map(type => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <Line
            data={data}
            options={options[chosenType]}
            width={600}
            height={350}
          />
        </div>
      );
    case 'Vertical Bars':
      return (
        <div className="CustomChart">
          <div className="CustomChart__SelectWraper">
            <select
              className="CustomChart__Select"
              onChange={handleSelectChartType}
              defaultValue={initialType}
            >
              {availableTypes.map(type => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <Bar
            data={data}
            options={options[chosenType]}
            width={600}
            height={350}
          />
        </div>
      );
    case 'Horizontal Bars':
      return (
        <div className="CustomChart">
          <div className="CustomChart__SelectWraper">
            <select
              className="CustomChart__Select"
              onChange={handleSelectChartType}
              defaultValue={initialType}
            >
              {availableTypes.map(type => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <HorizontalBar
            data={data}
            options={options[chosenType]}
            width={600}
            height={350}
          />
        </div>
      );
    case 'Doughnut':
      return (
        <div className="CustomChart">
          <div className="CustomChart__SelectWraper">
            <select
              className="CustomChart__Select"
              onChange={handleSelectChartType}
              defaultValue={initialType}
            >
              {availableTypes.map(type => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <Doughnut
            data={data}
            options={options[chosenType]}
            width={600}
            height={350}
          />
        </div>
      );
    case 'Pie':
      return (
        <div className="CustomChart">
          <div className="CustomChart__SelectWraper">
            <select
              className="CustomChart__Select"
              onChange={handleSelectChartType}
              defaultValue={initialType}
            >
              {availableTypes.map(type => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <Pie
            data={data}
            options={options[chosenType]}
            width={600}
            height={350}
          />
        </div>
      );
    case 'Radar':
      return (
        <div className="CustomChart">
          <div className="CustomChart__SelectWraper">
            <select
              className="CustomChart__Select"
              onChange={handleSelectChartType}
              defaultValue={initialType}
            >
              {availableTypes.map(type => (
                <option value={type}>{type}</option>
              ))}
            </select>
          </div>
          <Radar
            data={data}
            options={options[chosenType]}
            width={600}
            height={350}
          />
        </div>
      );
    default:
      return <h3>Error</h3>;
  }
};

export default CustomChart;
