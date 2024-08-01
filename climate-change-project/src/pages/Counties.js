import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import countyData from '../data/countyData.json';
import './Counties.css';
import L from 'leaflet';

const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

function Counties() {
  const [selectedCounty, setSelectedCounty] = useState(null);

  const handleCountyClick = (county) => {
    setSelectedCounty(county);
  };

  return (
    <div className="counties-layout">
      <div className="map-section">
        <MapContainer
          center={[37.5, -119]}
          zoom={6}
          style={{ height: '80vh', width: '100%', backgroundColor: '#f9f9f9' }}
          maxBounds={[[32, -125], [42, -114]]}
          minZoom={5}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {countyData.counties.map(county => (
            <Marker
              key={county.name}
              position={[county.lat, county.lng]}
              icon={defaultIcon}
              eventHandlers={{
                click: () => handleCountyClick(county)
              }}
            >
              <Popup>{county.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="info-section">
        <h1>Explore California Counties</h1>
        {selectedCounty ? (
          <>
            <h2>{selectedCounty.name}</h2>
            <p><strong>Crops:</strong> {selectedCounty.crops.join(', ')}</p>
            <p><strong>Impacts:</strong> {selectedCounty.impacts}</p>
            <p><strong>Economic Risks:</strong> {selectedCounty.economic_risks}</p>
            <p><strong>Adaptation Strategies:</strong> {selectedCounty.adaptation_strategies.join(', ')}</p>
          </>
        ) : (
          <p>Click on a county marker on the map to see detailed information about its crops, impacts, economic risks, and adaptation strategies.</p>
        )}
      </div>
    </div>
  );
}

export default Counties;
