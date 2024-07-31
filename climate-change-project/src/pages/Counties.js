import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countyData from '../data/countyData.json';
import './Counties.css';

function Counties() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
  };

  return (
    <div className="counties-container">
      <div className="map-container">
        <MapContainer 
          center={[36.7783, -119.4179]} 
          zoom={6} 
          style={{ height: '500px', width: '100%' }}
          dragging={false} 
          scrollWheelZoom={false} 
          doubleClickZoom={false} 
          boxZoom={false} 
          keyboard={false} 
          zoomControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {countyData.counties.map((county, index) => (
            <Marker key={index} position={county.coordinates}>
              <Popup onOpen={() => handleCountyClick(county)}>
                <h3>{county.name}</h3>
                <p>Click to see more details below.</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="info-panel">
        <h1>Explore California Counties</h1>
        <p>Click on a county on the map to see detailed information about its crops, impacts, economic risks, and adaptation strategies.</p>
        {selectedCounty ? (
          <div className="county-details">
            <h2>{selectedCounty.name}</h2>
            <p><strong>Crops:</strong> {selectedCounty.crops.join(', ')}</p>
            <p><strong>Impacts:</strong> {selectedCounty.impacts}</p>
            <p><strong>Economic Risks:</strong> {selectedCounty.economic_risks}</p>
            <p><strong>Adaptation Strategies:</strong> {selectedCounty.adaptation_strategies.join(', ')}</p>
          </div>
        ) : (
          <p>Select a county from the map to see more information.</p>
        )}
      </div>
    </div>
  );
}

export default Counties;
