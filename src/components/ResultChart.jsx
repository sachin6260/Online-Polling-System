import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

const ResultChart = ({ options }) => {
  const totalVotes = options.reduce((total, option) => total + option.votes, 0);

  return (
    <div className="result-chart">
      <h3>
        <FontAwesomeIcon icon={faChartBar} /> Results
      </h3>
      {options.map((option, index) => (
        <div key={index} className="result-bar">
          <span>{option.text}</span>
          <div
            className="bar"
            style={{ width: `${(option.votes / totalVotes) * 100}%` }}
          >
            {option.votes} votes
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultChart;
