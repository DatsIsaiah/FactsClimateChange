import React from 'react';
import cropData from '../data/cropData.json'; // Import the crop data
import './Crops.css';

function Crops() {
  return (
    <div className="crops-page">
      <h1>Crops in California</h1>
      <p>California's agriculture is diverse and significant, with a variety of crops that are vital to the state's economy and food supply. Below is detailed information about the major crops and how they are impacted by climate change.</p>

      {cropData.map(crop => (
        <div key={crop.name} className="crop-section">
          <h2>{crop.name}</h2>
          <p><strong>Annual Income:</strong> ${crop.annualIncome} billion</p>
          <p><strong>Temperature Range:</strong> {crop.tempRange} °F</p>
          <p><strong>Geographic Distribution:</strong> {crop.geographicDistribution}</p>
          <p><strong>Counties:</strong> {crop.counties}</p>
          <img src={require(`../data/cropImages/${crop.image}`)} alt={`${crop.name} chart`} className="crop-image" />
        </div>
      ))}
    </div>
  );
}

export default Crops;
